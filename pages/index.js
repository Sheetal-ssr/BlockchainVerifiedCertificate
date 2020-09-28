import React,{Component} from 'react';
import axios from 'axios';
import {Form, Input, Button, Message, Image} from 'semantic-ui-react';
import mat from '../images/template.png';
const cv = require('opencv4nodejs');

import fs from 'fs';

// const font = cv.FONT_HERSHEY_PLAIN
// const green = new cv.Vec3(0, 255, 0); 

//mat.putText("Yatharth Arora",new cv.Point2(300,200),font,3,green,6);

createCertificate = () => {
    const image = cv.imread('../images/template.png');
}

class Createcertificate extends Component {
    
    state = {
        selectedFile: null
    }

    fileSelected = event => {
        
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    fileUpload = () => {
        axios.post()
    }
    render(){
        return(
            <div>
                <input type="file" onChange={this.fileSelected} />
                <Button onClick={this.fileUpload}>Upload</Button>

                <Image src={mat} />
            </div>
        )
    }
}

export default Createcertificate;