import React, {Component} from 'react';
import ReactHtmlParser from 'react-html-parser';
import CircularProgress from '@material-ui/core/CircularProgress';
import {NetworkHelper} from "../Service/NetworkHelper";
import './style/page.scss'

class Page extends Component {

    constructor() {
        super();
        this.state={data:false}
    }

    componentDidMount()
    {
        NetworkHelper
            .get('page/' + this.props.match.params.id)
            .then((response) =>
            {
                this.setState({data: response})
            })
    }

    render() {
        const data = this.state.data[0];
        return (
            <div className={'block-page'}>
                {
                    data ?
                        <div className={'title-page'}>
                            <h1>{data.title}</h1>
                            {ReactHtmlParser(data.description)}
                        </div>
                        :
                        <div className={'circular-page'}>
                            <CircularProgress className={'circular-size'} disableShrink/>
                        </div>
                }
            </div>

        )
    }
}

export default Page;
