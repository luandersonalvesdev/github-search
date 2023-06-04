'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import ProfileFinder from '../components/ProfileFinder';
import NavBar from '../components/NavBar';
import ReposTimeline from '../components/ReposTimeline';
import { useGithubUserContext } from '../context/GithubUserContext';
import { verifyLogin } from '../helpers/verifyLogin';

export default function Timeline() {
  const router = useRouter();

  const a = useGithubUserContext();
  console.log(a);

  useEffect(() => {
    verifyLogin(router);
    const getFavorites = JSON.parse(localStorage.getItem('githubSearchFavs'));
    if (!getFavorites) { localStorage.setItem('githubSearchFavs', JSON.stringify([])); }
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
