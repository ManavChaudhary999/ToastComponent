import React from 'react';

import Toast from '../Toast';
import { ToastContext } from '../ToastProvider';
import styles from './ToastShelf.module.css';

function ToastShelf() {
  const {toasts} = React.useContext(ToastContext);
  console.log("Rendered Toast Shelf");

  return (
    <ol className={styles.wrapper}>
    {
      toasts?.map(({id, variant, message})=> (
      <li key={id} className={styles.toastWrapper}>
        <Toast id={id} variant={variant}>{message}</Toast>
      </li>
      ))  
    }
    </ol>
  );
}

export default React.memo(ToastShelf);
