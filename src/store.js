import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { productReducer } from "./redux/reducers/productReducer";

const reducer = combineReducers({
	productReducer,
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;