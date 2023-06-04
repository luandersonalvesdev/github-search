'use client';

import PropTypes from 'prop-types';

export default function ProfileDetails({ profile, repos }) {
  return (
    <span>profile details</span>
  );
}

ProfileDetails.propTypes = {
  profile: PropTypes.shape({}).isRequired,
  repos: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
