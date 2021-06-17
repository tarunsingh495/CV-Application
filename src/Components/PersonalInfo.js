import React, { Component } from "react";
import '../styles/showcase.css'
class PersonalInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {
                name: "",
                Email: "",
                Contact_No: " ",
                State: ""
            },
            dataFinal: [],
            editmode:true
        }
    }
    
    nameInputHandler = (event) => {
        this.setState({
            data: { name: event.target.value }
        })
    }
    emailInputHandler = (event) => {
        this.setState({
            data: { email: event.target.value }
        })
    }
    contact_noInputHandler = (event) => {
        this.setState({
            data: { contact_no: event.target.value },
        })
    }
    stateInputHandler = (event) => {
        this.setState({
            data: { state: event.target.value }
        })
    }
    formSubmitHandler = (event) => {
        this.setState({
            dataFinal: this.state.dataFinal.concat(this.state.data.name, this.state.data.email),
           
        },()=>{this.props.getData(this.state.dataFinal)});
       
    }
    render() {
        return (

            <div className="form-container">
                <label > Name :</label>
                <input className="inputField" onChange={this.nameInputHandler} type="text" /><br />
                <label> Email id: </label>
                <input className="inputField" onChange={this.emailInputHandler} /><br />
                <label>Contact No: </label>
                <input className="inputField" onChange={this.conatact_noInputHandler} /><br />
                <label> State: </label>
                <input className="inputField" onChange={this.stateInputHandler} /> <br />
                <button className="submitButton" onClick={this.formSubmitHandler}>Submit</button>
            </div>

        );
    }

}

export default PersonalInfo;
