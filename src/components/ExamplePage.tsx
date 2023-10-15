import React, { useState } from 'react';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import sideemail from '../assets/sideemail.png';
import topemail from '../assets/topemail.png';
import NavigationHeader from './Header';
import EmailBody from './EmailBody';

const ExamplePage: React.FC = () => {
  const [forms, setForms] = useState([
    { id: 1, initialSearch: 'Initial value for Form 1', initialTime: 'Time 1' },
  ]);
  const [timeCycle, setTimeCycle] = useState('');

  return (
    <div>
      <NavigationHeader />
      <div className="Logo" style={{ display: 'flex', justifyContent: 'left', margin: '20px' }}>
        <p>"Home Page"</p>
      </div>
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
        </div>
        <div className="box2" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <Box
            component="img"
            sx={{
              height: 500,
            }}
            alt="SideImage"
            src={sideemail}
          />
          <EmailBody />
        </div>
      </div>
    </div>
  );
};

export default ExamplePage;
