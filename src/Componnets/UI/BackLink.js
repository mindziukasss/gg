import React from 'react';
import Link from '@material-ui/core/Link';


const BackLink = (props) => {
    return (
        <div style={{display: `${props.showLink ? `block` : `none`}`}}>

            <Link color='inherit' href={'/'}>
                <p className='fs-12 link-home'>Grįžti į pradžią</p>
            </Link>
        </div>
    );
}

export default BackLink;