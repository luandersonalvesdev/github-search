'use client';

import Link from 'next/link';
import PropTypes from 'prop-types';
import ButtonToFavorite from './ButtonToFavorite';

export default function ProfileCardFav({ profile }) {
  const { avatar_url: avatarUrl, name, login } = profile;
  return (
    <>
      <Link href={ `/details/${login}` }>
        <img
          src={ avatarUrl }
          alt={ name }
          width="200px"
          height="200px"
        />
        <p>{login}</p>
      </Link>
      <ButtonToFavorite login={ login } />
    </>
  );
}

ProfileCardFav.propTypes = {
  profile: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
  }).isRequired,
};
