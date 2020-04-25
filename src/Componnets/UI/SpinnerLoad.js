import React from 'react';
import CircularProgress from "@material-ui/core/CircularProgress";
import './style/ui.scss'

const SpinnerLoad = (props) => {
        return (
            <div className='circular-page spinnerLoad'>
                <CircularProgress className='circular-size' disableShrink/>
            </div>
        );
}

export default SpinnerLoad;