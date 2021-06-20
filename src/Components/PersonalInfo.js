import React, { Component } from "react";
import '../styles/showcase.css'
class PersonalInfo extends Component {
    
    render() {

        return (
            <div className="form-container">
                <label > Name :</label>
                <input className="inputField" onChange={this.props.nameInputHandler} type="text" /><br />
                <label> Email id: </label>
                <input className="inputField" onChange={this.props.emailInputHandler} /><br />
                <label>Contact No: </label>
                <input className="inputField" onChange={this.props.conatact_noInputHandler} /><br />
                <label> State: </label>
                <input className="inputField" onChange={this.props.stateInputHandler} /> <br />
                
            </div>

        );
    }

}

export default PersonalInfo;
