import Main from './main';
import React, {useEffect} from 'react'
import { Route } from "react-router-dom";

import Glider from './features/glider';
import SFdispatch from './features/sfdispatch';
import Recommender from './features/recommender';
import GanArt from './features/ganart';
import Starlink from './features/starlink';
import Template from './features/template';


function App() {
 
  useEffect(() => {
    document.title = "Zhenda's Portfoilio"
  }, []);

  return (
    <div>
      <Route path='/' exact component={Main}/>
      <Route path='/glider' exact component={Glider}/>
      <Route path='/sfdispatch' exact component={SFdispatch}/>
      <Route path='/recommender' exact component={Recommender}/>
      <Route path='/ganart' exact component={GanArt}/>
      <Route path='/starlink' exact component={Starlink}/>
      <Route path='/dev/template' exact component={Template}/>
    </div>
  );
}

export default App;
