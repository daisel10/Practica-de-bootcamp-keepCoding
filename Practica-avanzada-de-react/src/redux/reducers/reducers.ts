import {
  DELETE_PRODUCTS,
  LOGIN,
  SET_LOADING,
  SET_PRODUCTS,
  SET_SEARCH,ID_PRODUCTS
} from "../action/tipos";

import { TypeProducts } from "../../Types/Products";
import { getLatestProducts } from "../../api/service/setProducts";

const initialState: {
  products: Array<TypeProducts>;
  loadingProducts: boolean;
  stautsSearch: boolean;
  Search: Array<TypeProducts>;
  auth: boolean;
  token: string;
  id: TypeProducts | undefined;
} = {
  products: [],
  loadingProducts: true,
  stautsSearch: false,
  Search: [],
  auth: false,
  token: "",
  id: undefined,
};

export const Reducer =  (state = initialState, action: any) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, products: action.payload };

    case SET_LOADING:
      return { ...state, loadingProducts: action.payload };

    case DELETE_PRODUCTS:
      const newProducts = state.products.filter((product) => {
        return !(product.id === action.payload);
      });

      const productosSearch = state.Search.filter((product) => {
        return !(product.id === action.payload);
      });

      return { ...state, products: newProducts, Search: productosSearch };

    case LOGIN:
      return {
        ...state,
        auth: action.payload.remember,
        token: action.payload.token.accessToken,
      };

    case SET_SEARCH:
      if (!!action.payload) {
        const search = state.products.filter((product) => {
          console.log(
            "🚀 ~ file: reducers.ts:65 ~ search ~ product.name",
            product.tags
          );
          return (
            product.tags[0] === action.payload ||
            product.tags[1] === action.payload ||
            product.tags[2] === action.payload ||
            product.tags[3] === action.payload
          );
        });

        return { ...state, Search: search, stautsSearch: true };
      }

      if (!action.payload) {
        return { ...state, stautsSearch: false };
      }
      return state;

    case ID_PRODUCTS:

  
      const idProducts =action.payload.product.filter((product:any) => {
        return (product.id === action.payload.id);
      });
      

    return { ...state, id: idProducts[0] ,products:action.payload.product};

    default:
      return state;
  }
};
