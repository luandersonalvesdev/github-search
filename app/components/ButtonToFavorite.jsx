'use client';

import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export default function ButtonToFavorite({ login }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = () => {
    const getFavorites = JSON.parse(localStorage.getItem('githubSearchFavs'));
    localStorage.setItem('githubSearchFavs', JSON.stringify([...getFavorites, login]));
    setIsFavorite(true);
  };

  const handleDisfavor = () => {
    const getFavorites = JSON.parse(localStorage.getItem('githubSearchFavs'));
    const indexFav = getFavorites.indexOf(login);
    getFavorites.splice(indexFav, 1);
    localStorage.setItem('githubSearchFavs', JSON.stringify(getFavorites));
    setIsFavorite(false);
  };

  useEffect(() => {
    const getFavorites = JSON.parse(localStorage.getItem('githubSearchFavs'));
    const checkFavorite = getFavorites.some((fav) => fav === login);
    setIsFavorite(checkFavorite);
  }, []);

  return (
    <button
      onClick={ isFavorite ? handleDisfavor : handleFavorite }
    >
      {isFavorite ? 'desfavoritar' : 'favoritar'}
    </button>
  );
}

ButtonToFavorite.propTypes = {
  login: PropTypes.string.isRequired,
};
