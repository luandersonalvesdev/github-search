'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import ProfileFinder from '../components/ProfileFinder';
import NavBar from '../components/NavBar';
import ReposTimeline from '../components/ReposTimeline';

export default function Timeline() {
  const router = useRouter();

  useEffect(() => {
    const getUserFromLS = localStorage.getItem('githubSearchUser');
    const getFavorites = JSON.parse(localStorage.getItem('githubSearchFavs'));
    if (!getFavorites) { localStorage.setItem('githubSearchFavs', JSON.stringify([])); }
    if (!getUserFromLS) { router.push('/'); }
  }, [router]);

  return (
    <main>
      <NavBar />
      <ProfileFinder goal="profile" />
      <section>
        <ReposTimeline />
      </section>
    </main>
  );
}
