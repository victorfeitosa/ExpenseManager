import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const Home = () => (
   <p>Something here for Aí dentro</p>
);
const Create = () => (
   <p>CREATE</p>
);
const Edit = () => (
   <p>EDIT</p>
);
const Help = () => (
   <p>HELP</p>
);

const routes = (
   <BrowserRouter>
      <div>
         <Route path="/" component={Home} exact={true}/>
         <Route path="/create" component={Create} />
         <Route path="/edit" component={Edit} />
         <Route path="/help" component={Help} />
      </div>
   </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));
