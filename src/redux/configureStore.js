import { createStore, applyMiddleware } from "redux";
// redux + thunk
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import rootReducer from "./reducers/index";

const persistConfig = {
  key: "akkadate",
  storage,
  whitelist: ["cartReducer"], // ให้ local storage เก็บแต่ cartReducer
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = () => {
  let store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );
  let persistor = persistStore(store);
  return { store, persistor };
};

export default configureStore;
