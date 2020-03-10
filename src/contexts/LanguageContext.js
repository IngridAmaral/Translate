import React from 'react';

const Context = React.createContext('english');

export class LanguagueStore extends React.Component {
    state = {languague: 'english'}

    onLanguageChange = languague => {
        this.setState({languague})
    }

    render() {
        return (
            <Context.Provider value={{...this.state, onLanguageChange}}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export default Context;