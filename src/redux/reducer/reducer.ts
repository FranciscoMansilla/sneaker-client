import { ActionType } from "../actions/types"

interface State{
  response_AddSneaker:object,
  allSneakers: [],
  sneakerDetail: object
}

const initialState : State = {
  response_AddSneaker:{},
  allSneakers:[],
  sneakerDetail: {}
}

const reducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case ActionType.ADD_SNEAKER:
      return{
        ...state,
        response_AddSneaker:action.payload
      }
    case ActionType.GET_SNEAKERS:
      return{
        ...state,
        allSneakers:action.payload.sneakers
      }
    case ActionType.GET_SNEAKER_DETAIL:
      return{
        ...state,
        sneakerDetail:action.payload.sneaker
      }
    default:
      return state
  }
}
export default reducer