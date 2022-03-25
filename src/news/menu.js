import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroPadding:{
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

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="lg">
            <Typography component="h1" variant="h4" align="center" color="textPrimary" className={classes.heroPadding} gutterBottom>
              BREAKFAST AROUND MALAYSIA
            </Typography>


            <Container maxWidth="lg">

              <Grid container spacing={10}>
                <Grid item xs={6}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://www.tasteasianfood.com/wp-content/uploads/2019/11/Nasi-Lemak-featured-image.jpeg"

                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h8" align="justify" paragraph>
                    Etymology :-
                    nasi (“rice”) + lemak (“grease; fat”).
                    <br></br>
                    <br></br>Pronunciation :-
                    na.si lə.ma.
                    <br></br>
                    <br></br>Noun :-
                    nasi lemak.

                    <p>
                      This traditional favourite offers sambal, ikan bilis (anchovies), peanuts and boiled egg. This is the most traditional version. Nasi lemak stalls can be found serving them with fried egg, sambal kerang (cockles) - a local favourite, sambal squids, sambal fish, chicken or chicken/beef rendang, squid fritters or even fried chicken or fish.
                      The rice is served on banana leaves, so it smells naturally fragrant when eaten.
                    </p>
                  </Typography>
                </Grid>


                <Grid item xs={6}>
                  <Typography variant="h8" align="justify" paragraph>
                    Etymology :-
                    roti (“bread”) + canai (“to stretch or push something pliable or elastic”).
                    <br></br>
                    <br></br>Pronunciation :-
                    ro.ti ca.nai.
                    <br></br>
                    <br></br>Noun :-
                    roti canai.

                    <p>
                      Roti canai is made from dough which is usually composed of fat (usually ghee), flour and water.
                      The dough is repeatedly kneaded, flattened, oiled, and folded before proofing, creating layers. The dough ball is then flattened, spread out until paper thin, and gathered into a long rope-like mass.
                      This "rope" is then wound into a knot or spiral and flattened, so that it consists of thin flakes of dough when cooked.
                    </p>
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://www.theflavorbender.com/wp-content/uploads/2021/09/Roti-Canai-6501-2.jpg"

                  />
                </Grid>

                <Grid item xs={6}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://www.foodadvisor.my/attachments/2ba3a2b22d2e7769c104917b0d7e2ab685a27f86/store/fill/800/500/c66e1302133665187cf963de84b2f692ce7091b924cbbf98f340cbaabfc2/featured_image.jpg"

                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h8" align="justify" paragraph>
                    Etymology :-
                    "Gratitude", or 點點心意; diǎn diǎn xīnyì, later shortened to 點心 diǎn xīn
                    <br></br>
                    <br></br>Pronunciation :-
                    dim.sum (Cantonese pronunciation)
                    <br></br>
                    <br></br>Noun :-
                    dimsum.

                    <p>
                      There are over one thousand dim sum dishes available, which are usually eaten as breakfast or brunch
                      Cantonese dim sum has a very broad range of flavors, textures, cooking styles, and ingredients,
                      and can be classified into regular items, seasonal offerings, weekly specials, banquet dishes, holiday dishes, house signature dishes,
                      travel-friendly, as well as breakfast or lunch foods and late night snacks.
                    </p>
                  </Typography>
                </Grid>

                <Grid item xs={6}>
                  <Typography variant="h8" align="justify" paragraph>
                    Etymology :-
                    Kuih (Jawi: کؤيه  plurar: kuih-muih کؤيه-مؤيه)
                    <br></br>
                    <br></br>Pronunciation :-
                    ku.ih mu.ih.
                    <br></br>
                    <br></br>Noun :-
                    kuih muih.

                    <p>
                      Most of the local kuih are steamed, baked and even grilled and made from local ingredients such as tapioca, glutinous rice,
                      rice flour, cornstarch, plain flour, gula Melaka (palm sugar), and natural colourings such as from the pea flower.
                      Local kuih is still very much a part of the diet of a typical Malaysian as they can still be found at roadside stalls, in wet markets,
                      in some modernised cafes, at some restaurants and even coffee shops.
                    </p>
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://i0.wp.com/iamlejen.com/wp-content/uploads/2020/05/Butterkicap-Kuih-Muih-1024x596-1.jpg?fit=1000%2C582&ssl=1"

                  />
                </Grid>


              </Grid>
            </Container>

          </Container>
        </div>
      </main>

    </React.Fragment>
  );
}