import React from 'react';
import {AppBar} from 'material-ui';

class Header extends React.Component {
    render(){
        return(
            <header className="header">
                <AppBar
                    title="Header"
                />
            </header>
        )
    }
}

export default Header;