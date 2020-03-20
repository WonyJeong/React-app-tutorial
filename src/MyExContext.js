import React, { createContext, useReducer, useContext, useRef } from "react";

const initialState = [
  {
    id: 1,
    num: "1031",
    rank: "Gold",
    level: "3",
    exname: "벽돌부수기",
    category: "Sort",
    done: false
  },
  {
    id: 2,
    num: "1512",
    rank: "Silver",
    level: "1",
    exname: "History",
    category: "Sort",
    done: false
  },
  {
    id: 3,
    num: "1131",
    rank: "Ruby",
    level: "4",
    exname: "분할정렬",
    category: "Tree",
    done: false
  },
  {
    id: 4,
    num: "2131",
    rank: "Diamond",
    level: "2",
    exname: "스택",
    category: "Sort",
    done: false
  }
];

function exReducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return state.concat(action.example);
    case "TOGGLE":
      return state.map(example =>
        example.id === action.id ? { ...example, done: !example.done } : example
      );
    case "REMOVE":
      return state.filter(example => example.id !== action.id);
    case "MODIFY":
      return state.map((example, before, after) =>
        example.id === action.id ? { ...example, [before]: after } : example
      );
    default:
      return state;
  }
}

//create cotext
const ExStateContext = createContext();
const ExDispatchContext = createContext();
const ExNextIdContext = createContext();

export function ExProvider({ children }) {
  const [state, dispatch] = useReducer(exReducer, initialState);
  const nextId = useRef(5);

  return (
    <ExStateContext.Provider value={state}>
      <ExDispatchContext.Provider value={dispatch}>
        <ExNextIdContext.Provider value={nextId}>
          {children}
        </ExNextIdContext.Provider>
      </ExDispatchContext.Provider>
    </ExStateContext.Provider>
  );
}

export function useExState() {
  const context = useContext(ExStateContext);
  if (!context) {
    throw new Error("Can not find Ex Provider");
  }
  return context;
}

export function useExDispatch() {
  const context = useContext(ExDispatchContext);
  if (!context) {
    throw new Error("Can not find Ex Provider");
  }
  return context;
}

export function useExNextId() {
  const context = useContext(ExNextIdContext);
  if (!context) {
    throw new Error("Can not find Ex Provider");
  }
  return context;
}
