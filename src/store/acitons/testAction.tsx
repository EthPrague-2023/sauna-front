import * as actionTypes from "./actionTypes";

export function addSmth(data: ITest) {
  const action: TestAction = {
    type: actionTypes.TEST_ACTION,
    data,
  }

  return simulateHttpRequest(action)
}

export function removeSmth(data: ITest) {
  const action: TestAction = {
    type: actionTypes.TEST_ACTION,
    data,
  }
  return simulateHttpRequest(action)
}

export function simulateHttpRequest(action: TestAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action)
    }, 500)
  }
}