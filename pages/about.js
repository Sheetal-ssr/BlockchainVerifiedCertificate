import React, {Component} from 'react';
import intro from '../images/intro.jpeg';
import myself from '../images/myself.jpg';
import Layout from '../Components/Layout';
import {Image, Reveal} from 'semantic-ui-react';

class About extends Component {
    render(){
        return(
            <Layout>
                <div style={{float:"left"}}>
                    <Reveal animated='move'>
                        <Reveal.Content visible>
                            <Image src={intro} size="large" />
                        </Reveal.Content>
                        <Reveal.Content hidden>
                            <Image src={myself} size="large" />
                        </Reveal.Content>
                    </Reveal>
                </div>

                <div style={{float:"left",marginLeft:'100px'}}>
                    <h3>About Me</h3>
                </div>
            </Layout>
        )
    }
}



export default About;