'use client';

import PropTypes from 'prop-types';
import { useCurrentSearch } from '../context/CurrentSearchContext';

export default function ProfileAvatar({ width, height }) {
  const { currSearch: { avatarUrl } } = useCurrentSearch();
  return (
    <img
      src={ avatarUrl }
      alt="Avatar profile"
      width={ width }
      height={ height }
    />
  );
}

ProfileAvatar.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};
