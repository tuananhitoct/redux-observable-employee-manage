import { rootReducer, rootEpic } from "./root";
import { createEpicMiddleware } from "redux-observable";
import { Middleware, StoreEnhancer, applyMiddleware, createStore, compose } from "redux";

export type AppState = ReturnType<typeof rootReducer>;

export const configureStore = (inititalState?: AppState) => {
    const epicMiddleware = createEpicMiddleware();
    const middlewares: Middleware[] = [epicMiddleware];
    const middlewareEnhancer: StoreEnhancer = applyMiddleware(...middlewares);
    const store = createStore(rootReducer, inititalState, compose(middlewareEnhancer));
    epicMiddleware.run(rootEpic as any);

    return store;
}

export default configureStore;
