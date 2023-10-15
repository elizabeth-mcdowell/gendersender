import React, { useState } from 'react';
import { Grid, Button, TextField, InputAdornment } from '@mui/material'; // Import the Grid, Button, and InputAdornment components
import { IconButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Tooltip, Fab, Accordion, AccordionDetails, AccordionSummary, Checkbox, FormControlLabel, FormGroup, Input, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import Box from '@mui/material/Box';
// import Logo from "../assets/artifindlogo.png";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useNavigate } from 'react-router-dom';
import NavigationHeader from './Header';
import RaisaImage from '../assets/raisa.png';
import LuisaImage from '../assets/luisa.png';
import LizImage from '../assets/liz.png';

import firstImage from '../assets/first.png';
import aImage from '../assets/a.png';
import bImage from '../assets/b.png';
import cImage from '../assets/c.png';
import dImage from '../assets/d.png';
import eImage from '../assets/e.png';
import bestiesImage from '../assets/besties.png';
import staffImage from '../assets/staff.png';
import teamImage from '../assets/team.png';
const AboutUsPage: React.FC = () => {
    const [forms, setForms] = useState([
        { id: 1, initialSearch: 'Initial value for Form 1', initialTime: 'Time 1' },
      ]);
    const [timeCycle, setTimeCycle] = useState('');
    const navigate = useNavigate();
    const handleNavigation = (path: string) => {
        navigate(path); // Use the navigate function to go to the specified path
      };
    return (
      <div>
      <>
        <h1 style={{ marginTop: '20px' }}>
          Meet the Programmers
          </h1>
      <Grid container spacing={3}> 
        <Grid item xs={12} sm={6} md={4}>
        <img src={RaisaImage} alt="Raisa" style={{ width: '200px', height: '200px' }} />
          <Paper elevation={3}>
            <Typography variant="h5">Raisa</Typography>
            <Typography>
              Raisa is a 3rd year Computer Science and Math major passionate about equality in STEM.
              She is currently on Co-op at TJX where she sometimes struggles to write the perfect email
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3}>
          <img src={LuisaImage} alt="Luisa" style={{ width: '200px', height: '200px' }} />
            <Typography variant="h5">Luisa</Typography>
            <Typography>
              Luisa is a 2nd year Computer Science and Math major currently working on bullying/prompting
              Large Language Models to say the right thing, whether recreationally or for research.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3}>
          <img src={LizImage} alt="Liz" style={{ width: '200px', height: '200px' }} />
            <Typography variant="h5">Liz</Typography>
            <Typography>
              Liz is a 3rd year Computer Science Major with a concentration in Human Centered Computing with a minor in Theatre and is very into making sure
              that technology is usable because other than programming she is very bad at it.
            </Typography>
          </Paper>
        </Grid>
      </Grid></>
      <hr style={{ width: '100%', border: 'none', borderBottom: '1px solid #000' }} />

      <h2 style = {{marginTop: '20px'}}>
        Some fun moments from the Hackathon!
      </h2>


      
      
      
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
  <figure style={{ flex: '0 0 calc(50% - 20px)', margin: '10px' }}>
    <img src={firstImage} alt="first" style={{ width: '100%', height: 'auto' }} />
    <figcaption>Our group trying to get it to work</figcaption>
  </figure>
  <figure style={{ flex: '0 0 calc(25% - 20px)', margin: '10px' }}>
    <img src={aImage} alt="a" style={{ width: '100%', height: 'auto' }} />
    <figcaption>The front and back end aren't connecting!!!.</figcaption>
  </figure>
  <figure style={{ flex: '0 0 calc(25% - 20px)', margin: '10px' }}>
    <img src={bImage} alt="b" style={{ width: '100%', height: 'auto' }} />
    <figcaption>Luisa rethinks life choices as code passes tests but then doesn't function.</figcaption>
  </figure>
  <figure style={{ flex: '0 0 calc(25% - 20px)', margin: '10px' }}>
    <img src={cImage} alt="c" style={{ width: '100%', height: 'auto' }} />
    <figcaption>Raisa wonders why Liz is taking a photo of her like she didn't fix the same code 4 times because Liz kept forgetting to push.</figcaption>
  </figure>
  <figure style={{ flex: '0 0 calc(25% - 20px)', margin: '10px' }}>
    <img src={dImage} alt="d" style={{ width: '100%', height: 'auto' }} />
    <figcaption>Liz starts pushing code every 3 minutes to make up for losing the information for header 4 times.</figcaption>
  </figure>
  <figure style={{ flex: '0 0 calc(25% - 20px)', margin: '10px' }}>
    <img src={eImage} alt="e" style={{ width: '100%', height: 'auto' }} />
    <figcaption>Some guests come in to support us and offer their sound advice ("good luck").</figcaption>
  </figure>
  <figure style={{ flex: '0 0 calc(40% - 20px)', margin: '10px' }}>
    <img src={bestiesImage} alt="besties" style={{ width: '100%', height: 'auto' }} />
    <figcaption>Never back down never what?.</figcaption>
  </figure>
  <figure style={{ flex: '0 0 calc(50% - 20px)', margin: '10px' }}>
    <img src={staffImage} alt="staff" style={{ width: '100%', height: 'auto' }} />
    <figcaption>Getting to meet the amazing staff (and a lot of free merch)!.</figcaption>
  </figure>
  <figure style={{ flex: '0 0 calc(40% - 20px)', margin: '10px' }}>
    <img src={teamImage} alt="other team" style={{ width: '100%', height: 'auto' }} />
    <figcaption>Talking to some of the other teams who are coming by!</figcaption>
  </figure>
</div>

      
     

      </div>
      );
    
}

export default AboutUsPage;