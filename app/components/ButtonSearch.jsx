import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { fetchUser } from '../service/customFetch';

import { initialCurrSearchState } from '../context/CurrentSearchContext';

export default function ButtonSearch({
  handleSet, inputSearch, setIsSearching, setItFound, setSought,
}) {
  const notFoundProfile = () => {
    handleSet(initialCurrSearchState);
    setItFound(false);
  };

  const foundProfile = (data) => {
    const { avatar_url: avatarUrl, name, login } = data;
    handleSet({ avatarUrl, name, login });
    setItFound(true);
  };

  const handleSearch = async () => {
    setSought(false);
    setIsSearching(true);
    const data = await fetchUser(inputSearch);
    if (data.notFound) { notFoundProfile(); } else { foundProfile(data); }
    setSought(true);
    setIsSearching(false);
  };

  return (
    <button
      onClick={ handleSearch }
      disabled={ !inputSearch.length }
      className="
        p-2
        font-light
        rounded-md
        border
        duration-300
        disabled:opacity-30
        disabled:bg-gray-100
        disabled:border-gray-200
        bg-emerald-100
        border-emerald-200
        hover:bg-emerald-200
        hover:border-emerald-300
        "
    >
      <FontAwesomeIcon className="w-8" icon={ faMagnifyingGlass } />
    </button>
  );
}

ButtonSearch.propTypes = {
  handleSet: PropTypes.func.isRequired,
  inputSearch: PropTypes.string.isRequired,
  setIsSearching: PropTypes.func.isRequired,
  setItFound: PropTypes.func.isRequired,
  setSought: PropTypes.func.isRequired,
};
