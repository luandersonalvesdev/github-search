'use client';

import PropTypes from 'prop-types';
import { useState } from 'react';
import { useCurrentSearch } from '../context/CurrentSearchContext';
import ButtonSearch from './ButtonSearch';
import ButtonToLogin from './ButtonToLogin';
import InputText from './InputText';
import ProfileCard from './ProfileCard';

export default function UserFinder({ goal }) {
  const [inputSearch, setInputSearch] = useState('');
  const { setCurrSearch } = useCurrentSearch();
  const [itFound, setItFound] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [sought, setSought] = useState(false);

  const handleChange = ({ target }) => {
    setInputSearch(target.value);
  };

  const renderByGoal = () => {
    const desision = goal === 'user'
      ? <ButtonToLogin />
      : <ProfileCard />;
    return desision;
  };

  return (
    <div>
      <div>
        { isSearching && <p>Buscando...</p> }
        {
          sought
            && (itFound
              ? renderByGoal()
              : <p>Usuário não encontrado.</p>)
        }
      </div>
      <form onSubmit={ (e) => e.preventDefault() }>
        <InputText
          handleChange={ handleChange }
          inputSearch={ inputSearch }
          goal={ goal }
        />
        <ButtonSearch
          handleSet={ setCurrSearch }
          inputSearch={ inputSearch }
          setIsSearching={ setIsSearching }
          setItFound={ setItFound }
          setSought={ setSought }
        />
      </form>
    </div>
  );
}

UserFinder.propTypes = {
  goal: PropTypes.string.isRequired,
};
