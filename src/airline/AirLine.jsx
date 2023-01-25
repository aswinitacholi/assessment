import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncAirlines, fetchAsyncAirlinesByID } from "./airlineReducer";

export default function AirLine() {
  const [currentAirLine, setCurrentAirLine] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const dispatch = useDispatch();
  const [searchAirLine, setSearchAirLine] = useState("");
  const airLines = useSelector((state) => state.airLines);

  const onChangeSearchAirLine = (e) => {
    const searchAirLine = e.target.value;
    setSearchAirLine(searchAirLine);
  };

  const initFetch = useCallback(() => {
    dispatch(fetchAsyncAirlines());
  }, [dispatch]);

  useEffect(() => {
    initFetch();
  }, [initFetch]);

  const refreshData = () => {
    setCurrentAirLine(null);
    setCurrentIndex(-1);
  };

  const setActiveAirLine = (airLine, index) => {
    setCurrentAirLine(airLine);
    setCurrentIndex(index);
  };

  const findByAirLineID = () => {
    refreshData();
    dispatch(fetchAsyncAirlinesByID({ id: searchAirLine }));
  };

  return (
    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by airLineID"
            value={searchAirLine}
            onChange={onChangeSearchAirLine}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByAirLineID}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <h4>AirLines List</h4>

        <ul className="list-group">
          {airLines &&
            airLines.map((airLine, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveAirLine(airLine, index)}
                key={index}
              >
                {airLine.name}
              </li>
            ))}
        </ul>
        <div className="col-md-6">
        {currentAirLine ? (
          <div>
            <h4>AirLine</h4>
            <div>
              <label>
                <strong>Name:</strong>
              </label>{" "}
              {currentAirLine.name}
            </div>
            <div>
              <label>
                <strong>Country:</strong>
              </label>{" "}
              {currentAirLine.country}
            </div>
            <div>
              <label>
                <strong>HeadQuaters:</strong>
              </label>{" "}
              {currentAirLine.head_quaters}
            </div>
            <div>
              <label>
                <strong>Established:</strong>
              </label>{" "}
              {currentAirLine.established}
            </div>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a AirLines...</p>
          </div>
        )}
      </div>
      </div>
    </div>
  );
}
