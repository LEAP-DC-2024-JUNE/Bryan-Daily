import TodoTask from "@/components/TodoTask";
import { useState } from "react";

const todo = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    const text = document.getElementById("new-task").value;
    if (text !== "") {
      const newTask = {
        name: document.getElementById("new-task").value,
        done: false,
      };
      document.getElementById("new-task").value = "";
      setTasks([...tasks, newTask]);
    }
  };

  const removeTask = (e) => {
    setTasks(tasks.filter((_, i) => i !== parseInt(e.target.id)));
  };

  const toggleTask = (e) => {
    console.log("Toggle is called.");
    setTasks(
      tasks.map((task, i) => {
        console.log(e.target);
        if ("task-" + i == e.target.id) {
          console.log(!task.done);
          return { name: task.name, done: !task.done };
        }
        return task;
      })
    );
  };

  return (
    <div className="p-5">
      <h1 className="font-bold text-3xl">To-Do List</h1>
      <ul className="list-disc list-inside relative left-4">
        {tasks.map((task, i) => {
          return (
            <TodoTask
              key={"task-" + i}
              task={task}
              removeTask={removeTask}
              toggleTask={toggleTask}
              tasks={tasks}
              setTasks={setTasks}
              index={i}
            />
          );
        })}
      </ul>
      <div>
        <input
          className=" border-2 border-black rounded-md"
          type="text"
          name="new-task"
          id="new-task"
        />
        <button
          className="border-2 border-black px-3 rounded-md bg-gray-200"
          onClick={addTask}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default todo;
