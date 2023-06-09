'use client';

import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import ProfileCardFav from './ProfileCardFav';
import { fetchUser } from '../service/customFetch';

export default function ListOfFavorites({ favorites }) {
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    favorites.forEach(async (fav) => {
      const dataFav = await fetchUser(fav);
      setFavs((prev) => ([...prev, dataFav]));
    });
  }, []);

  return (
    <ul>
      {
        favs.map((fav) => (
          <li key={ fav.id }>
            <ProfileCardFav profile={ fav } />
          </li>
        ))
      }
    </ul>
  );
}

ListOfFavorites.propTypes = {
  favorites: PropTypes.arrayOf(PropTypes.string).isRequired,
};
