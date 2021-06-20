import React,{Component} from "react";

class PreviewCv extends Component{
   
    render(){
        return(
            <div className="cv-container">
                {this.props.Pname}
                {this.props.Pstate}
                {this.props.Pemail}
                {this.props.Pcontact_no}
            </div>
        
       );
    }
}
export default PreviewCv;