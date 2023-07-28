import PropTypes from 'prop-types';

export default function FilterRepoByName({ nameFilter, setNameFilter }) {
  const handleChange = ({ target }) => {
    setNameFilter(target.value);
  };

  return (
    <input
      type="text"
      placeholder="Filtre pelo nome do repositório"
      value={ nameFilter }
      onChange={ handleChange }
      className="
      p-3
      mb-4
      font-light
      text-center
      rounded-md
      border-2
      bg-gray-100
      border-gray-100
      focus:outline-none
      focus:border-gray-200
      "
    />
  );
}

FilterRepoByName.propTypes = {
  nameFilter: PropTypes.string.isRequired,
  setNameFilter: PropTypes.func.isRequired,
};
