import PropTypes from 'prop-types';
import { fetchUser } from '../service/customFetch';

export default function ButtonSearch({ handleSet, inputSearch }) {
  const handleSearch = async () => {
    const data = await fetchUser(inputSearch);
    if (data.notFound) {
      handleSet({ avatarUrl: '', name: '' });
      return;
    }
    const { avatar_url: avatarUrl, name } = data;
    handleSet({ avatarUrl, name });
  };
  return (
    <button onClick={ handleSearch }>
      Buscar
    </button>
  );
}

ButtonSearch.propTypes = {
  handleSet: PropTypes.func.isRequired,
  inputSearch: PropTypes.string.isRequired,
};
