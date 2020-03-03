import React from 'react';
import {Link} from "react-router-dom";
import GGlogo from '../../Resources/images/logos/gamybos-grupe.png'

export const GgLogo = (props) => {

    const template =
        <div className={'img_cover'}

        style={{
            width: props.width,
            height: props.height,
            background: `url(${GGlogo}) no-repeat`}}>
        </div>

    if (props.link) {
        return (
            <Link to={props.linkTo} className={'link_logo'}>
                {template}
            </Link>
        )
    } else {
        return template;
    }

};