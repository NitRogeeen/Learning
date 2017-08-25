import React from 'react';
import ReactDOM from 'react-dom';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import TestComponent from '../components/TestComponent';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
import TestComponent from './TestComponent';
import Header from './Header';
import Footer from './Footer';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MyRawTheme from './myThemeFile';

class App extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    static get childContextTypes() {
        return { muiTheme: React.PropTypes.object.isRequired };
    }

    getChildContext(){
        return { muiTheme: getMuiTheme(MyRawTheme)};
    }

    render() {
        return(
            <div>
                <Header />
                <TestComponent />
                <Footer />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);