import React,{Component} from "react";

class PreviewCv extends Component{
   
    render(){
        return(
            <div className="cv-container">
                {console.log(this.props.renderData)}
            </div>
        
       );
    }
}
export default PreviewCv;