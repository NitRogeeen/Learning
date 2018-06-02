import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Hello from './hello'

class Root {
    constructor(targetElement) {
        this.targetElement = targetElement;
        this.renderView();
    }

    renderView() {
        render((
            <HashRouter>
                <Switch>
                    <Route exact path = '/' component={Hello} />
                    <Route path = '/hello' component={Hello} />
                </Switch>
            </HashRouter>
        ), this.targetElement);
    }
}

export default Root;