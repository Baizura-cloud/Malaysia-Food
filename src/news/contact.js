import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import AddLocationIcon from '@mui/icons-material/AddLocation';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroPadding: {
    padding: theme.spacing(0, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2];

export default function ArtNews() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="lg">
            <Typography component="h1" variant="h4" align="center" color="textPrimary" className={classes.heroPadding} gutterBottom>
              CONTACT US
            </Typography>

            <Container maxWidth="lg">
              <Grid container spacing={10}>
                <Grid Item xs={7}>
                  <AddLocationIcon />
                </Grid>

                <Grid Item xs={5}>
                  <p>
                  Rather than worrying about switching offices every couple years, you can instead stay in the same location and grow-up 
                  from your shared coworking space to an office that takes up an entire floor.
                  </p>
                  <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          id="name"
                          label="Name"
                          name="name"
                          autoComplete="name"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          id="email"
                          label="Email Address"
                          name="email"
                          autoComplete="email"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          id="message"
                          label="Message"
                          required
                          multiline
                          fullWidth
                          rows={4}
                          variant="outlined"
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          color="primary"
                          className={classes.submit}
                        >
                          Submit
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </Grid>

              </Grid>


            </Container>

          </Container>
        </div>
      </main>

    </React.Fragment>
  );
}