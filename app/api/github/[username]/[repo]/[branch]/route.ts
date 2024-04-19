import { NextResponse } from 'next/server';
import { Octokit } from 'octokit';

interface Params {
  params: {
    username: string;
    repo: string;
    branch: string;
  };
}

export async function GET(
  _: Request,
  { params: { username, repo, branch } }: Params
) {
  const workflows = await getWorkflows({
    username,
    repository: repo,
    branch: branch,
  });
  return NextResponse.json({ workflows });
}

const githubAccessToken = process.env.GITHUB_ACCESS_TOKEN;
const octokit = new Octokit({
  auth: githubAccessToken,
});

async function getWorkflows({
  username: owner,
  repository: repo,
  branch: branch,
}: {
  username: string;
  repository: string;
  branch: string;
}) {
  try {
    // Retrieve the latest workflow run
    const { data: workflowRuns } =
      await octokit.rest.actions.listWorkflowRunsForRepo({
        owner: owner,
        repo: repo,
        branch: branch,
      });
    const latestWorkflowRunId = workflowRuns.workflow_runs[0].id;
    console.log('lastWorkflowRunId: ', latestWorkflowRunId);

    // Get the details of the latest workflow run
    const { data: workflowRun } = await octokit.rest.actions.getWorkflowRun({
      owner,
      repo,
      run_id: latestWorkflowRunId,
    });

    return workflowRun.conclusion;
  } catch (error: any) {
    console.error(
      'Error getting branches:',
      error.response?.data?.message || error.message || error
    );
    throw error;
  }
}
