import PropTypes from 'prop-types';

export default function InputText({ handleChange, inputSearch }) {
  return (
    <input
      type="text"
      name="inputSearch"
      value={ inputSearch }
      onChange={ handleChange }
      placeholder="Busque seu usuário github"
    />
  );
}

InputText.propTypes = {
  handleChange: PropTypes.func.isRequired,
  inputSearch: PropTypes.string.isRequired,
};
