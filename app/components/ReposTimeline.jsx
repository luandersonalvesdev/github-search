'use client';

import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchRepo } from '../service/customFetch';
import RepoCard from './RepoCard';
import FilterRepoByName from './FilterRepoByName';

const MAX_REPO_SHOWN = 15;
const TEEN = 10;

export default function ReposTimeline({ profiles }) {
  const [maxRepoShown, setMaxRepoShown] = useState(MAX_REPO_SHOWN);
  const [allRepos, setAllRepos] = useState([]);
  const [nameFilter, setNameFilter] = useState('');

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

  const orderByDate = (
    { props: { updatedAt } },
    { props: { updatedAt: updatedAt2 } },
  ) => {
    const convertCreated1 = convertToDate(updatedAt);
    const convertCreated2 = convertToDate(updatedAt2);
    return convertCreated2 - convertCreated1;
  };

  const filterByName = ({ props: { name } }) => {
    return name.toLowerCase().includes(nameFilter.toLowerCase());
  };

  return (
    <>
      <div>
        <FilterRepoByName
          nameFilter={ nameFilter }
          setNameFilter={ setNameFilter }
        />
      </div>
      <ul>
        {
          !allRepos.length
            ? (
              <span>
                Sua linha do tempo está vazia, favorite algum usuário
                e recarregue a página para preenche-la
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
              .sort(orderByDate)
              .filter(filterByName)
              .filter((_, ind) => ind < maxRepoShown)
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
