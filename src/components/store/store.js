import { legacy_createStore as createStore } from "redux";
import { allReducers } from "../../reducer/reducers";

const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export { store }
