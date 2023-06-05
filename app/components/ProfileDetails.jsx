'use client';

import PropTypes from 'prop-types';
import { useGithubUserContext } from '../context/GithubUserContext';

export default function ProfileDetails({ profile, repos }) {
  const a = useGithubUserContext();
  return (
    <span>profile details</span>
  );
}

ProfileDetails.propTypes = {
  profile: PropTypes.shape({}).isRequired,
  repos: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
