import { FETCH_COMMITS_SUCCESS } from "../constants";
import { ICommitCard, IFetchCommitsSuccess } from "../types";

export interface ICommitsState {
  cards: ICommitCard[],
}

const initialState: ICommitsState = {
  cards: new Array<ICommitCard>()
}

const commits = (state = initialState, action: IFetchCommitsSuccess): ICommitsState => {
  switch (action.type) {
    case FETCH_COMMITS_SUCCESS:
      return {
        ...state,
        cards: action.payload.commitCards,
      }
    default:
      return state;
  }
}

export default commits;
