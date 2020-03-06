import React from 'react';
import Form from './form.jsx';
import GroceryList from './groceryList.jsx';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            groceries: []
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    };


    componentDidMount() {
        fetch('http://localhost:3000/api/groceries')
            .then(res => {
                return res.json();
            })
            .then(groceries => {
                this.setState({
                    groceries: groceries
                }, () => console.log(this.state.groceries));
            })
            .catch(err => {
                console.log(err)
            });
    }


    handleSubmit(itemObj) {
        const response = fetch('/api/groceries/add', {
            method: 'POST',
            body: JSON.stringify(itemObj),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(() => {
            return fetch('/api/groceries')
        })
        .then(res => {
            res.json();
        })
        .then(data => {
            this.setState({
                groceries: data
            });
        })
        .catch(err => console.log(err));
    }

    render() {

        return(
            <div className="app">
                <header>
                    <img src="grocery-bags.png" />
                    <h1>Grocery List</h1>
                </header>

                <Form handleSubmit={this.handleSubmit} />
                <GroceryList groceries={this.state.groceries} />
                
            </div>
        );
    };

};