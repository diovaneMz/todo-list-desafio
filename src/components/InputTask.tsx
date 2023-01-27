import styles from "./InputTask.module.css";
import { TaskArrayProps } from "../App";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

interface InputTaskProps {
  handleAddNewTask: (params: TaskArrayProps) => void;
}

export function InputTask({ handleAddNewTask }: InputTaskProps) {
  const [taskText, setTaskText] = useState<string>("");

  function handleChangeTaskText(e: ChangeEvent<HTMLInputElement>) {
    setTaskText(e.target.value);
  }

  function handleCreateAddTask(e: FormEvent) {
    e.preventDefault();

    handleAddNewTask({ done: false, task: taskText });
  }

  return (
    <form
      className={styles.inputTask}
      onSubmit={handleCreateAddTask}
    >
      <input
        id="inputId"
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={taskText}
        onChange={handleChangeTaskText}
        minLength={3}
        required
      />
      <button>
        <span>Criar</span> <img src="/assets/plus-icon.svg" />
      </button>
    </form>
  );
}
