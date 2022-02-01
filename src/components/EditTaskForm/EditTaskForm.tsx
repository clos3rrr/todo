import React from 'react';

import styles from './EditTaskForm.module.css';

interface Props {
  editTask(name: string): void
  closeModal(value: boolean): void
  value: string
}

const EditTaskForm = ({editTask, closeModal, value}: Props) => {

    return (
      <form className = {styles.editTask_Form} onSubmit={(e: React.SyntheticEvent) => {
        e.preventDefault()
        const target = e.target as typeof e.target & {
          task: { value: string };
        };
        const task: string = target.task.value;
        editTask(task)
        target.task.value = ""
      }
    }>
      <div className={styles.editForm__title}>
        Edit task
      </div>
      <div className={styles.editForm__field}>
        <div className={styles.editForm__field_label}>
          Task name
        </div>
        <input className={styles.editForm__field_input} type='text' placeholder = 'New task name' name="task" defaultValue = {value} required = {true} maxLength={100}/>
      </div>
      <div className = {styles.editForm__buttons}>
        <button className = {styles.editForm__button} type='submit'>
          Edit
        </button>
        <div className = {`${styles.editForm__button} ${styles.editForm__button_transparent}`} style = {{width: '90px'}} onClick = {() => closeModal(false)}>
          Cancel
        </div>
      </div>
    </form>
    );
};

export default EditTaskForm;