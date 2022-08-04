import { ActionType } from "../actions/types"

interface State{
  colorPrimary:string,
  colorSecondary:string,
  colorTertiary:string,
}

const initialState : State = {
  colorPrimary: '#dbe4ff',
  colorSecondary:'#4a88d9',
  colorTertiary: '#ffffff',
}

const reducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case ActionType.CHANGE_COLOR_PRIMARY:
      return{
        ...state,
        colorPrimary: action.payload
      }
    case ActionType.CHANGE_COLOR_SECONDARY:
      return{
        ...state,
        colorSecondary: action.payload
      }
    case ActionType.CHANGE_COLOR_TERTIARY:
      return{
        ...state,
        colorTertiary: action.payload
      }    
    default:
      return state
  }
}
export default reducer