import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './App.module.scss';

function App() {

  const [test, setTest] = useState([])

  const fetchTest = async () => {
   try{
    const response = await axios.get('http://localhost:8000/test')
    console.log('Response from server:', response.data)
    setTest(response.data)
    console.log('Test in state:', test);
  }
  catch (error){
    console.error(error)
  }};

  useEffect(
    () => {
      fetchTest()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
    <div className={styles.App}>
      <header className={styles.App_header}>
        {test.map(
          test =>
            <h1 key={test}>{test.message}</h1>
        )}
      </header>
    </div>
  );
}

export default App;
