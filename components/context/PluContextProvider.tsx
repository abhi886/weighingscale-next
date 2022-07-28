import React, {
  createContext,
  useContext,
  useReducer,
  FC,
  useMemo,
} from "react";
import products from "@components/staticValues/product";
import { ACTIONS, initialState, reducer } from "../reducers/pluReducers";

type Props = {
  children?: React.ReactNode | React.ReactNode[];
};

const PLUContext = createContext<object>({});

export const PluContextProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const changePluFromUserKeyboard = (value) =>
    dispatch({
      type: ACTIONS.SET_PLU,
      payload: { value },
    });

  const changePluFromScreenKeyboard = (value) => {
    if (!isNaN(value)) {
      dispatch({
        type: ACTIONS.SET_PLU_FROM_SCREEN_KEYBOARD,
        payload: { value },
      });
    }
    if (isNaN(value)) {
      if (value === "PLU") {
        // Check if PLU number is empty
        if (state.pluValue === "") {
          alert("Please Enter Valid PLU");
          return;
        }
        // If PLU number is not empty then look if PLU is in the list and filter
        const productName = products.filter((p) => p.PLU === state.pluValue);
        if (!productName || productName.length === 0) {
          alert("Invalid Plu.");
          dispatch({
            type: ACTIONS.SET_PRODUCT_DISPLAY_VALUE,
            payload: "",
          });
          dispatch({
            type: ACTIONS.SET_PLU_FROM_SCREEN_KEYBOARD,
            payload: { value: "" },
          });
          return;
        }
        productName && productName.length > 0;
        dispatch({
          type: ACTIONS.SET_PRODUCT_DISPLAY_VALUE,
          payload: productName[0].name,
        });
      }
    }
    if (value === "C") {
      dispatch({
        type: ACTIONS.SET_PRODUCT_DISPLAY_VALUE,
        payload: "",
      });
      dispatch({
        type: ACTIONS.SET_PLU,
        payload: { value: "" },
      });
    }
  };
  const contextValue = {
    ...state,
    changePluFromUserKeyboard,
    changePluFromScreenKeyboard,
  };
  // const contextValue = useMemo(() => {
  //   return { ...state, changePluFromUserKeyboard, changePluFromScreenKeyboard };
  // }, [state]);
  return (
    <PLUContext.Provider value={contextValue}>{children}</PLUContext.Provider>
  );
};

export const useUI = () => {
  const context = useContext(PLUContext);
  return context;
};

export default PluContextProvider;
