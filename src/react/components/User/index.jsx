import React, {Component} from 'react';
import { connect } from 'react-redux';

import './styles.css';

const User = ({ 
    user
}) => {
    return (
        <div>
        {user}
        </div>
    );
};

const mapStateToProps = ({
    userReducer: {
        user
    } = {}
}) => ({
    user
});

export default connect(mapStateToProps)(User);