import PropTypes from 'prop-types';

export default function InputText({ handleChange, inputSearch, goal }) {
  return (
    <input
      type="text"
      name="inputSearch"
      value={ inputSearch }
      onChange={ handleChange }
      placeholder={
        goal === 'user'
          ? 'Busque seu usuário github'
          : 'Busque um usuário github'
      }
      className="
        p-3
        rounded
        min-w-full
        border-2
        border-gray-100
        focus:outline-none
        focus:border-gray-200"
    />
  );
}

InputText.propTypes = {
  handleChange: PropTypes.func.isRequired,
  inputSearch: PropTypes.string.isRequired,
  goal: PropTypes.string.isRequired,
};
