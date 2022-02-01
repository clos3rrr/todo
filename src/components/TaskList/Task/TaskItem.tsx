import React, {useState} from 'react';
import { TaskPriority } from '../../../enums';
import { Task } from '../../../TaskClass';
import EditTaskForm from '../../EditTaskForm/EditTaskForm';
import SpreadButton from '../../UI/buttons/spreadButton/SpreadButton';
import MyCheckBox from '../../UI/checkBox/MyCheckBox';
import MyModal from '../../UI/modal/MyModal';

import styles from './TaskItem.module.css';
import TaskMenu from './taskMenu/TaskMenu';

interface Props {
  task: Task
  deleteTask(idToDelete: number): void
  forceUpdate: VoidFunction
}

const TaskItem = ({task, deleteTask, forceUpdate}: Props) => {

  // const [status, setStatus] = useState<boolean>(task.status)
  // const [priority, setPriority] = useState<TaskPriority>(task.priority)
  const [visibleMenu, setVisibleMenu] = useState<boolean>(false)
  const [visibleEdit, setVisibleEdit] = useState<boolean>(false)


  const handleChangeStatus = (): void => {
    task.changeStatus()
    forceUpdate()
  }

  const handleChangePriority = (newPriority: TaskPriority): void => {
    task.changePriority(newPriority)
    forceUpdate()
  }

  const handleChangeName = (newName: string): void => {
    task.changeName(newName)
    setVisibleEdit(false)
    forceUpdate()
  }

    return (
            <div className = {styles.taskList__item}>
              <MyCheckBox checked = {task.status} onCheck = {handleChangeStatus}/>
              <div className = {styles.taskList__item_name} style={task.status ? {textDecoration: 'line-through'} : undefined}>{task.name}</div>
              <div className = {styles.taskList__item_priority} style ={{background: task.priority}}/>
              <SpreadButton visible = {visibleMenu} setVisible = {setVisibleMenu}/>
              <TaskMenu visible = {visibleMenu} status={task.status} changePriority = {handleChangePriority} deleteTask = {() => deleteTask(task.id)} openEditForm = {setVisibleEdit}/>
              <MyModal visible={visibleEdit} setVisible={setVisibleEdit}>
                <EditTaskForm editTask = {handleChangeName} closeModal = {setVisibleEdit} value = {task.name}/>
              </MyModal>
            </div>
    );
};

export default TaskItem;