

const Form = () => {
  return (
    <>
      <div className="container">
        <div className="row g-3  my-3">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              aria-label="First name"
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              aria-label="Last name"
            />
          </div>
        </div>
        <button type="button" className="btn btn-primary my-2">
          Primary
        </button>

        <div className="show-content">
          <h1>Rohit</h1>
          <h2>Bagadi</h2>
        </div>
      </div>
    </>
  );
};

export default Form;
