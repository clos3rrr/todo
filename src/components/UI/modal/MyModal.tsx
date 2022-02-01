import React from 'react';
import styles from './MyModal.module.css';

interface Props {
  children?: React.ReactNode
  visible: boolean
  setVisible(value: boolean): void 
}

const MyModal = ({children, visible, setVisible}: Props) => {

    const rootClasses = [styles.myModal]

    if (visible) {
        rootClasses.push(styles.active);
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={styles.myModalContent} onClick={(e) => e.stopPropagation()}>
              <div className={styles.cross} onClick={()=>setVisible(false)}/>
                {children}
            </div>
        </div>
    );
};

export default MyModal;