import { Dispatch } from "react"
import { Actions , ActionType } from "./types"


export const changeColorPrimary = (color:string)=>{
  return(dispatch: Dispatch<Actions>)=>{
    dispatch({
      type: ActionType.CHANGE_COLOR_PRIMARY,
      payload: color
    })
  }
}
export const changeColorSecondary = (color:string)=>{
  return(dispatch: Dispatch<Actions>)=>{
    dispatch({
      type: ActionType.CHANGE_COLOR_SECONDARY,
      payload: color
    })
  }
}
export const changeColorTertiary = (color:string)=>{
  return(dispatch: Dispatch<Actions>)=>{
    dispatch({
      type: ActionType.CHANGE_COLOR_TERTIARY,
      payload: color
    })
  }
}