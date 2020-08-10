import { load } from 'redux-localstorage-simple';

type stateTasks = ITask[];
export interface ITask {
  id: number,
  text: string,
  isCompleted: boolean,
}
const ADD_TASK = 'ADD_TASK';
// Actions
interface IAddTaskAction {
  type: typeof ADD_TASK,
  payload: ITask,
}
const savedTasks: any = load();

const initialState: stateTasks = (savedTasks && savedTasks.tasks) ? savedTasks.tasks : [];
const TASKS = [
  {
    id: 1,
    text: 'Learn ReactJS',
    isCompleted: true,
  },
  {
    id: 2,
    text: 'Learn Redux',
    isCompleted: false,
  },
  {
    id: 3,
    text: 'Learn React Router',
    isCompleted: false,
  }
];
const tasks = (state = TASKS, action: IAddTaskAction): stateTasks => {
  switch (action.type) {
    case ADD_TASK :
      return [
        ...state, {
          id: action.payload.id,
          text: action.payload.text,
          isCompleted: action.payload.isCompleted,
        }
      ];
    default:
      return state;
  }
}

export default tasks;
