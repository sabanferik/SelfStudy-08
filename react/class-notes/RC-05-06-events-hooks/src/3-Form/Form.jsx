import React from "react";

const Form = () => {
  return (
    <div className="container text-center mt-4">
      <h1>*********************************************</h1>

      <h1>FORM(EVENTS)</h1>

      <form>
        <div className="mb-3">
          <label className="form-label" htmlFor="isim">
        NAME: <span></span>
          </label>
          <input className="form-control" id="isim" type="text" />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="password">PASSWORD</label>
          <input className="form-control" id="password" type="password" />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="country">
         COUNTRY: <span></span>
          </label>
         <select  className="form-select">
            <option selected>COUNTRIES</option>
            <option >TURKEY</option>
            <option >GERMANY</option>
            <option >USA</option>
         </select>

        </div>
<button type="submit" className="btn btn-primary">GÖNDER (submit)</button>

      </form>
    </div>
  );
};

export default Form;
