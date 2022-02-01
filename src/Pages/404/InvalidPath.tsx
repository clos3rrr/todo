import React, {FC} from 'react';
import { useNavigate } from 'react-router';
import styles from './InvalidPath.module.css';

const InvalidPath: FC = () => {
  const navigate = useNavigate();

    return (
      <div className = 'outer' style={{alignSelf: 'center', position: 'relative', height: '100vh', maxWidth: 'none', justifyContent: 'center ', overflow: 'hidden'}}>
        <div className={styles.title}>404 - Looks like you're lost.</div>
        <div className={styles.text}>Maybe this page used to exist or you just spelled something wrong.
                                    Chances are you spelled something wrong, so can you double check the url?
        </div>
          <button onClick={() => navigate('/test')} className={styles.button}> Return Home </button>       
        <div className={styles.bottomLeft}/>
        <div className={styles.topRight}/>
      </div>
    );
};

export default InvalidPath;