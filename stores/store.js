import { useReducer, useContext, createContext } from "react";

const StoreContext = createContext();
const DispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ZONE":
      return {
        ...state,
        zone: action.zone
      };
    case "DECREASE":
      return state - 1;
    case "INCREASE_BY":
      return state + action.payload;
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {});
  return (
    <DispatchContext.Provider value={dispatch}>
      <StoreContext.Provider value={state}>{children}</StoreContext.Provider>
    </DispatchContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
export const useDispatch = () => useContext(DispatchContext);
