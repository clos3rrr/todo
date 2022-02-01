import React from 'react';
import { TaskPriority } from '../../../../enums';
import styles from './TaskMenu.module.css';

interface Props {
  visible: boolean
  status: boolean
  changePriority (newPriority: TaskPriority): void
  deleteTask(): void
  openEditForm(value: boolean): void
}

const TaskMenu = ({visible, status, changePriority, deleteTask, openEditForm}: Props) => {

    const rootClasses = [styles.TaskMenu]

    if (visible) {
        rootClasses.push(styles.active);
    }

    // status === true ? return (<div className={rootClasses.join(' ')}></div>) : return null
    if (status) 
      return (<div className={rootClasses.join(' ')}>
        <div className = {styles.row} style = {{borderRadius: '8px'}} onMouseDown={() => deleteTask()}>
          <div className= {styles.row__img_delete}/>
          <div className = {styles.row__text}>
            Delete
          </div>
        </div>
      </div>)
    else 
      return (<div className={rootClasses.join(' ')}>
      <div className = {styles.row} style = {{borderTopLeftRadius: '8px', borderTopRightRadius: '8px'}} onMouseDown={()=>openEditForm(true)}>
        <div className= {styles.row__img_edit}/>
        <div className = {styles.row__text}>
          Edit
        </div>
      </div>
      <div className={styles.line}/>
      {Object.keys(TaskPriority).map((key, index) => 
      <div className = {styles.row} key={key} onMouseDown = {() => changePriority(TaskPriority[key as keyof typeof TaskPriority])}>
        <svg stroke="currentColor" fill={TaskPriority[key as keyof typeof TaskPriority]} style = {{marginRight: '8px', width: "18px", height: "18px"}} strokeWidth="0" viewBox="0 0 20 20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd"></path></svg>
        <div className = {styles.row__text}>
          Priority {index+1}
        </div>
      </div>
      )}
      <div className={styles.line}/>
      <div className = {styles.row} style = {{borderBottomLeftRadius: '8px', borderBottomRightRadius: '8px'}} onMouseDown={() => deleteTask()}>
        <div className= {styles.row__img_delete}/>
        <div className = {styles.row__text}>
          Delete
        </div>
      </div>
    </div>)
};

export default TaskMenu;