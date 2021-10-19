export const INITIAL_STATE = {
  withPriority: false,
  previewsTasks: [],
  tasks: [
    { name: "tarea 1", id: "idDB-1" },
    { name: "tarea 2", id: "idDB-2" },
  ],
};

export const ACTIONS = {
  ADD_TASK: "ADD_TASK",
  PRIORITIZE_LAST_TASK: "PRIORITIZE_LAST_TASK",
  CHANGE_PRIORITY: "CHANGE_PRIORITY",
  RESET_STATE: "RESET_STATE",
};

export const taskReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TASK:
      const { payload: newTask } = action;
      return {
        ...state,
        previewsTasks: state.tasks,
        tasks: state.withPriority
          ? [newTask, ...state.tasks]
          : [...state.tasks, newTask],
      };

    case ACTIONS.PRIORITIZE_LAST_TASK:
      const { length } = state.tasks;
      return {
        ...state,
        previewsTasks: state.tasks,
        tasks: [
          state.tasks[length - 1],
          ...state.tasks.slice(0, length - 1),
        ],
      };

    case ACTIONS.RESET_STATE:
      return INITIAL_STATE;

    case ACTIONS.CHANGE_PRIORITY:
      return {
        ...state,
        withPriority: action.payload,
      };

    default:
      return state;
  }
};
