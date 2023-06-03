'use client';

import PropTypes from 'prop-types';

const TEEN = 10;

export default function RepoCard({
  name, login, avatarUrl, forks, stargazersCount, createdAt, updatedAt, htmlUrl,
}) {
  const convertCreated = createdAt.substring(0, TEEN).split('-').reverse().join('/');
  const convertUpdated = updatedAt.substring(0, TEEN).split('-').reverse().join('/');
  return (
    <li>
      <a href={ htmlUrl } target="_blank" rel="noreferrer">
        <img src={ avatarUrl } alt="" width="25px" />
        <p>{`${login} / ${name}`}</p>
        <p>{`criado: ${convertCreated}`}</p>
        <p>{`Último update: ${convertUpdated}`}</p>
        <p>{`Estrelas: ${stargazersCount}  Forks: ${forks}`}</p>
      </a>
    </li>
  );
}

RepoCard.propTypes = {
  name: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired,
  htmlUrl: PropTypes.string.isRequired,
  stargazersCount: PropTypes.number.isRequired,
  forks: PropTypes.number.isRequired,
};
