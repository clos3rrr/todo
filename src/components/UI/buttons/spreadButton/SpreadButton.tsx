import React from 'react';
import styles from './SpreadButton.module.css';

interface Props {
  visible: boolean
  setVisible(value: boolean): void 
}

const SpreadButton = ({visible, setVisible}: Props) => {
    return (
      <div tabIndex={0} className = {styles.button} onClick = {() => setVisible(!visible)} onBlur = {() => setVisible(false)}/>
    );
};

export default SpreadButton;