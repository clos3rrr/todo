import React, {useState} from 'react';
import styles from './MyCheckBox.module.css';

interface Props {
  checked: boolean
  onCheck?: VoidFunction
}

const MyCheckBox = ({checked, onCheck}: Props) => {
  const [isChecked, setIsChecked] = useState(checked)

  const handleCheck = (): void => {
    if (onCheck) {
      onCheck()
    }
    // console.log(checked)
    setIsChecked(!isChecked)
  }

    return (
      <div className = {isChecked ? `${styles.checkBox} ${styles.checked}` : styles.checkBox} onClick = {():void => handleCheck()} />
    );
};

export default MyCheckBox;