import React, {Component} from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './reduxfiles/store';
import Component1 from './components/Component1';
import Component2 from './components/Component2';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <Component1/>
                    <Component2/>
                </div>
            </Provider>
        );
    }
}
