import {
  applyMiddleware,
  combineReducers,
  createStore,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

// components

import * as reducers from "./reducers/reducers";

import * as auth from '../api/service/accessibility';
import * as tweets from '../api/service/setProducts';

const HISTORY_BACK = "HISTORY_BACK";

const historyEnhancer:any =

  (createStore:any) => (reducer1:any, preloadedState:any, enhancer:any) => {
    const historyReducer = (state:any, action:any) => {
      const { history = [], ...rootState } = state;
      if (action.type === HISTORY_BACK) {
        const newHistory = history.slice(0, history.length - 1);
        return {
          ...newHistory[newHistory.length - 1].state,
          history: newHistory,
        };
      }

      const newState = reducer1(rootState, action);
      return {
        ...newState,
        history: [...history, { action, state: newState }],
      };
    };
    return createStore(historyReducer, preloadedState, enhancer);
  };

  const logger = (store:any) => (next:any) => (action:any) => {
    //console.group(action.type);
    //console.info("dispatching", action, store.getState());
    const result = next(action);
    //console.log("next state", store.getState());
   // console.groupEnd();
    return result;
  };
  
  const failureRedirections =
    (router:any, redirections:any) => (store:any) => (next:any) => (action:any) => {
      const result = next(action);
  
      if (action.error) {
        const redirection = redirections[action.payload.status];
        if (redirection) {
          router.navigate(redirection);
        }
      }
  
      return result;
    };
  



export default function configureStore( preloadedState:any,{router}:{router:any}){
  const reducer = combineReducers(reducers)
  const middlewares:any = [
    thunk.withExtraArgument({ api: { auth, tweets }, router }),
    failureRedirections(router, {
      401: "/login",
      404: "/404",
    }),
    logger,
  ];
//composeWithDevTools(applyMiddleware(logger,thunk))
  const store = createStore(reducer,preloadedState, composeWithDevTools(applyMiddleware(...middlewares),historyEnhancer));
  return store


}



