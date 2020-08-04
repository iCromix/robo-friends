 import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import { connect } from 'react-redux';
import '../components/styles.css'
import { setSearchField } from '../actions';

const mapStateToProps = (state) => {
    return {
        searchField: state.searchField
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       onSearchChange: (event) => dispatch(setSearchField(event.target.value)) 
    }
}

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: []
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
        .then(user => this.setState({robots: user}));
    }

    render() {
        const { searchField, onSearchChange } = this.props;
        const { robots } = this.state;
        const filteredRobots = robots.filter(robot => {
        return robot.name.toString().toLowerCase().includes(searchField.toString().toLowerCase());
        })
        return !robots.length ?
        <h1 className='tc'> Loading ... </h1>
        :
                <div className='tc'>
                    <h1 className='title'>RoboFriends</h1>
                    <hr/>
                    <SearchBox searchChange={ onSearchChange }/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={ filteredRobots }/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
        }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);