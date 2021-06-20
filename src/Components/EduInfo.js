import React,{Component} from 'react';

class Eduinfo extends Component{

    render(){

        return(
            <div className="form-container">
                <label > Qualification :</label>
                <input className="inputField" onChange={this.props.qualInputHandler} type="text" /><br />
                <label> Institution: </label>
                <input className="inputField" onChange={this.props.instituteInputHandler} /><br />
                <label>CGPA: </label>
                <input className="inputField" onChange={this.props.cgpaInputHandler} /><br />
                <label> Passing Year: </label>
                <input className="inputField" onChange={this.props.passingYearInputHandler} /> <br />
                
            </div>

        );
    }
}