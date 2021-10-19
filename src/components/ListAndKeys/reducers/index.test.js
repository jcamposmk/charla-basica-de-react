import { ACTIONS, INITIAL_STATE, taskReducer } from ".";

describe('taskReducer', () => {
  it('debería agregar una tarea al final de la lista', () => {
    // Arrange
    const newTask = {
      id: "idDB-3",
      name: "tarea 3",
    };
    const action = {
      type: ACTIONS.ADD_TASK,
      payload: newTask, 
    };
  
    // Act 
    const newState = taskReducer(INITIAL_STATE, action);
  
    // Assert
    expect(newState).toEqual({
      ...INITIAL_STATE,
      previewsTasks: INITIAL_STATE.tasks,
      tasks: [...INITIAL_STATE.tasks, newTask],
    });
  });
})