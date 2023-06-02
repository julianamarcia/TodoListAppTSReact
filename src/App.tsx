import { useState } from "react";

//Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import Modal from "./Modal";
// CSS
import styles from "./App.module.css";

//Interface
import { ITask } from "./Task";

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);
  const [getHideModal, setHideModal] = useState<boolean>(false);

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      })
    );
  };

  const hideOrShowModal = (display: boolean) => {
    setHideModal(display);
  };

  const editTask = (task: ITask): void => {
    hideOrShowModal(true);
    setTaskToUpdate(task);
  };
  const updateTask = (id: number, title: string, difficulty: number) => {
    const updatedTask: ITask = { id, title, difficulty };

    const updateItens = taskList.map((task) => {
      return task.id === updatedTask.id ? updatedTask : task;
    });
    setTaskList(updateItens);
    hideOrShowModal(false);
  };

  return (
    <div>
      <Modal
        title={taskToUpdate?.title}
        hide={getHideModal}
        hideOrShow={hideOrShowModal}
        children={
          <TaskForm
            btnText="Editar Tarefa"
            taskList={taskList}
            task={taskToUpdate}
            handleUpdate={updateTask}
          />
        }
      />
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer? </h2>
          <TaskForm
            btnText="Criar Tarefas"
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList
            taskList={taskList}
            handleDelete={deleteTask}
            handleEdit={editTask}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
