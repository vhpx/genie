import { NextRequest, NextResponse } from 'next/server';
import { Octokit } from 'octokit';
import { getInstallationTokens } from '../get-installaion-tokens';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const {
    username,
    repo,
    branch,
  }: { username: string; repo: string; branch: string } = body;

  console.log(username, repo, branch);

  const supabase = createRouteHandlerClient({ cookies });
  const githubAccessToken = await getInstallationTokens({ supabase });

  const octokit = new Octokit({
    auth: githubAccessToken,
  });

  const workflows = await getWorkflows({
    octokit,
    username,
    repository: repo,
    branch: branch,
  });
  return NextResponse.json({ workflows });
}

async function getWorkflows({
  octokit: octokit,
  username: owner,
  repository: repo,
  branch: branch,
}: {
  octokit: any;
  username: string;
  repository: string;
  branch: string;
}) {
  try {
    const { data: workflowRuns } =
      await octokit.rest.actions.listWorkflowRunsForRepo({
        owner: owner,
        repo: repo,
        branch: branch,
      });
    const latestWorkflowRunId = workflowRuns.workflow_runs[0].id;

    const { data: workflowRun } = await octokit.rest.actions.getWorkflowRun({
      owner,
      repo,
      run_id: latestWorkflowRunId,
    });

    if (workflowRun.conclusion === 'failure') {
      const logs = await getWorkflowLogs(
        octokit,
        owner,
        repo,
        latestWorkflowRunId
      );
      return { conclusion: workflowRun.conclusion, logs };
    }

    return { conclusion: workflowRun.conclusion };
  } catch (error: any) {
    throw error;
  }
}

async function getWorkflowLogs(
  octokit: any,
  owner: string,
  repo: string,
  runId: number
) {
  try {
    const { data: jobs } = await octokit.rest.actions.listJobsForWorkflowRun({
      owner,
      repo,
      run_id: runId,
    });

    const logsResponse =
      await octokit.rest.actions.downloadJobLogsForWorkflowRun({
        owner,
        repo,
        job_id: jobs.jobs[0].id,
      });

    const logs = logsResponse.data ? logsResponse.data : null;

    return logs;
  } catch (error: any) {
    throw error;
  }
}
