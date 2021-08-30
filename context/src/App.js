import React, { createContext } from 'react';
import CompA from './Components/CompA';
import Uncontrolled from './Components/Uncontrolled';
import Usereducer from './Components/Usereducer';
import UseMemo from './Components/UseMemo';

const FirstName = createContext();
const LastName = createContext();

const App = () => {
  return (
    <>
      <UseMemo />
      <Usereducer />
      <Uncontrolled />
      <FirstName.Provider value={"Hello"}>
        <LastName.Provider value={"Kumar"}>
          <CompA />
        </LastName.Provider>
      </FirstName.Provider >
    </>
  )
}

export default App;
export { FirstName, LastName }