import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';

interface Params {
  params: {
    username: string;
    repo: string;
    branchId: string;
    testFileId: string;
    testFileVersionId: string;
  };
}
export async function GET(
  _: Request,
  {
    params: { testFileId, branchId, username, repo, testFileVersionId },
  }: Params
) {
  // Enforce authentication and authorization
  const supabase = createRouteHandlerClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ message: 'Not authorized' }, { status: 401 });
  }
  // Get all files on a branch
  const { data, error} = await supabase
    .from('test_case_versions')
    .select('test_cases(*)')
    .eq('test_file_version_id', testFileVersionId)

  if (error) {
    console.error(  
      'Error getting joined ids (versions and test cases):',
      error
    );
    return NextResponse.error();
  }


  // const { data, error } = await supabase
  //   .from('test_cases')
  //   .select('*')
  //   .in('test_file_id', ids);

  // if (error) {
  //   console.error('Error getting test files:', error);
  //   return NextResponse.error();
  // }

  return NextResponse.json({ testFileVersions: data });
}