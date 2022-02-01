import React, {FC} from 'react';
import { useNavigate } from 'react-router';
import styles from './Collections.module.css';

const Collections: FC = () => {
  const navigate = useNavigate();

    return (
      <div className={`outer ${styles.hello}`} onClick={()=>navigate('/test')}>
          
      </div>
    );
};

export default Collections;