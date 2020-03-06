import React from 'react';
import Form from './form.jsx';
import GroceryList from './groceryList.jsx';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            groceries: [
                {
                id: 1,
                name: "Frozen Blueberries",
                quantity: 2
            },
            {
                id: 2,
                name: "Frozen Mango",
                quantity: 2
            }
            
            ]
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
                });
            })
            .catch(err => {
                console.log(err)
            });
    }


    handleSubmit(itemObj) {
        fetch('http://localhost:3000/api/groceries/add', {
            method: 'POST',
            body: itemObj
        })
        .then(res => {
            console.log(res);
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
                <GroceryList  groceries={this.state.groceries} />
                
            </div>
        );
    };

};