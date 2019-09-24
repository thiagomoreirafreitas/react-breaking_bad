import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Characters from './pages/Characters';
import SearchCharacters from './pages/SearchCharacter';

function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/characters" component={Characters} />
            <Route exact path="/search-characters/:searchName" component={SearchCharacters} />
            <Route path='*' component={Home} />
        </Switch>
    );
}

export default Routes;