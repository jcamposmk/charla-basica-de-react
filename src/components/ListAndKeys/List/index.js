import React, { useState } from "react";

export const List = ({ tasks, previewsTasks }) => {
  const [withKey, setWithKey] = useState(false);
  const [withTaskIdAsKey, setWithTaskIdAsKey] = useState(false);

  const toggleKey = () => {
    setWithTaskIdAsKey(false);
    setWithKey(!withKey);
  };
  const toggleWithTaskIdAsKey = () => setWithTaskIdAsKey(!withTaskIdAsKey);

  return (
    <div>
      {/* Controls */}
      <div className="mb-3">
        <label className="mb-1 d-block">
          <input type="checkbox" checked={withKey} onChange={toggleKey} /> {""}{" "}
          Con keys ?
        </label>
        <label>
          <input
            disabled={!withKey}
            type="checkbox"
            checked={withTaskIdAsKey}
            onChange={toggleWithTaskIdAsKey}
          />{" "}
          Usar como key el ID de cada tarea ? <i>(Por default usa el index)</i>
        </label>
      </div>

      <div className="row">
        <div className="col-sm-4">
          <PreviousTree previewsTasks={previewsTasks} />
        </div>
        <div className="col-sm-8 p-2">
          <CurrentTree
            tasks={tasks}
            withKey={withKey}
            withTaskIdAsKey={withTaskIdAsKey}
          />
        </div>
      </div>
    </div>
  );
};

const ListItem = ({ task }) => {
  const [clicked, setClicked] = useState(false);

  const toggleClicked = () => setClicked(!clicked);

  return (
    <li
      onClick={toggleClicked}
      className={`border p-1 mb-1  ${clicked ? "border-danger" : ""}`}
    >
      <strong>{task.id}</strong>
      {" - "}
      {task.name}
    </li>
  );
};

const PreviousTree = ({ previewsTasks }) => (
  <>
    <i className="text-primary">Subárbol anterior</i>
    <ul aria-label="previous tree">
      {previewsTasks.map((previewTask) => (
        <li className="border p-1 mb-1">
          <strong>{previewTask.id}</strong>
          {" - "}
          {previewTask.name}
        </li>
      ))}
    </ul>
  </>
);

const CurrentTree = ({ tasks, withKey, withTaskIdAsKey }) => (
  <>
    <i className="text-primary">Subárbol actual</i>
    <h4>Lista de tareas agregadas:</h4>
    <ul aria-label="current tree">
      {tasks.map((task, index) => {
        const listItemProps = { task };
        if (withKey) {
          listItemProps.key = withTaskIdAsKey ? task.id : index;
        }
        return <ListItem {...listItemProps} />;
      })}
    </ul>
  </>
);
