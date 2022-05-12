import { useState } from "react";
import "../App.css";

const Form = () => {
  const [fName, setfName] = useState("Rohit");

  function changeHandler(e) {
    console.log(e.target.value);
  }

  return (
    <>
      <form>
        <div className="container">
          <div className="row g-3  my-3">
            <div className="col-3">
              <input
                onChange={changeHandler}
                type="text"
                className="form-control"
                placeholder="First name"
                aria-label="First name"
              />
            </div>
            <div className="col-3">
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
            <h1>Your First name is: {fName}</h1>
            <h1>Your Last name is: Bagadi</h1>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
