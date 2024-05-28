import { createContext, useReducer } from 'react';

// Action Types
const AUTHENTICATED = 'IS_AUTHENTICATED';

const initialState = {
  isAuthenticated: null,
};

const reducer = (state, action) => {
  const newState = { ...state };

  switch (action.type) {
    case AUTHENTICATED:
      newState.isAuthenticated = action.payload;
      break;
    default:
  }

  return newState;
};

export const UserContext = createContext({
  ...initialState,
  setIsAuthenticated: () => {},
});

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setIsAuthenticated = (payload) => {
    dispatch({
      type: AUTHENTICATED,
      payload,
    });
  };

  const context = {
    ...state,
    setIsAuthenticated: setIsAuthenticated,
  };

  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
