'use client';

import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';

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
  }, [login]);

  return (
    <button
      onClick={ isFavorite ? handleDisfavor : handleFavorite }
      className="absolute top-6 right-1"
    >
      <FontAwesomeIcon
        icon={
          isFavorite
            ? faHeartSolid
            : faHeart
        }
        className="w-5 h-5 text-red-400 duration-200 hover:scale-110"
      />
    </button>
  );
}

ButtonToFavorite.propTypes = {
  login: PropTypes.string.isRequired,
};
