import React from 'react';
import ReactDOM from 'react-dom';

class TestBox extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return(
            <div>unnponu</div>
        );
    }
}

ReactDOM.render(
    <TestBox />,
    document.getElementById('content')
);