import PropTypes from 'prop-types';

export default function FilterRepoByName({ nameFilter, setNameFilter }) {
  const handleChange = ({ target }) => {
    setNameFilter(target.value);
  };

  return (
    <input
      type="text"
      placeholder="Filtre pelo nome"
      value={ nameFilter }
      onChange={ handleChange }
    />
  );
}

FilterRepoByName.propTypes = {
  nameFilter: PropTypes.string.isRequired,
  setNameFilter: PropTypes.func.isRequired,
};
