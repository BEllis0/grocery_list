import React from 'react';

export default class Form extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            groceryName: '',
            quantity: undefined,
        };

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeQuantity = this.onChangeQuantity.bind(this);
    };

    onChangeName(e) {
        this.setState({
            groceryName: e.target.value
        });
    };

    onChangeQuantity(e) {
        this.setState({
            quantity: e.target.value
        });
    };

    render() {
    return (
    
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                this.props.handleSubmit({name: this.state.groceryName, quantity: this.state.quantity})
                }}>
                <label>Name</label>
                <input onChange={this.onChangeName} id="groceryName" type="text" />
                <label>Quantity</label>
                <input onChange={this.onChangeQuantity} id="quantity" type="number" />
                <input id="submit" type="submit" />
            </form>
        </div>
    );
    }
};