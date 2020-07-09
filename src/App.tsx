import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import Employees from './containers/employees/employees';

const App: React.FC = () => {
    return (
        <div className="App">
            <div className="content-wrapper">
                <Switch>
                    <Route path={'/'} component={ Employees } exact></Route>
                </Switch>
            </div>
        </div>
    );
}

export default App;
