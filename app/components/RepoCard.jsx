'use client';

import PropTypes from 'prop-types';
import ForkSvg from '../assets/svg/forkSvg';
import ArrowUpRightSvg from '../assets/svg/arrowUpRightSvg';
import CreateRepoSvg from '../assets/svg/createRepoSvg';
import StarSvg from '../assets/svg/starSvg';
import UpdateRepoSvg from '../assets/svg/updateRepoSvg';

const TEEN = 10;

export default function RepoCard({
  name, login, avatarUrl, forks, stargazersCount, createdAt, updatedAt, htmlUrl,
}) {
  const convertDate = (oldDate) => {
    return oldDate.substring(0, TEEN).split('-').reverse().join('/');
  };

  return (
    <li className="inline-block" id="li-repo">
      <a
        href={ htmlUrl }
        target="_blank"
        rel="noreferrer"
        className="
        border
        inline-block
        px-4
        py-3
        rounded-md
        hover:shadow-lg
        duration-200
        ml-5
        relative
        "
      >
        <ArrowUpRightSvg />
        <img src={ avatarUrl } alt="" className="w-10 rounded-md inline" />
        <p className="inline ml-3 font-light font-AdventPro">
          {`${login} / `}
          <strong className="font-semibold">{name}</strong>
        </p>
        <br />
        <CreateRepoSvg />
        <p className="inline">
          {convertDate(createdAt)}
        </p>
        <br />
        <UpdateRepoSvg />
        <p className="inline ml-1">
          {convertDate(updatedAt)}
        </p>
        <StarSvg />
        <p className="inline ml-1 mt-1">{stargazersCount}</p>
        <ForkSvg />
        <p className="inline">{forks}</p>
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
