import React, { useState } from 'react';
import { Button, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MiniForm from './MiniForm';

const QuestionsPage: React.FC = () => {
  const [forms, setForms] = useState([]);
  const [timeCycle, setTimeCycle] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(false); // State to manage the form's visibility

  const handleFormToggle = () => {
    setIsFormVisible(!isFormVisible); // Toggle the visibility of the form
  };

  return (
    <div style={{ width: '100% '}}>
    

      <h1 style={{ marginTop: '30px' }}>Commonly Asked Questions</h1>

    

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
    
  



      {/* Button to toggle the form visibility */}
      <Button
        variant="contained"
        color="primary"
        onClick={handleFormToggle}
        style={{ width: '100%' }} // Adjust the width as needed
>
  I have a question that wasn't asked!
</Button>

      {/* Display the form if isFormVisible is true */}
      {isFormVisible && (
        <div style={{ width: '100%' }}>
          {/* Your form component here */}
          <MiniForm />
        </div>
      )}
    </div>

    
  );
};

export default QuestionsPage;
