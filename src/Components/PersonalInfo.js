import React,{ Component } from "react";
import '../styles/showcase.css'
class PersonalInfo extends Component{
    


render(){
  return(
    <div className="cv-container">
        <div className="person-name">{console.log(this.props.person_data)}</div>
      
    </div>
  

  );
}

}

export default PersonalInfo;
