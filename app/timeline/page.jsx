'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import ProfileFinder from '../components/ProfileFinder';
import NavBar from '../components/NavBar';
import ReposTimeline from '../components/ReposTimeline';
import { verifyLogin } from '../helpers/verifyLogin';

export default function Timeline() {
  const router = useRouter();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    verifyLogin(router);
    const getFavorites = JSON.parse(localStorage.getItem('githubSearchFavs'));
    if (!getFavorites) {
      localStorage.setItem('githubSearchFavs', JSON.stringify([]));
      return;
    }
    setFavorites(getFavorites);
  }, [router]);

  return (
    <main>
      <NavBar />
      <ProfileFinder goal="profile" />
      <section>
        <ReposTimeline profiles={ favorites } />
      </section>
    </main>
  );
}
