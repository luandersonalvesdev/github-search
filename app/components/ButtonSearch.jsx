import PropTypes from 'prop-types';
import { fetchUser } from '../service/customFetch';

export default function ButtonSearch({
  handleSet, inputSearch, setIsSearching, setItFound, setSought,
}) {
  const notFoundProfile = () => {
    handleSet({ avatarUrl: '', login: '' });
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
    // eslint-disable-next-line no-unused-expressions
    data.notFound ? notFoundProfile() : foundProfile(data);
    setSought(true);
    setIsSearching(false);
  };

  return (
    <button
      onClick={ handleSearch }
      disabled={ !inputSearch.length }
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
