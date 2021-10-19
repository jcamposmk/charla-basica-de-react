import React, { useReducer } from "react";
import { List } from "./List";
import { ACTIONS, INITIAL_STATE, taskReducer } from "./reducers";

export const ListAndKeys = () => {
  const [{ tasks, previewsTasks, withPriority }, dispatch] = useReducer(
    taskReducer,
    INITIAL_STATE
  );

  const AddTaskButton = () => (
    <button
      onClick={() =>
        dispatch({
          type: ACTIONS.ADD_TASK,
          payload: {
            id: `idDB-${tasks.length + 1}`,
            name: `tarea ${tasks.length + 1}`,
          },
        })
      }
    >
      Agregar tarea
    </button>
  );

  const PrioritizeLastTaskButton = () => (
    <button onClick={() => dispatch({ type: ACTIONS.PRIORITIZE_LAST_TASK })}>
      Priorizar última tarea
    </button>
  );

  const ResetButton = () => (
    <button
      className="bg-warning"
      onClick={() => dispatch({ type: ACTIONS.RESET_STATE })}
    >
      Reset
    </button>
  );

  const ChangePriorityField = () => (
    <label className="mb-1 d-block">
      <input
        type="checkbox"
        checked={withPriority}
        onChange={() =>
          dispatch({
            type: ACTIONS.CHANGE_PRIORITY,
            payload: !withPriority,
          })
        }
      />{" "}
      Priorizar nuevas tareas ?
    </label>
  );

  return (
    <>
      <h2 className="text-center mb-3 pb-3 border-bottom">Listas y keys</h2>
      <div className="controls">
        <AddTaskButton />
        <PrioritizeLastTaskButton />
        <ResetButton />
        <ChangePriorityField />
      </div>

      <List tasks={tasks} previewsTasks={previewsTasks} />
    </>
  );
};
