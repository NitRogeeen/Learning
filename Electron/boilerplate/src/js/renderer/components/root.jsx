/* @flow */
import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Hello from './hello'

class Root {
    targetElement: Object;

    constructor(targetElement: Object) {
        this.targetElement = targetElement;
        if (targetElement) {
            this.renderView();
        }
    }

    renderView(): void {
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