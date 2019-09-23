import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Characters from './pages/Characters';

function Routes() {
    return (   
            <Switch>
                <Route exact path="/"  component={Home} />
                <Route exact path="/characters" component={Characters} />
            </Switch>
    );
}

export default Routes;