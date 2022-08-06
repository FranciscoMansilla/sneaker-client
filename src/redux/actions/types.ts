

export type Actions =
  | AddSneaker
  | GetSneakers
  | GetSneakerDetail

export enum ActionType {
  ADD_SNEAKER = 'ADD_SNEAKER',
  GET_SNEAKERS = 'GET_SNEAKERS',
  GET_SNEAKER_DETAIL = 'GET_SNEAKER_DETAIL',
}


export interface AddSneaker{
  type: ActionType.ADD_SNEAKER
  payload?: any 
}
export interface GetSneakers{
  type: ActionType.GET_SNEAKERS
  payload?: any 
}
export interface GetSneakerDetail{
  type: ActionType.GET_SNEAKER_DETAIL
  payload?: any 
}