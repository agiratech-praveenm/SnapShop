import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import RoutePath from '../src/routes/index';


const App = () => {
  return(
      <BrowserRouter>
        <RoutePath/>
      </BrowserRouter>
  );
}

export default App;