import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "../reducers";
import { logger } from "redux-logger";
import { persistStore, autoRehydrate } from "redux-persist";


export default function configureStore() {
  
  const store = createStore(
    reducer,
    applyMiddleware(thunk, logger),
  );

  // const config = {
  //   storage: localStorage,
  //   // balcklist: ["error"]
  // };

  // persistStore(store, config, () => {
  //   console.log("restored reducers")
  // });
  
  return store;
}
