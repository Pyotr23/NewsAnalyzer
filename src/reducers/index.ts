import { combineReducers } from "redux";
import news from "./news";
import tasks from "./tasks";

const rootReducer = combineReducers({ tasks });

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
