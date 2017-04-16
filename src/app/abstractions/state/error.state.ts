export interface ErrorState {
  currentError: ErrorStateItem;
  errors: ErrorStateItem[];
}

export interface ErrorStateItem {
  id: number;
  error: any;
}

export const DEFAULT_ERROR_STATE: ErrorState = {
  currentError: null,
  errors: []
}