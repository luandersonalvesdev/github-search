'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ButtonToFavorite from './ButtonToFavorite';
import { fetchUser } from '../service/customFetch';

export default function ProfileCard({ profile }) {
  const [profileCard, setProfileCard] = useState({ login: '' });

  useEffect(() => {
    (async () => {
      const { avatar_url: avatarUrl, login, name } = await fetchUser(profile);
      setProfileCard({ avatarUrl, login, name });
    })();
  }, []);

  return (
    <>
      <Link href={ `/details/${profileCard.login}` }>
        <img
          src={ profileCard.avatarUrl }
          alt={ profileCard.name }
          width="200px"
          height="200px"
        />
        <p>{profileCard.name}</p>
        <p>{profileCard.login}</p>
      </Link>
      <ButtonToFavorite login={ profileCard.login } />
    </>
  );
}

ProfileCard.propTypes = {
  profile: PropTypes.string.isRequired,
};
