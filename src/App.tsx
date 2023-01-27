import { useState } from "react";

import { InputTask } from "./components/InputTask";
import { TaskList } from "./components/TaskList";
import { Header } from "./components/Header";

import "./global.css";

export interface TaskArrayProps {
  done: boolean;
  task: string;
}

function App() {
  const [TaskArray, setTaskArray] = useState<TaskArrayProps[]>([]);

  function handleAddNewTask(params: TaskArrayProps) {
    setTaskArray((current) => [...current, params]);
  }

  function handleToggleTaskDone(taskText: string) {
    const currentTargetArray = TaskArray.filter((task) => task.task !== taskText);
    const targetTask = TaskArray.filter((task) => task.task === taskText);

    targetTask[0].done = !targetTask[0].done;

    setTaskArray([...currentTargetArray, ...targetTask]);

    console.log(targetTask);
  }

  function handleDeleteTask(taskText: string) {
    const newTaskArray = TaskArray.filter((task) => task.task !== taskText);

    setTaskArray(newTaskArray);
  }

  return (
    <div>
      <Header />
      <InputTask handleAddNewTask={handleAddNewTask} />
      <TaskList
        TaskArray={TaskArray}
        handleToggleTaskDone={handleToggleTaskDone}
        handleDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;
