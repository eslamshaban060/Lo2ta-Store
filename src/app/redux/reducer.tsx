import ProductType from "@/data/products";
import { OPEN_PRODUCT } from "@/components/lastProducts/actionTypes";

export default interface initlType {
  newProduct: null | ProductType;
}

const Initialzation: initlType = {
  newProduct: null,
};

export const useReducer = (state = Initialzation, action: any) => {
  switch (action.type) {
    case OPEN_PRODUCT:
      return {
        ...state,
        newProduct: action.newProduct,
      };
    default:
      return state;
  }
};
