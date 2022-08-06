import axios from "axios"
import { Dispatch } from "react"
import { Actions , ActionType } from "./types"

const api = 'http://localhost:3001/api'

export const AddSneaker = (data:any)=>{
  return(dispatch: Dispatch<Actions>)=>{
    axios.post(`${api}/sneaker/`,data)
    .then(response => 
      dispatch({
        type: ActionType.ADD_SNEAKER,
        payload: response.data,
      })
    );
  }
}
export const GetSneakers = ()=>{
  return(dispatch: Dispatch<Actions>)=>{
    axios.get(`${api}/sneaker/`)
    .then(response => 
      dispatch({
        type: ActionType.GET_SNEAKERS,
        payload: response.data,
      })
    );
  }
}
export const GetSneakerDetail = (id:any)=>{
  return(dispatch: Dispatch<Actions>)=>{
    axios.get(`${api}/sneaker/${id}`)
    .then(response => 
      dispatch({
        type: ActionType.GET_SNEAKER_DETAIL,
        payload: response.data,
      })
    );
  }
}