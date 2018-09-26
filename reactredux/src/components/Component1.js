import React, {Component} from 'react';
import {connect} from 'react-redux';
import {incrementStore, decrementStore} from '../reduxfiles/actions/reducer1Actions';
import {multiplyStore, divideStore} from '../reduxfiles/actions/reducer2Actions';
import store from '../reduxfiles/store';

class Component1 extends Component {

    add() {
        store.dispatch(incrementStore(1));
    }

    sub() {
        store.dispatch(decrementStore(1));
    }

    mult() {
        store.dispatch(multiplyStore(2));
    }

    div() {
        store.dispatch(divideStore(2));
    }

    render() {
        return (
            <div className="Component1">
                <p style={{float:'left', margin:0, marginRight:'1%'}}>Buttons von Komponente 1:</p>
                <button onClick={this.add.bind(this)}>add</button>
                <button onClick={this.sub.bind(this)}>sub</button>
                <button onClick={this.mult.bind(this)}>multiply</button>
                <button onClick={this.div.bind(this)}>divide</button>
                <br/><br/>
                <p>Reducer 1:  {this.props.num.reducer1}</p>
                <p>Reducer 2:  {this.props.num.reducer2}</p>
            </div>
        );
    }
}

function mapStateToProps(state) {        // mappt redux state auf component state attribut num
    return {num: state}
}

export default connect(mapStateToProps)(Component1);

