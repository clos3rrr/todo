import React, {useState, FC} from 'react';
import { useNavigate } from 'react-router';
import TaskList from "../../components/TaskList/TaskList";
import { Task } from "../../TaskClass";
import styles from './TodoList.module.css';


const TodoList: FC = () => {

  const [taskList, setTaskList] = useState<Task[]>([]);

  const navigate = useNavigate()

  const addTask = (newTask: Task): void => {
    setTaskList([...taskList, newTask]);
  };

  const deleteTask = (idToDelete: number): void => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== idToDelete;
      })
    );
  };

    return (
      <div className='outer'>
        <div className={styles.backRow}>
          <div className={styles.backButton} onClick={() => navigate('/')}/>
          test
        </div>
        <TaskList taskList={taskList} deleteTask={deleteTask} addTask={addTask}/>       
      </div>
    );
};

export default TodoList;