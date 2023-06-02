'use client';

import PropTypes from 'prop-types';

export default function RepoCard({
  name, login, avatarUrl, forks, stargazersCount, createdAt, updatedAt,
}) {
  return (
    <ul>
      <li>
        <img src={ avatarUrl } alt="" width="25px" />
        <p>{`${login} / ${name}`}</p>
        <p>{`${createdAt}  ${updatedAt}`}</p>
        <p>{`${stargazersCount}  ${forks}`}</p>
      </li>
    </ul>
  );
}

RepoCard.propTypes = {
  name: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired,
  stargazersCount: PropTypes.number.isRequired,
  forks: PropTypes.number.isRequired,
};
