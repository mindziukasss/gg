import React, {Component} from 'react';
import ReactHtmlParser from 'react-html-parser';
import {NetworkHelper} from "../Service/NetworkHelper";
import './style/page.scss'
import SpinnerLoad from "../UI/SpinnerLoad";
import NotFound from "../UI/NotFound";

class Page extends Component {

    constructor() {
        super();
        this.state = {
            data: false,
        }
    }

    getData() {
        NetworkHelper
            .get(`${this.props.match.params.type}/${this.props.match.params.id}`)
            .then((response) => {
                this.setState({data: response})
            })
    }

    componentDidMount() {
       this.getData();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.url !== prevProps.match.url) {
            this.getData();
        }
    }

    isPage(data)
    {
        if (data.length > 0) {
            return  <div className={'title-page'}>
                <h1>{data[0].title}</h1>
                {ReactHtmlParser(data[0].description)}
            </div>

        } else {
            return <NotFound/>
        }
    }

    render() {
        return (
            <div className={'block-page'}>
                {
                    this.state.data ?
                       <div>{this.isPage(this.state.data)}</div>
                        :
                        <SpinnerLoad />
                }
            </div>

        )
    }
}

export default Page;
