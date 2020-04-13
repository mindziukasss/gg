import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import {NetworkHelper} from "../Service/NetworkHelper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Container from "@material-ui/core/Container";

import './style/gallery.scss'

const linkMedia = 'http://127.0.0.1:8000/uploads/galleries/';

class Gallery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }

    getData() {
        NetworkHelper
            .get(`${this.props.match.params.gallery}`)
            .then((response) => {
                this.setState({data: response})
            })
    }

    componentDidMount() {
        this.getData();
    }

    showCard = () => (
        this.state.data.map((gallery, i) => {
                return <Grid key={i} item xs={12} sm={12} md={4} lg={4}>
                    <Card className='card-paper'>
                        <CardActionArea href={''}>
                            <CardMedia
                                className='box-gallery'
                                image={linkMedia + gallery.gallery.media[0].fileName}
                            >{gallery.gallery.title}</CardMedia>
                        </CardActionArea>
                    </Card>
                </Grid>
            }
        ));

    render() {
        const data = this.state.data;
        return (
            <div className='block-page'>
                {
                    data ?
                        <Container maxWidth="md" style={{ minHeight: 'calc(100vh - 160px)'}}>
                            <h1 className='title-page'>Galerija</h1>
                            <Grid container spacing={4} className='grid'>
                                {this.showCard()}
                            </Grid>
                        </Container>
                        :
                        <div className='circular-page'>
                            <CircularProgress className='circular-size' disableShrink/>
                        </div>
                }
            </div>

        )
    }

}

export default Gallery;