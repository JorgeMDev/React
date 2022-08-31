import React, { Component} from 'react';

class PersonCard extends Component{
    //Declare constructor to ovewrite our initial constructor so that we can initially set the state of object
    constructor(props){
        //give us all the functionality of the default constructor that comes with component
        super(props);
        this.state = {
            addage : this.props.age
        }

    }

    render(){
        const {firstName, lastName, age, hairColor} = this.props
        return( //here we write our jsx, inside return
            <div>
                <h1>{firstName}, {lastName}</h1>
                <h5>Age: {this.state.addage}</h5>
                <h5>Hair Color: {hairColor}</h5>
                <button onClick={()=>this.setState({addage: this.state.addage + 1})}>Birthday Button for {firstName} {lastName}</button>
            </div>


        );
    }
}

export default PersonCard