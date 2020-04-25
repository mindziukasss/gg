import React, {Component} from 'react';
import {NetworkHelper} from "../Service/NetworkHelper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Container from "@material-ui/core/Container";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'
import SpinnerLoad from "../UI/SpinnerLoad";

const linkMedia = 'http://127.0.0.1:8000/uploads/galleries/';

class GalleryItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            bigImage: null,
            clickImage: null,
            photoIndex: 0,
            isOpen: false,
        }

    }

    getData() {
        NetworkHelper
            .get(`gallery/${this.props.match.params.id}`)
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

    handleClick = (event, clickImage) => {
        let images = [];
        event.map((m) => {
                images.push(linkMedia + m.fileName,);
            }
        )

       this.setState({
           bigImage: images,
           photoIndex: clickImage
       })

    };

    handleClose = () => {
        this.setState({ bigImage: null });
    };


    showCard = () => (

        this.state.data.map((gallery, i) => (
                gallery.gallery.media.map((m, i) => {
                    return <Grid key={i} item xs={12} sm={12} md={4} lg={4}>
                        <Card className='card-galleries'>
                            <CardActionArea href={''} onClick={() => this.handleClick(gallery.gallery.media, i)}>
                                <CardMedia id={i} className='box-gallery' image={linkMedia + m.fileName}></CardMedia>
                            </CardActionArea>
                        </Card>
                    </Grid>

                })
            )

        )
    );

    render() {
        const data = this.state.data;

        const bigImage = this.state.bigImage ? this.state.bigImage : null;
        const galleryTitle = this.state.data[0] ? this.state.data[0].gallery.title : null;
        const { photoIndex, isOpen } = this.state;
        return (
            <div className='block-page'>
                {
                    data ?
                        <Container maxWidth="md" style={{ minHeight: 'calc(100vh - 160px)'}}>
                            <h1 className='title-page'>{galleryTitle}</h1>
                            {
                                !bigImage
                                ? <Grid container spacing={4} className='grid'>{this.showCard()}</Grid>

                                :
                                    <Lightbox reactModalStyle={{ zIndex: '1100'}}
                                        mainSrc={bigImage[(photoIndex)]}
                                        nextSrc={bigImage[(photoIndex + 1) % bigImage.length]}
                                        prevSrc={bigImage[(photoIndex + bigImage.length - 1) % bigImage.length]}
                                        onCloseRequest={() => this.handleClose({ isOpen: false })}
                                        onMovePrevRequest={() =>
                                            this.setState({
                                                photoIndex: (photoIndex + bigImage.length - 1) % bigImage.length,
                                            })
                                        }
                                        onMoveNextRequest={() =>
                                            this.setState({
                                                photoIndex: (photoIndex + 1) % bigImage.length,
                                            })
                                        }
                                    />
                            }
                        </Container>


                        :
                        <SpinnerLoad/>
                }
            </div>
        )
    }
}

export default GalleryItem;