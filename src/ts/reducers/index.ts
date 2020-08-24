import { combineReducers } from "redux";
import news from "./news";
import commits from "./commits";

const rootReducer = combineReducers({ news, commits });

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
