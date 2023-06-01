'use client';

import PropTypes from 'prop-types';

export default function Details({ params: { username } }) {
  return <span>{`tou em details de ${username}`}</span>;
}

Details.propTypes = {
  params: PropTypes.shape({
    username: PropTypes.string.isRequired,
  }).isRequired,
};
