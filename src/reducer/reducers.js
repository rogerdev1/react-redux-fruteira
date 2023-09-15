import { combineReducers } from "redux";
import { frutaReducers } from "./fruta.reducer";

const allReducers = combineReducers( {frutaReducers,} )


export { allReducers }
