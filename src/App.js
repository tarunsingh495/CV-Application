import React, { Component } from "react";
import PersonalInfo from "./Components/PersonalInfo";
import PreviewCv from './Components/PreviewCv'
//import EduInfo from './Components/EduInfo'
import './styles/form.css';


class App extends Component {
    constructor() {
        super()
        this.state = {
            Pdata: {
                name: "",
                Email: "",
                Contact_No: " ",
                State: ""
            },
            Edata:[],
            editmode: true
        }

    }

    nameInputHandler = (event) => {
        const personal = this.state.Pdata
        personal.name = event.target.value
        this.setState({
            Pdata: personal
        })
    }
    emailInputHandler = (event) => {
        const personal = this.state.Pdata
        personal.Email = event.target.value
        this.setState({
            Pdata: personal
        })
    }
    contact_noInputHandler = (event) => {
        const personal = this.state.Pdata
        personal.Contact_No = event.target.value
        this.setState({
            Pdata: personal
        })
    }
    stateInputHandler = (event) => {
        const personal = this.state.Pdata
        personal.State = event.target.value
        this.setState({
            Pdata: personal
        })
    }
    formSubmitHandler = (event) => {
        console.log(this.state.Pdata)
        this.setState({
            editmode: false
        })
    }
    qualInputHandler=(event)=>{
        const qual=this.state.Edata
        
    }



    render() {
        const { name, Email, Contact_No, State } = this.state.Pdata;
        return (<div>
            {this.state.editmode ? (
                <div>
             <PersonalInfo nameInputHandler={this.nameInputHandler} emailInputHandler={this.emailInputHandler} conatact_noInputHandler={this.contact_noInputHandler}
                stateInputHandler={this.stateInputHandler} formSubmitHandler={this.formSubmitHandler} />
                
            
                </div>
                ): (



                
               
                <PreviewCv Pname={name} Pstate={State} Pemail={Email} Pcontact_no={Contact_No} />)}
                <button className="submitButton" onClick={this.formSubmitHandler}>Submit</button>

            </div>
            
        
        );

    }
}


export default App;
