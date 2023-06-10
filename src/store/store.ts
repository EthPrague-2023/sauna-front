import { createStore, applyMiddleware, Store } from "redux"
import thunk from "redux-thunk"

import reducer from "./reducers/reducers";
import { TestState, TestAction, DispatchType } from "../types.d";

const store: Store<TestState, TestAction> & {
    dispatch: DispatchType
  } = createStore(reducer, applyMiddleware(thunk));

  export default store;
