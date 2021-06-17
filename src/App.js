import React,{ Component } from "react";
import PersonalInfo from "./Components/PersonalInfo";
import PreviewCv from './Components/PreviewCv'
import './styles/form.css';

class App extends Component{
    constructor(){
      super()
      this.state={
        editMode:true,
        PersonalData:""
      }
    }

getPersonalDetails=(Person_Data)=>{
  this.setState({
    PersonalData:Person_Data,
    editMode:false

  })
}


render(){
  return(
    this.state.editMode ? (
    <div> <PersonalInfo getData={this.getPersonalDetails}/>
   
    </div>):(
      <PreviewCv renderData={this.state.PersonalData} />
    )
    );
     
}
}


export default App;
