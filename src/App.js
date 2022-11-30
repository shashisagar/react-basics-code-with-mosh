import { useState } from 'react';
import './App.css';
import Counters from './components/counters';
import Header from './components/header';

function App() {
  const [countArray, setCountArray] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 }
  ]);

  const onDeleteHandler = (counter) => {
    const deleteArray = countArray.filter((count) => count.id !== counter.id);
    setCountArray(deleteArray);
  }

  const onIncrementHandler = (counter) => {
    const counterArray = [...countArray];
    const index = counterArray.indexOf(counter);
    counterArray[index] = { ...counter };
    counterArray[index].value++;
    setCountArray(counterArray);
  }

  const onResetHandler = () => {
    const newCounters = countArray.map((c) => {
      c.value = 0;
      return c;
    });
    setCountArray(newCounters);
  };

  return (
    <div>
      <Header totalCounters={countArray.filter(f=>f.value >0).length} />
      <Counters onReset={onResetHandler} onDelete={onDeleteHandler} onIncrement={onIncrementHandler} countArray={countArray} />
    </div>
  );
}

export default App;
