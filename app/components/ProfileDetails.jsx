'use client';

import PropTypes from 'prop-types';
import ButtonToFavorite from './ButtonToFavorite';

export default function ProfileDetails({ username }) {
  return (
    <div>
      <ButtonToFavorite login={ username } />
    </div>
  );
}

ProfileDetails.propTypes = {
  username: PropTypes.shape({}).isRequired,
};
