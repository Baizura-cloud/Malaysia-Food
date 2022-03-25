import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '100%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
}));

const cards = [1, 2, 3];
const imageUrl = ["https://t4.ftcdn.net/jpg/02/13/79/33/360_F_213793387_Jy9VGwWWJD2Meogv70pj0gDe3hUWLpuU.jpg",
    "https://t3.ftcdn.net/jpg/02/43/12/40/360_F_243124072_6XpPAWH0VM911MjRBfqp4QQ5PKsvD6T9.jpg",
    "https://media.istockphoto.com/photos/business-woman-headshot-portrait-picture-id465479132?k=20&m=465479132&s=612x612&w=0&h=e-qaRVdnCe307hv5XkL8EIEToOnBZURchVWzaxyZa7Y="];
const imageName = ["Micheal Cam", "Suad Almiro", "Amirah Raja"]

export default function Album() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Typography component="h1" variant="h6" align="center" color="textPrimary" >
                Meet Our Chef
            </Typography>
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={2}>
                    {cards.map((card) => (
                        <Grid item key={card} xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={imageUrl[card - 1]}
                                    title="Image title"
                                />
                                <CardContent>
                                    <Typography  >
                                        {imageName[card - 1]}
                                    </Typography>
                                </CardContent>

                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </React.Fragment>
    );
}