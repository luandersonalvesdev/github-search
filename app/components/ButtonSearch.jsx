import PropTypes from 'prop-types';
import { fetchUser } from '../service/customFetch';

export default function ButtonSearch({ handleSet, inputSearch }) {
  const handleSearch = async () => {
    const data = await fetchUser(inputSearch);
    if (data.notFound) {
      handleSet({ avatarUrl: '', login: '' });
      return;
    }
    const {
      login, avatar_url: avatarUrl, name, location, bio,
      public_repos: publicRepos, followers, following, created_at: createdAt,
    } = data;
    const searchResult = {
      login,
      avatarUrl,
      name,
      location,
      bio,
      publicRepos,
      followers,
      following,
      createdAt };
    handleSet(searchResult);
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
