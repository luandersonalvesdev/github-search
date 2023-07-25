import PropTypes from 'prop-types';
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
        p-3
        rounded
        min-w-full
        border-2
        disabled:bg-gray-100
        disabled:border-gray-200
        disabled:opacity-30
        bg-green-100
        border-green-200
        duration-300"
    >
      Buscar
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
