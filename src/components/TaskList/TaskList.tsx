import React, {useState} from 'react';
import TaskItem from './Task/TaskItem';
import { Task } from '../../TaskClass'

import styles from './TaskList.module.css';
import NewTaskForm from '../NewTaskFrom/NewTaskForm';

interface Props {
  taskList: Task[]
  deleteTask(idToDelete: number): void
  addTask(newTask: Task): void
}

const TaskList = ({taskList, deleteTask, addTask}: Props) => {
  const [Update, setUpdate] = useState(0)

  const useForceUpdate = (): void => {
    setUpdate(value => value + 1);
  }
    return (
        <div className={styles.outer}>
          <div className={styles.taskList} style={taskList.find(task => task.status) ? undefined : {marginBottom: '200px'}}>
            {taskList.filter(task => !task.status).map((task: Task) => <TaskItem task = {task} key={task.id} deleteTask = {deleteTask} forceUpdate={useForceUpdate}/>)}
            <NewTaskForm createTask={addTask}/>
            <div className={styles.taskList__text}>
              Tasks - {taskList.filter(task => !task.status).length}
            </div>
          </div>
          {taskList.find(task => task.status) ? 
            <div className={styles.taskList}>
              {taskList.filter(task => task.status).map((task: Task) => <TaskItem task = {task} key={task.id} deleteTask = {deleteTask} forceUpdate={useForceUpdate}/>)}
              <div className={styles.taskList__text}>
                Completed - {taskList.filter(task => task.status).length}
              </div>
            </div> :
            null
          }
          
        </div>
    );
};

export default TaskList;