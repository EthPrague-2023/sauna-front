import * as actionTypes from "../acitons/actionTypes";

const initialState: TestState = {
  dataArr: [
    {
      id: 1,
      title: "data 1",
      body:
        "Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi",
    },
    {
      id: 2,
      title: "data 2",
      body:
        "Harum quidem rerum facilis est et expedita distinctio quas molestias excepturi sint",
    },
  ],
}

const reducer = (
    state: TestState = initialState,
    action: TestAction): TestState => {
    switch (action.type) {
      case actionTypes.TEST_ACTION:
        const newData: ITest = {
          id: Math.random(), // not really unique
          title: action.data.title,
          body: action.data.body,
        }
        return {
          ...state,
          dataArr: state.dataArr.concat(newData),
        }
      case actionTypes.TEST_ACTION:
        const updatedDataArr: ITest[] = state.dataArr.filter(
          data => data.id !== action.data.id
        )
        return {
          ...state,
          dataArr: updatedDataArr,
        }
    }
    return state
  }
  
  export default reducer