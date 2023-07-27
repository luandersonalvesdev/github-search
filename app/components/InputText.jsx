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
          ? 'Seu usuário github'
          : 'Busque um usuário github'
      }
      className="
        p-2
        font-light
        text-center
        rounded-md
        w-full
        border-2
        bg-gray-100
        border-gray-100
        focus:outline-none
        focus:border-gray-200
        h-full
        "
    />
  );
}

InputText.propTypes = {
  handleChange: PropTypes.func.isRequired,
  inputSearch: PropTypes.string.isRequired,
  goal: PropTypes.string.isRequired,
};
