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
        <NavigationHeader /><>
        <h1 style={{ marginTop: '70px' }}>
          Meet the Programmers
          </h1>
      <Grid container spacing={3}> 
        <Grid item xs={12} sm={6} md={4}>
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
            <Typography variant="h5">Luisa</Typography>
            <Typography>
              Luisa is a 2nd year Computer Science and Math major currently working on bullying/prompting
              Large Language Models to say the right thing, whether recreationally or for research.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3}>
            <Typography variant="h5">Liz</Typography>
            <Typography>
              Liz is a 3rd year Computer Science Major with a minor in Theatre and is very into making sure
              that technology is usable because other than programming she is very bad at it.
            </Typography>
          </Paper>
        </Grid>
      </Grid></>
      </div>
      );
    
}

export default AboutUsPage;