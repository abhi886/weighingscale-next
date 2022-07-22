import React, {
  createContext,
  useContext,
  useReducer,
  FC,
  useMemo,
} from "react";

type Props = {
  children?: React.ReactNode | React.ReactNode[];
};

type State = {
  /** The PLU value the user entered. Defaults to an empty string. */
  pluValue: string;
  /** The display  value in the product name. Defaults to an empty string. */
  productDisplayValue: string;
  // Power 0n/Off value. Defaults to power on i.e. true.
  power: boolean;
};

type Action = { type: "change-PLU-from-user-keyboard"; payload: any };

const initialState: State = {
  pluValue: "",
  productDisplayValue: "",
  power: true,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "change-PLU-from-user-keyboard":
      return { ...state, ["pluValue"]: action.payload.value };
    default:
      return initialState;
  }
};
const UIContext = createContext<object>({});
export const UIContextProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const changePluFromUserKeyboard = (e) =>
    dispatch({
      type: "change-PLU-from-user-keyboard",
      payload: { value: e.target.value },
    });

  const contextValue = useMemo(() => {
    return { ...state, changePluFromUserKeyboard };
  }, [state]);
  return (
    <UIContext.Provider value={contextValue}>{children}</UIContext.Provider>
  );
};

export const useUI = () => {
  const context = useContext(UIContext);
  return context;
};

export default UIContextProvider;
