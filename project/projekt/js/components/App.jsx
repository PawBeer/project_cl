import React from 'react';
import { Table } from './Table.jsx';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Navigation } from './Navigation.jsx';
import { CarForm } from './CarForm.jsx';
import { Summary } from './Summary.jsx';




export class App extends React.Component {
    render() {
        return (
            <div>

                <div>
                    <HashRouter>
                        <div>
                            <Navigation />
                            <Switch>
                                <Route exact path='/' component={Table} />
                                <Route path='/form' component={CarForm} />
                                <Route path='/sum' component={Summary} />
                            </Switch>
                        </div>
                    </HashRouter>
                </div>

            </div>
        )
    }
}