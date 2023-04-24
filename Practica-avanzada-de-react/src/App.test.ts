import { setProducts } from "./redux/action/action";
import { SET_PRODUCTS } from "./redux/action/tipos";
import { getIsLogged } from "./redux/selectores";

test("reducer y sincronia", () => {
  const products = {
    id: "12uhud",
    createdAt: "jdjnccj",
    name: "hola",
    sale: true,
    price: 1999,
    tags: ["hola"],
    photo: "nffdjddj",
  };
  const expectedAction = {
    type: SET_PRODUCTS,
    payload: products,
  };
  const action = setProducts(products);
  console.log("🚀 ~ file: App.test.tsx:33 ~ test ~ products", products);

  expect(action).toEqual(expectedAction);
});

test("selector", () => {
  const state = { Reducer: { auth: true } };

  expect(getIsLogged(state)).toBe(true);
});
