import { combineReducers, legacy_createStore as createStore } from "redux";
import { reducer } from "./reducer";

const rootReducer = combineReducers({
  app: reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
