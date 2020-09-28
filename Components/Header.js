import React from 'react';
import { Menu } from 'semantic-ui-react';
import {Link} from '../routes';


export default () => {
    return (
        <Menu style={{marginTop: '10px'}}>
            <Link route="/aboutproject">
                <a className="item">
                    Certificate Generator
                </a>
            </Link>
                
            <Link route="/">
                <a className="item">
                    Generate
                </a>
            </Link>                
                
                
            <Link route="/validate">
                <a className="item">
                    Validate
                </a>
            </Link> 

            <Link route="/about">
                <a className="item">
                    About
                </a>
            </Link>    
                
        </Menu>

    );
}