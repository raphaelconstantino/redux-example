import React from 'react';
import ReactDOM from 'react-dom';
// Containers
import Contact from './containers/Contact';
import Upsert from './containers/Upsert';
// Route
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
// Redux
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
// CSS
import './thirdparty/bootstrap/css/bootstrap.min.css';
import './styles/base.css';

let store = configureStore();

ReactDOM.render(
    (
        <Provider store={store}> 
            <Router>
                <div>
                    <Route exact path="/" component={Contact}/>
                    <Route exact path="/insert" component={Upsert}/>
                    <Route path="/edit/:id" component={Upsert}/>    
                </div>    
            </Router>  
        </Provider>
    ),
    document.getElementById('root')
);
