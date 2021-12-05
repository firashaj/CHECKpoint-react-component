import { Component } from "react";
import Firas from "./firas.JPG";
class ProfilePhoto extends Component{
    render(){
        return(
            <div>
                <img   src={Firas}  alt="Mon Photo" />
            </div>
        )
    }
}
export default ProfilePhoto;