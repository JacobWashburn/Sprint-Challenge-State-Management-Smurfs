import React, {useEffect} from "react";
import {connect} from 'react-redux';

import {getSmurfs, postSmurf} from '../Actions';

import "./App.css";
import SmurfList from './SmurfList/SmurfList';
import SmurfForm from './Form/SmurfForm';


const App = props => {

    useEffect(() => {
        props.getSmurfs();
    }, []);

    return (
        <div className="App">
            <SmurfForm postSmurf={props.postSmurf}/>
            <SmurfList smurfList={props.smurfList}/>
        </div>
    );

};

const mapStateToProps = state => {
    return {
        ...state
    };
};

export default connect(mapStateToProps, {getSmurfs, postSmurf})(App);
