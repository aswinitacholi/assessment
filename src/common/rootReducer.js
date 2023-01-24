import airlineReducer from "../airline/airlineReducer";
import passengerReducer from "../passenger/passengerReducer";
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    airline: airlineReducer,
    passenger: passengerReducer
})

export default rootReducer;