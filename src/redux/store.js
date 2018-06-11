import { createStore } from "redux";
import rootReducer from './reducers/root';

/* Create the store using our root reducer. */
const store = createStore(rootReducer);

export default store;