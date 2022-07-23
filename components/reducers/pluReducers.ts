type State = {
  /** The PLU value the user entered. Defaults to an empty string. */
  pluValue: string;
  /** The display  value in the product name. Defaults to an empty string. */
  productDisplayValue: string;
  // Power 0n/Off value. Defaults to power on i.e. true.
  power: boolean;
};

type Action = { type: string; payload: any };

export const ACTIONS = {
  SET_PLU: "set-PLU",
  SET_PLU_FROM_SCREEN_KEYBOARD: "set-PLU-from-screen-keyboard",
  SET_PRODUCT_DISPLAY_VALUE: "set-product-display-name",
};

export const initialState: State = {
  pluValue: "",
  productDisplayValue: "",
  power: true,
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ACTIONS.SET_PLU:
      return { ...state, pluValue: action.payload.value };
    case ACTIONS.SET_PLU_FROM_SCREEN_KEYBOARD:
      return { ...state, pluValue: state.pluValue + action.payload.value };
    case ACTIONS.SET_PRODUCT_DISPLAY_VALUE:
      return { ...state, productDisplayValue: action.payload };
    default:
      return initialState;
  }
};
