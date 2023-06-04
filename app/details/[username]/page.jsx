'use client';

import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { fetchRepo, fetchUser } from '../../service/customFetch';
import NavBar from '../../components/NavBar';
import ProfileDetails from '../../components/ProfileDetails';

export default function Details({ params: { username } }) {
  const [profile, setProfile] = useState({});
  const [repos, setRepos] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const getUserFromLS = localStorage.getItem('githubSearchUser');
    if (!getUserFromLS) { router.push('/'); }
    (async () => {
      const dataProfile = await fetchUser(username);
      const dataRepos = await fetchRepo(username);
      setProfile(dataProfile);
      setRepos(dataRepos);
    })();
  }, []);
  return (
    <main>
      <NavBar />
      <ProfileDetails profile={ profile } repos={ repos } />
    </main>
  );
}

Details.propTypes = {
  params: PropTypes.shape({
    username: PropTypes.string.isRequired,
  }).isRequired,
};
