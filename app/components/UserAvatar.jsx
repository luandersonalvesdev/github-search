'use client';

import PropTypes from 'prop-types';
import { useGithubUserContext } from '../context/GithubUserContext';

const defaultProfileAvatar = 'https://i.stack.imgur.com/frlIf.png';

export default function ProfileAvatar({ width, height }) {
  const { profile: { avatarUrl } } = useGithubUserContext();
  return (
    <img
      src={ avatarUrl.length ? avatarUrl : defaultProfileAvatar }
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
