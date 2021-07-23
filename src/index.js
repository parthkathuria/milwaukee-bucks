import "bootstrap/dist/css/bootstrap.min.css";
import { ConnectedRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import App from "./App";
import "./index.css";
import createRootReducer from "./reducers";
import reportWebVitals from "./reportWebVitals";

export const history = createBrowserHistory();

const middleware = [routerMiddleware(history), thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger());
}
const enhancer = composeEnhancers(applyMiddleware(...middleware));
export const store = createStore(createRootReducer(history), enhancer);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
