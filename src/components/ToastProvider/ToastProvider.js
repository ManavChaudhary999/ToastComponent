import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({children}) {
  const [toasts, setToasts] = React.useState([]);
  console.log("Rendered Toast Provider");

  function addToast(variant, message){
    const toast = {
      id: `${variant}-${Math.random()}`,
      variant,
      message,
    }
    // const newToasts = [...toasts, toast];
    setToasts((value)=> [...value, toast]);
  }
  
  const removeToast = (id)=> setToasts((previousValue)=> previousValue.filter(toast=> toast.id !== id));
    // const newToasts = toasts.filter(toast=> toast.id !== id);

  const value = {toasts, addToast, removeToast};  
  
  React.useCallback(()=> {
    function handleKeyDown(e){  
      console.log(e);
      if(e.code === 'Escape'){
        setToasts([]);
      }
    }
    
    window.addEventListener('keydown', handleKeyDown);
    
    return ()=> {
      window.removeEventListener('keydown', handleKeyDown);
    }
  }, []);

  return (
    <ToastContext.Provider value={value}>
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider;
