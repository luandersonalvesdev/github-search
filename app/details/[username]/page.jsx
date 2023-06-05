'use client';

import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import NavBar from '../../components/NavBar';
import ProfileDetails from '../../components/ProfileDetails';
import ReposTimeline from '../../components/ReposTimeline';
import { verifyLogin } from '../../helpers/verifyLogin';

export default function Details({ params: { username } }) {
  const router = useRouter();

  useEffect(() => {
    verifyLogin(router);
  }, []);
  return (
    <main>
      <NavBar />
      <ProfileDetails />
      <ReposTimeline profiles={ [username] } />
    </main>
  );
}

Details.propTypes = {
  params: PropTypes.shape({
    username: PropTypes.string.isRequired,
  }).isRequired,
};
