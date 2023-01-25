import React, { useState } from "react";
import { useDispatch } from "react-redux";
import airlineApi from "../service/api/airlineApi";
import { createAsyncAirlines } from "./airlineReducer";

const AddAirLine = () => {
  const initialState = {
    id : null,
    name: "",
    country: "",
    logo: "",
    slogan: "",
    head_quaters: "",
    website: "",
    established: ""
  };
  const [airLine, setAirLine] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const dispatch = useDispatch();

  const handleInputChange = event => {
    const { name, value } = event.target;
    setAirLine({ ...airLine, [name]: value });
  };

  const saveAirLine = () => {
      dispatch(createAsyncAirlines({airLine}))
        .unwrap()
        .then(data => {
            console.log(data);
            setAirLine({
                id : airLine.id,
                name: airLine.name,
                country: airlineApi.country,
                logo: airLine.logo,
                slogan: airLine.slogan,
                head_quaters: airLine.head_quaters,
                website: airlineApi.website,
                established: airLine.established
            });
            setSubmitted(true);
        })
        .catch(e => {
            console.log(e);
        });
  };

  const newAirLine = () => {
    setAirLine(initialState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newAirLine}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="title">ID</label>
            <input
              type="text"
              className="form-control"
              id="id"
              required
              value={airLine.id|| ''}
              onChange={handleInputChange}
              name="id"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              value={airLine.name || ''}
              onChange={handleInputChange}
              name="name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="country"
              required
              value={airLine.country || ''}
              onChange={handleInputChange}
              name="country"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="logo"
              required
              value={airLine.logo || ''}
              onChange={handleInputChange}
              name="logo"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="slogan"
              required
              value={airLine.slogan || ''}
              onChange={handleInputChange}
              name="slogan"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="head_quaters"
              required
              value={airLine.head_quaters|| ''}
              onChange={handleInputChange}
              name="head_quaters"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="website"
              required
              value={airLine.website || ''}
              onChange={handleInputChange}
              name="website"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="established"
              required
              value={airLine.established|| ''}
              onChange={handleInputChange}
              name="established"
            />
          </div>

          <button onClick={saveAirLine} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddAirLine;