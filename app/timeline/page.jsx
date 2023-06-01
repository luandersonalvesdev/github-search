'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import ProfileFinder from '../components/ProfileFinder';
import NavBar from '../components/NavBar';

export default function Timeline() {
  const router = useRouter();

  useEffect(() => {
    const getUserFromLS = localStorage.getItem('githubSearchUser');
    // eslint-disable-next-line no-unused-expressions
    !getUserFromLS && router.push('/');
  }, []);

  return (
    <main>
      <NavBar />
      <ProfileFinder goal="profile" />
    </main>
  );
}
