import React from 'react';
import { Task } from '../../TaskClass';

import styles from './NewTaskForm.module.css';

interface Props {
  createTask(newTask: Task): void
}

const NewTaskForm = ({createTask}: Props) => {

  const addTask = (taskName: string): void => {
    const newTask = new Task(taskName);
    createTask(newTask)
  };

    return (
      <form className = {styles.newTask_Form} onSubmit={(e: React.SyntheticEvent) => {
            e.preventDefault()
            const target = e.target as typeof e.target & {
              task: { value: string };
            };
            const task: string = target.task.value;
            addTask(task)
            target.task.value = ""
          }
        }>
        <button className={styles.plus} type='submit'></button>
        <div className={styles.newTask_section__fieldsList}>
          <input className={styles.newTask_section__input} type='text' placeholder = 'Add Task' name="task" required = {true} maxLength={100}/>
        </div>
      </form>
    );
};

export default NewTaskForm;