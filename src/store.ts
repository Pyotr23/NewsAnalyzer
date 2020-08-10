import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import { save } from "redux-localstorage-simple";

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
/* eslint-enable no-underscore-dangle */

const configureStore = (preloadedState: any) => (
  createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(
      applyMiddleware(save())
    ),
  )
)

const store = configureStore({});

export default store;
