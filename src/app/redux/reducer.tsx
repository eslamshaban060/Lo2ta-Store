import ProductType from "@/data/products";
import { OPEN_PRODUCT } from "@/app/redux/actionTypes";

export default interface initlType {
  newProduct: null | ProductType;
}

const Initialzation: initlType = {
  newProduct: null,
};
interface OpenProductAction {
  type: typeof OPEN_PRODUCT;
  newProduct: ProductType;
}

export const useReducer = (
  state = Initialzation,
  action: OpenProductAction
) => {
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
