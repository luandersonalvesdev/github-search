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
    />
  );
}

InputText.propTypes = {
  handleChange: PropTypes.func.isRequired,
  inputSearch: PropTypes.string.isRequired,
  goal: PropTypes.string.isRequired,
};
