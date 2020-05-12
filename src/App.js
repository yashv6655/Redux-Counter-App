import React from "react";
import Counter from "./Counter";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import countReducer from "./countReducers";
import productReducer from "./productReducer";
import modalReducer from "./modalReducer";

import Modal from "./Modal";
import Products from "./Products";

import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunk];

const store = createStore(
  combineReducers({
    countState: countReducer,
    modalState: modalReducer,
    productState: productReducer,
  }),
  composeWithDevTools(applyMiddleware(...middleware))
);

const App = () => {
  return (
    <Provider store={store}>
      <Counter random="random" />
      <Modal />
      <Products />
    </Provider>
  );
};

export default App;
