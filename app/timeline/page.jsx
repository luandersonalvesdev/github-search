'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import ProfileFinder from '../components/ProfileFinder';

export default function Timeline() {
  const router = useRouter();

  useEffect(() => {
    const getUserFromLS = localStorage.getItem('githubSearchUser');
    // eslint-disable-next-line no-unused-expressions
    !getUserFromLS && router.push('/');
  }, []);

  return (
    <>
      <h1>na timeline</h1>
      <ProfileFinder goal="profile" />
    </>
  );
}
