import React, { useState } from 'react';
import { Grid, Button, TextField, InputAdornment } from '@mui/material'; // Import the Grid, Button, and InputAdornment components
import { IconButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Tooltip, Fab, Accordion, AccordionDetails, AccordionSummary, Checkbox, FormControlLabel, FormGroup, Input, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import Box from '@mui/material/Box';
// import Logo from "../assets/artifindlogo.png";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NavigationHeader from './Header';

const QuestionsPage: React.FC = () => {
    const [forms, setForms] = useState([
        { id: 1, initialSearch: 'Initial value for Form 1', initialTime: 'Time 1' },
      ]);
    const [timeCycle, setTimeCycle] = useState('');
    return (
      <div>

     <NavigationHeader />
     <h1 style={{ marginTop: '70px' }}>
          Questions
          </h1>
      <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h6">Why should women change how they email?</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          We are not saying that women need to change how they email people in the corporate side.
          In a perfect world without the Patriarchy, all emails would be respected. We do know however that
          with male coworkers, the typical way most women communicate is something that is looked down on
          (whether or not it is on purpose or not) 
        </Typography>
      </AccordionDetails>
    </Accordion>
    </div>
      );
    
}

export default QuestionsPage;