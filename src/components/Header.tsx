import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';

const NavigationHeader: React.FC = () => {
  return (
    //header
    <AppBar position="static" style={{backgroundColor: "pink"}}>
      <Toolbar>
        <Grid container spacing={2} justifyContent="space-around">
          <Grid item>
            <Link to="/">
              <Button variant="contained" style={{backgroundColor: "grey"}}>
                Home
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/ExamplePage">
              <Button variant="contained" style={{backgroundColor: "grey"}}>
                Project
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/AboutUsPage">
              <Button variant="contained" style={{backgroundColor: "grey"}}>
                About Us
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/WhyPage">
              <Button variant="contained" style={{backgroundColor: "grey"}}>
                Why
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/QuestionsPage">
              <Button variant="contained" style={{backgroundColor: "grey"}}>
                Questions
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationHeader;
