import React from "react";

function useLocalStorage(itemName, initialVlaue) {
  const [item, setItem] = React.useState(initialVlaue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
   
  
  React.useEffect(() => {
    setTimeout (() =>{
      try {
        const localStorageItem = localStorage.getItem (itemName);
           
        let parsedItem;
    
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialVlaue));
            parsedItem = initialVlaue;
          }else {
            parsedItem = JSON.parse(localStorageItem);
            setItem(parsedItem);
          }
    
          setLoading(false);
        }catch(error) {
          setLoading(false);
          setError(true);
       }
    }, 2000);
  });
   
    
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    };
  
    return {item, saveItem, loading, error};
  }

  export { useLocalStorage };


  /* localStorage.removeItem('TODOS_V1');

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true},
  { text: 'Tomar el curso de intro a React.js', completed: false},
  { text: 'Llorar con la llorona', completed: false},
  { text: 'jajajajaja', completed: false},
  { text: 'bebebebeebe', completed: true},
];

localStorage.setItem('TODOS_V1', JSON.stringify (defaultTodos)); */