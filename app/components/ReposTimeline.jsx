'use client';

import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchRepo } from '../service/customFetch';
import RepoCard from './RepoCard';
import FilterRepoByName from './FilterRepoByName';

const MAX_REPO_SHOWN = 25;
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
    <div
      className="flex flex-col text-left justify-center"
    >
      {
        !allRepos.length
          ? (
            <span className="text-5xl opacity-25">
              <em>
                Sua linha do tempo está vazia, favorite algum usuário
                e recarregue a página para preenchê-la
              </em>
            </span>
          )
          : (
            <div className="flex flex-col">
              <div>
                <FilterRepoByName
                  nameFilter={ nameFilter }
                  setNameFilter={ setNameFilter }
                />
              </div>
              <ul className="flex flex-wrap items-center">
                {
                  allRepos
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
                className="
                  rounded-md
                  w-24
                  p-3
                  border
                  bg-amber-100
                  border-amber-300
                  hover:bg-amber-200
                  hover:border-amber-300
                  duration-200
                  self-center
                "
                disabled={ maxRepoShown >= allRepos.length }
                onClick={ handleLoadMore }
              >
                Ver mais

              </button>
            </div>
          )
      }
    </div>
  );
}

ReposTimeline.propTypes = {
  profiles: PropTypes.arrayOf(PropTypes.string).isRequired,
};
