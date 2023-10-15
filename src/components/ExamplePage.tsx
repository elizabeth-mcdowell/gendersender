import React, { useState } from 'react';
import { Grid, Button, TextField, InputAdornment } from '@mui/material'; // Import the Grid, Button, and InputAdornment components
import { IconButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Tooltip, Fab, Accordion, AccordionDetails, AccordionSummary, Checkbox, FormControlLabel, FormGroup, Input, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import sideemail from '../assets/sideemail.png';
import topemail from '../assets/topemail.png';
import NavigationHeader from './Header';
import EmailForm from './EmailBody';
import Results from './Results';

const ExamplePage: React.FC = () => {
  const [forms, setForms] = useState([
    { id: 1, initialSearch: 'Initial value for Form 1', initialTime: 'Time 1' },
  ]);
  const [timeCycle, setTimeCycle] = useState('');

  const axios = require('axios');
  var response;

 async function sendItem() {
    try {
        const item = {
            name: "Widget",
            description: "A fancy widget."
        };

        response = await axios.post('http://localhost:8000/items/', item);

        console.log(response.data);
    } catch (error) {
        console.error("Error making the request:", error);
    }
 }

sendItem();
  return (
    <div>
     
      <div className="container" style={{ display: 'flex', alignItems: 'flex-start', margin: '50px' }}>
        <div className="box1">
          <Box
            component="img"
            sx={{
              height: 100,
            }}
            alt="TopImage"
            src={topemail}
          />
        
        <div className="box2-and-email" style={{ display: 'flex'}}>
          <div className="box2" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
          <Box
            component="img"
            sx={{
              height: 500,
            }}
            alt="SideImage"
            src={sideemail}
          />
          </div>

          <div className="email-form" style={{ width: '100%', height: '500px', border: '1px solid #000000' }}>
              <EmailForm />
              
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ExamplePage;
