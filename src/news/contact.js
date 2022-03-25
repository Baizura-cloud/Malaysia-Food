import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Divider from '@material-ui/core/Divider';
import MailIcon from '@mui/icons-material/Mail';
import Album from './team';

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
  heroUpPadding: {
    padding: theme.spacing(8, 0, 0),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
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
                <Grid item xs={7}>
                  <Album />
                </Grid>

                <Grid item xs={5}>
                  <p>
                    Rather than worrying about prices for each meal or event, you can instead contact us and
                    have further discussion and lock in your booking quicker.
                  </p>
                  <form noValidate>
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

              <Grid container spacing={2} className={classes.heroPadding}>
                <Grid item xs={12}>
                  <Typography component="h1" variant="h6" align="center" color="textPrimary" className={classes.heroUpPadding} gutterBottom>
                    Contact Details
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography>
                    Keep track of what's happening with your applications, booking, and our newest menu item.
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={5}>
                <Grid item xs={4}>
                  <AddLocationIcon />
                  <Typography>
                    12 PSN Buntong Jaya 17 Taman Bina Ria 30100 Perak Malaysia
                  </Typography>
                </Grid>
                <Divider orientation="vertical" flexItem style={{marginRight:"-1px"}}/>
                <Grid item xs={4}>
                  <LocalPhoneIcon />
                  <Typography>
                    +39 659-657-0133
                  </Typography>
                </Grid>
                <Divider orientation="vertical" flexItem style={{marginRight:"-1px"}}/>
                <Grid item xs={4}>
                  <MailIcon />
                  <Typography>
                    hi@maccarianagency.com
                  </Typography>
                </Grid>
              </Grid>

            </Container>
          </Container>
        </div>
      </main>

    </React.Fragment>
  );
}