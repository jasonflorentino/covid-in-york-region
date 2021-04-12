import './Error.scss';

const Error = () => {
  return (
    <div className="Error">
      <div className="Error__container">
        <h3 className="Error__heading">We're Sorry...</h3>
        <p className="Error__text">There was an error fetching the data. Please try again later.</p>
      </div>
    </div>
  )
}

export default Error;