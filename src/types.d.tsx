interface ITest {
    id: number
    title: string
    body: string
  }
  
  type TestState = {
    dataArr: ITest[]
  }
  
  type TestAction = {
    type: string
    data: ITest
  }
  
  type DispatchType = (args: TestAction) => TestAction

  export type { ITest, TestState, TestAction, DispatchType }