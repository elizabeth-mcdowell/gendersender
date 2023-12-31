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

const HomePage: React.FC = () => {
  const [forms, setForms] = useState([
    { id: 1, initialSearch: 'Initial value for Form 1', initialTime: 'Time 1' },
  ]);
  const [timeCycle, setTimeCycle] = useState('');
  const navigate = useNavigate();
  const handleNavigation = (path: string) => {
    navigate(path); // Use the navigate function to go to the specified path
  };

  return (
    <div style={{margin: "40px", border: '1px solid #000000', padding: "20px"}}>
      <div className="Logo" style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
      </div>
      
      <h1>
        Our Project
      </h1>
      <p>
        Our project is creating a piece of software that will analyze text written for an email. From there, we can either make the 
        email <b>"more direct"</b> or <b>"more polite"</b>. The three of us noticed that gendered difference in emails can often lead to a difference in how people perceive the sender, particularly if the sender is a woman. Using a more polite and friendly tone can lead to the sender being perceived as less confident whereas taking a more direct and authoritative tone can lead to the sender being perceived as bossy and brash. Our goal is to help email writers find <b>the right tone</b>, whatever that tone may be--whether it is more friendly/approachable or more straightforward. 
      </p>
      <h1> Our Tech Stack
          </h1>
      <div>
        
        <div className="tech-stack">
          <p>
            We built out backend in Python, and our language system is powered by GPT 3.5 Turbo, connected to our application through the OpenAI API. Our backend is constructed like a ChatModel and is easily usable through simple prompting. We also provide the option to perform few shot prompting given a specified directory containing appropriated formatted yaml files. We connect our backend to our frontend using FastAPI. 
          </p>
          <p>
            Our frontend is built with React with Typescript, HTML, CSS and pictures. All of our webpages are written in tsk files with their own individual CSS pages for styling. We have a header across all five pages to allow for easy navigation, and provide an interactive window in the Edit page to allow users to try out our application.
          </p>
        </div>
        <div className="contribution">
          <p>
            Luisa: I built the backend of our project. This consisted of the prompt engineering, doing few shot prompting with the OpenAI API, connecting to the frontend using FastAPI, and writing the ChatModel class to encapsulate all the backend functionalities of our code. 
          </p>
          <p>
          Raisa + Liz: We worked on the front end of the project, we planned out the UI of the site, planning out the different pages and styling everything to make it legible for our users. We worked with Luisa to connect the backend to the frontend so that the user can have a good experience using this application. 
            </p>
        </div>
      </div>
    </div>

      );
    
}

      export default HomePage;