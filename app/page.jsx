'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import LoginScreenUser from './components/LoginScreenUser';
import ProfileFinder from './components/ProfileFinder';
import LoginAsGuest from './components/LoginAsGuest';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const getUserFromLS = localStorage.getItem('githubSearchUser');
    // eslint-disable-next-line no-unused-expressions
    getUserFromLS && router.push('/timeline');
  }, []);

  return (
    <main
      className="
        bg-neutral-100
        min-h-screen
        flex
        items-center
        justify-center
        flex-col
        "
    >
      <LoginScreenUser />
      <ProfileFinder goal="user" />
      <LoginAsGuest />
    </main>
  );
}
