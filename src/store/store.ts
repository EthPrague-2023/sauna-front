import { createStore, applyMiddleware, Store } from "redux"
import thunk from "redux-thunk"

import reducer from "./reducers/reducers";

const store: Store<TestState, TestAction> & {
    dispatch: DispatchType
  } = createStore(reducer, applyMiddleware(thunk));

  export default store;
