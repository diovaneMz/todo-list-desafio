import { TaskArrayProps } from "../App";
import { Task } from "./Task";
import styles from "./TaskList.module.css";

interface TaskListProps {
  TaskArray: TaskArrayProps[];
  handleToggleTaskDone: (params: string) => void;
  handleDeleteTask: (params: string) => void;
}

function EmptyTaskList() {
  return (
    <div className={styles.emptyTaskList}>
      <img src="/assets/clipboard.svg" />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}

export function TaskList({ TaskArray, handleToggleTaskDone, handleDeleteTask }: TaskListProps) {
  function getDoneTaskCount() {
    const taskCount = TaskArray.filter((task) => task.done === true);

    if (taskCount.length > 0) {
      return taskCount.length;
    }

    return 0;
  }

  return (
    <div className={styles.taskList}>
      <header>
        <strong>
          Tarefas criadas <span>{TaskArray.length}</span>
        </strong>
        <strong>
          Concluídas
          <span>
            {getDoneTaskCount()} de {TaskArray.length}
          </span>
        </strong>
      </header>
      <main>
        {TaskArray.length >= 1 ? (
          <ul>
            {TaskArray.map((task) => (
              <Task
                isDone={task.done}
                taskText={task.task}
                key={task.task}
                handleToggleTaskDone={handleToggleTaskDone}
                handleDeleteTask={handleDeleteTask}
              />
            ))}
          </ul>
        ) : (
          <EmptyTaskList />
        )}
      </main>
    </div>
  );
}
