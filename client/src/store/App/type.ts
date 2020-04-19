export interface AppState {
  expanded: string;
}

export const EXPANDED = "EXPANDED";

interface expanded {
  type: typeof EXPANDED;
  payload: string;
}

export type AppActionType = expanded;
