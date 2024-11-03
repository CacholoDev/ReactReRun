import PropTypes from 'prop-types';

const Campo = ({ id, children, invalido = false, error = "", onValueChange = () => {}, ...props }) => {
  return (
    <div className="campo">
      <label htmlFor={id}>{ children }</label>
      <input {...props} name={id} id={id} onChange={e => onValueChange(e.target.value)} />
      {invalido && <p className='error'>{error}</p>}
    </div>
  )
}

Campo.propTypes = {
  id: PropTypes.string.isRequired,
  invalido: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  onValueChange: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export { Campo };