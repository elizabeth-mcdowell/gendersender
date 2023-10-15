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
import MiniForm from './MiniForm';

const QuestionsPage: React.FC = () => {
    const [forms, setForms] = useState([
        { id: 1, initialSearch: 'Initial value for Form 1', initialTime: 'Time 1' },
      ]);
    const [timeCycle, setTimeCycle] = useState('');
    return (
      <div>
      <MiniForm />
     <h1 style={{ marginTop: '30px' }}>
          Commonly Asked Questions
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
          (whether or not it is on purpose or not) -- more stated on the why page.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h6">How does this tool handle privacy concerns when processing emails?</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Our tool does not save any information that it reads after it has processed a response. We generate a new 
          response each time and do not store or sell any information. 
        </Typography>
      </AccordionDetails>
    </Accordion>

    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h6">How does the tool decide what changes to make to an email?</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          The tool decides  what to change using an AI that has analyzed the majority of emails sent by 
          men in positions of power. We know that not all changes might want to be made which is why it is simply a suggestion
          on how to change the emails in some way. 
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h6">Does using this tool affect the way I'm perceived in a professional setting?</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Our hope is that this will help women not only be percieved more positively in the workforce and in a professional setting
          but also see this reflect in the opportunities they are given. 
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h6">Does the tool work automatically or require manual adjustments for each email?</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
         Our tool does not automatically run or make changes to the email. If you want access to it then you simply click 
         the button then you will see the suggested changes. From there it is up to the user to keep or change them. 
        </Typography>
      </AccordionDetails>
    </Accordion>
    </div>
      );
    
}

export default QuestionsPage;