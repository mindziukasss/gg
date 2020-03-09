import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

const Home = () => {

    const linkPage = 'page/';

    return (
        <Container maxWidth="md" style={{ minHeight: 'calc(100vh - 160px)'}}>
            <Grid container spacing={4} className={'grid'}>
                <Grid item xs={12} sm={12} md={4} lg={4} >
                    <Card className={'card-paper'}>
                        <CardActionArea href={ linkPage + 'apie-mus'}>
                            <CardMedia
                                className={'box'}
                            >Apie mus</CardMedia>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={8} lg={8} >
                    <Card className={'card'}>
                        <CardActionArea href={ linkPage + 'galerija'}>
                            <CardMedia
                                className={'box-image'}
                                image="/gamybos-grupe-galerija.jpg"
                            >Galerija</CardMedia>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={8} lg={8} >
                    <Card className={'card'}>
                        <CardActionArea href={ linkPage + 'kontaktai'}>
                            <CardMedia
                                className={'box-image'}
                                image="/gamybos-grupe-baldai.jpg"
                            >Kontaktai</CardMedia>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} >
                    <Card className={'card-paper'}>
                        <CardActionArea href={ linkPage + 'partneriai'}>
                            <CardMedia
                                className={'box'}
                            >Partneriai</CardMedia>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Home;