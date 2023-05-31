'use client';

import PropTypes from 'prop-types';
import { useState } from 'react';
import { useGithubUserContext } from '../context/GithubUserContext';
import { useCurrentSearch } from '../context/CurrentSearchContext';
import ButtonSearch from './ButtonSearch';
import InputText from './InputText';

export default function UserFinder({ goal }) {
  const [inputSearch, setInputSearch] = useState('');
  const { setProfile } = useGithubUserContext();
  const { setCurrSearch } = useCurrentSearch();

  const handleChange = ({ target }) => {
    setInputSearch(target.value);
  };

  return (
    <div>
      <form onSubmit={ (e) => e.preventDefault() }>
        <InputText
          handleChange={ handleChange }
          inputSearch={ inputSearch }
        />
        <ButtonSearch
          handleSet={ goal === 'user' ? setProfile : setCurrSearch }
          inputSearch={ inputSearch }
        />
      </form>
    </div>
  );
}

UserFinder.propTypes = {
  goal: PropTypes.string.isRequired,
};
