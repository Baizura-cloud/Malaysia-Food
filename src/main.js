import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Header from './ui/header';
import StickyFooter from './ui/footer';
import Album from './news/menu';
import Pricing from './news/ordernow';
import ArtNews from './news/contact';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}


function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Malaysian Food" />
        <main>
          <Tabs
            variant="fullWidth"
            value={value}
            onChange={handleChange}
            aria-label="nav tabs example"
          >
            <LinkTab label="Menu"  {...a11yProps(0)} />
            <LinkTab label="Order Now"  {...a11yProps(1)} />
            <LinkTab label="Contact us"  {...a11yProps(2)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <Album />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Pricing/>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <ArtNews />
          </TabPanel>

        </main>
        <StickyFooter />
      </Container>

    </React.Fragment>
  );

}
