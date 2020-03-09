import React, {Component} from 'react';
import ReactHtmlParser from 'react-html-parser';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';

const BASE_URl = 'http://127.0.0.1:8000/api/page/';

class Page extends Component {

    constructor() {
        super();
        this.state={data:false
        }
    }

    componentDidMount() {
        fetch(BASE_URl + this.props.match.params.id, {
            method: 'GET',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json',
            }
        }).then((page) => {
            page.json().then((resp) => {
                this.setState({data:resp})
            })
        })
    }

    render() {
        const data = this.state.data;

        return (

            <div style={{minHeight: 'calc(100vh - 160px)'}}>
                {
                    data ?

                        <div style={{textAlign: 'center'}}>
                            <h1>{data[0].title}</h1>
                            {ReactHtmlParser(data[0].description)}
                        </div>
                        :
                        <div style={{
                            position: 'absolute',
                            left: '50%',
                            top: '50%',
                            transform: 'translate(-50%, -50%)'
                        }}>
                            <CircularProgress style=
                                                  {{
                                                      color: "#cfd8dc",
                                                      width: '80px',
                                                      height: '80px'
                                                  }}
                                              disableShrink/>
                        </div>
                }
            </div>

        )
    }
}

export default Page;
