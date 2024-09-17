const TodoTask = (props) => {
  return (
    <li className="">
      {props.task.done ? (
        <del id={"task-" + props.index} onClick={props.toggleTask}>
          {props.task.name}
        </del>
      ) : (
        <span id={"task-" + props.index} onClick={props.toggleTask}>
          {props.task.name}
        </span>
      )}
      <button
        className="border-2 border-black px-3 rounded-md bg-gray-200 ml-4"
        id={props.index}
        onClick={props.removeTask}
      >
        Delete
      </button>
    </li>
  );
};

export default TodoTask;
