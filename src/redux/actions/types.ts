export type Actions =
  | ChangeColorPrimary
  | ChangeColorSecondary
  | ChangeColorTertiary

export enum ActionType {
  CHANGE_COLOR_PRIMARY = "CHANGE_COLOR_PRIMARY",
  CHANGE_COLOR_SECONDARY = "CHANGE_COLOR_SECONDARY",
  CHANGE_COLOR_TERTIARY = "CHANGE_COLOR_TERTIARY"
}

export interface ChangeColorPrimary{
  type: ActionType.CHANGE_COLOR_PRIMARY
  payload?: string 
}
export interface ChangeColorSecondary{
  type: ActionType.CHANGE_COLOR_SECONDARY
  payload?: string 
}
export interface ChangeColorTertiary{
  type: ActionType.CHANGE_COLOR_TERTIARY
  payload?: string 
}
