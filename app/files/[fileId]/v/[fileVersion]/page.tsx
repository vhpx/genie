import TestFileReprompt from '@/app/test-file-reprompt';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { notFound, redirect } from 'next/navigation';
import { cookies } from 'next/headers';

interface Params {
  params: {
    fileId: string;
    fileVersion: string;
  };
}

export default async function Page({
  params: { fileId, fileVersion },
}: Params) {
  const supabase = createServerComponentClient({
    cookies,
  });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect('/login');

  const fileQuery = supabase
    .from('test_file_versions')
    .select(
      '...test_files(id, name, github_username, repository, branch, target_branch, test_library, test_framework, file_path, initial_prompt), code, created_at'
    )
    .eq('test_file_id', fileId);

  if (fileVersion === 'latest') {
    fileQuery.order('created_at', { ascending: false });
  } else {
    fileQuery.range(parseInt(fileVersion), parseInt(fileVersion));
  }

  const { data: file, error } = await fileQuery.limit(1).single();
  console.log(file, error);
  if (error || !file) notFound();

  return <TestFileReprompt file={{ ...file, version: fileVersion }} />;
}