import React, {Component} from 'react';
import {NetworkHelper} from "../Service/NetworkHelper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Container from "@material-ui/core/Container"
import './style/gallery.scss'
import SpinnerLoad from "../UI/SpinnerLoad";
import BackLink from "../UI/BackLink";
import NotFound from "../UI/NotFound";

const linkMedia = 'http://127.0.0.1:8000/uploads/galleries/';

class Gallery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: false,
            holder: [],
            showElement: 0
        }
    }

    getData() {
        NetworkHelper
            .get(`${this.props.match.params.gallery}`)
            .then((response) => {
                this.setState({data: response, holder: response})
            })
    }

    componentDidMount() {
        this.getData();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.showElement !== prevState.showElement) {
            this.getData();
        }
    }

    showCard = (j) => (
        this.state.data.map((gallery, i) => {
                return this.card(i,j, gallery);
            }
        )
    );

    card = (i, j, gallery) => {
        if (i < this.state.showElement) {
            return <Grid key={i} item xs={12} sm={12} md={4} lg={4}>
                <Card className='card-galleries gallery'>
                    <CardActionArea href={this.props.match.params.gallery + '/' + gallery.subMenu.slug}>
                        <CardMedia className='box-gallery' image={linkMedia + gallery.gallery.media[0].fileName}>
                            {gallery.gallery.title}
                        </CardMedia>
                    </CardActionArea>
                </Card>
            </Grid>;
        }

        if(i === this.state.showElement){
            setTimeout(() => {
                this.setState({
                    data: this.state.holder,
                    holder: this.state.holder,
                    showElement: ++this.state.showElement
                });
            }, 500);
        }
    };


    isGalleries(data)
    {
        if (data.length > 0) {
            const showLInk = data.length > 0 ? true : false;
            return  <Container maxWidth="md" style={{minHeight: 'calc(100vh - 160px)'}}>
                <SpinnerLoad data={true}/>
                <h1 className='title-page'>Galerija</h1>
                <Grid container spacing={4} className='grid'>
                    {this.showCard(this.state.showElement)}
                </Grid>
                <BackLink showLink={showLInk}/>
            </Container>

        } else {
            return <NotFound/>
        }
    }

    render() {
        return (
            <div className='block-page'>
                {
                    this.state.data ?
                        <div>{this.isGalleries(this.state.data)}</div>
                        :
                        <SpinnerLoad/>
                }
            </div>

        )
    }

}

export default Gallery;