import Main from './main';
import React, {useEffect} from 'react'

function App() {
 
  useEffect(() => {
    document.title = "Zhenda's Portfoilio"
  }, []);

  return (
    Main()  
  );
}

export default App;
