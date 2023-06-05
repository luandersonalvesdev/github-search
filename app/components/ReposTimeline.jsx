'use client';

import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchRepo } from '../service/customFetch';
import RepoCard from './RepoCard';

const MAX_REPO_SHOWN = 12;
const TEEN = 10;

export default function ReposTimeline({ profiles }) {
  const [maxRepoShown, setMaxRepoShown] = useState(MAX_REPO_SHOWN);
  const [allRepos, setAllRepos] = useState([]);

  useEffect(() => {
    profiles.forEach(async (fav) => {
      const data = await fetchRepo(fav);
      setAllRepos((prevState) => [...prevState, ...data]);
    });
  }, [profiles]);

  const handleLoadMore = () => { setMaxRepoShown((prev) => prev + MAX_REPO_SHOWN); };

  const convertToDate = (string) => {
    const convert = new Date(string.substring(0, TEEN));
    return convert;
  };

  const sortByDate = ({ props: { createdAt } }, { props: { createdAt: createdAt2 } }) => {
    const convertCreated1 = convertToDate(createdAt);
    const convertCreated2 = convertToDate(createdAt2);
    return convertCreated2 - convertCreated1;
  };

  return (
    <>
      <ul>
        {
          !allRepos.length
            ? (
              <span>
                Sua linha do tempo está vazia, favorite algum usuário para preenche-la
              </span>
            )
            : allRepos
              .map((repo) => {
                return (
                  <RepoCard
                    key={ repo.id }
                    name={ repo.name }
                    login={ repo.owner.login }
                    avatarUrl={ repo.owner.avatar_url }
                    forks={ repo.forks }
                    stargazersCount={ repo.stargazers_count }
                    createdAt={ repo.created_at }
                    updatedAt={ repo.updated_at }
                    htmlUrl={ repo.html_url }
                  />
                );
              })
              .sort(sortByDate)
              .filter((repo, ind) => ind < maxRepoShown)
        }
      </ul>
      <button
        disabled={ maxRepoShown >= allRepos.length }
        onClick={ handleLoadMore }
      >
        Ver mais

      </button>
    </>
  );
}

ReposTimeline.propTypes = {
  profiles: PropTypes.arrayOf(PropTypes.string).isRequired,
};
