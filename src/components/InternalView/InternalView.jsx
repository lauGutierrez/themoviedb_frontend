import React from 'react';
import Header from '../Header/Header';

const InternalView = (props) => {
    return (
        <React.Fragment>
            <Header></Header>
            { props.children }
        </React.Fragment>
    );
}
export default InternalView;