import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 10),
    },
    heroPadding: {
        padding: theme.spacing(0, 0, 6),
    },
    cardHeader: {
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    },
    cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing(2),
    },
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        },
    },
}));

const tiers = [
    {
        title: 'Individual',
        price: '10',
        description: ['2 different dishes', 'Free a hot drink', 'Neat plating with theme', 'Free delivery'],
        buttonText: 'Booking For a person',
        buttonVariant: 'outlined',
    },
    {
        title: 'Group of 5',
        subheader: 'Most popular',
        price: '120',
        description: [
            '5 different dishes',
            '5 varieties of Kuih-Muih',
            '5 varieties of Dimsum',
            '5 Free hot drink',
            'Free delivery',
        ],
        buttonText: 'Booking For a group',
        buttonVariant: 'contained',
    },
    {
        title: 'Group of 20',
        price: '350',
        description: [
            '10 different dishes',
            '20 varieties of Kuih-Muih',
            '20 varieties of Dimsum',
            '20 Free hot drink',
            'Free delivery',
        ],
        buttonText: 'Booking For a group',
        buttonVariant: 'outlined',
    },
];

export default function Pricing() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <div className={classes.heroContent}>
                <Container maxWidth="sm" component="main" className={classes.heroPadding} >
                    <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
                        PRICING
                    </Typography>
                    <Typography variant="h6" align="center" color="textSecondary" component="p">
                        Book a catering with us! With affordable pricing, you can serve multiple type of breakfast on your table.
                    </Typography>
                </Container>
                {/* End hero unit */}
                <Container maxWidth="md" component="main">
                    <Grid container spacing={10} alignItems="flex-end">
                        {tiers.map((tier) => (
                            // Enterprise card is full width at sm breakpoint
                            <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
                                <Card>
                                    <CardHeader
                                        title={tier.title}
                                        subheader={tier.subheader}
                                        titleTypographyProps={{ align: 'center' }}
                                        subheaderTypographyProps={{ align: 'center' }}
                                        action={tier.title === 'Pro' ? <StarIcon /> : null}
                                        className={classes.cardHeader}
                                    />
                                    <CardContent>
                                        <div className={classes.cardPricing}>
                                            <Typography component="h2" variant="h3" color="textPrimary">
                                                ${tier.price}
                                            </Typography>
                                            {/* <Typography variant="h6" color="textSecondary">
                                                /mo
                                            </Typography> */}
                                        </div>
                                        <ul>
                                            {tier.description.map((line) => (
                                                <Typography component="li" variant="subtitle1" align="center" key={line}>
                                                    {line}
                                                </Typography>
                                            ))}
                                        </ul>
                                    </CardContent>
                                    <CardActions>
                                        <Button fullWidth variant={tier.buttonVariant} color="primary">
                                            {tier.buttonText}
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </div>
        </React.Fragment>
    );
}