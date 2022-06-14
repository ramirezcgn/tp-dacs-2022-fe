export const createReducer = (initialState: any, handlers: any) => {
  return (state: any = initialState, action: any = undefined) => {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    }
    return state;
  };
};
