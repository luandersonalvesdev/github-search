'use client';

import PropTypes from 'prop-types';
import ProfileCard from './ProfileCard';

export default function ListOfFavorites({ favorites }) {
  return (
    <ul>
      {
        favorites.map((fav) => (
          <li key={ fav }>
            <ProfileCard profile={ fav } />
          </li>
        ))
      }
    </ul>
  );
}

ListOfFavorites.propTypes = {
  favorites: PropTypes.arrayOf(PropTypes.string).isRequired,
};
