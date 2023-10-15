import React, { useState } from 'react';
import { Grid, Button, TextField, InputAdornment } from '@mui/material'; // Import the Grid, Button, and InputAdornment components
import { IconButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Tooltip, Fab, Accordion, AccordionDetails, AccordionSummary, Checkbox, FormControlLabel, FormGroup, Input, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import Box from '@mui/material/Box';
// import Logo from "../assets/artifindlogo.png";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import NavigationHeader from './Header';

const WhyPage: React.FC = () => {
    const [forms, setForms] = useState([
        { id: 1, initialSearch: 'Initial value for Form 1', initialTime: 'Time 1' },
      ]);
    const [timeCycle, setTimeCycle] = useState('');
    return (
        <div>
          <NavigationHeader />
          <div className="Logo" style={{ display: 'flex', justifyContent: 'center',  margin: '20px' }}>
            <a href="http://localhost:3000">
              <p>Let's go back home...take me home</p>
            </a>
          </div>
          <h2>Why Are We Doing This?</h2>
          <div className="Explanation">
            <p>Let's face it...writing emails is hard. Sometimes you have to write three different drafts of an email 
              before accepting that there's nothing else you can possibly do and you just send it. The worst part is, Sometimes
              you're so scared of coming across as too harsh, that you compensate with too many 
              exclamation points and phrases such as "sorry to bother you", "if it is okay with you", etc. etc. 
              Well, if you find yourself nodding along to some of this text, then don't worry. You're definitely not alone. 
            </p>

            <p>There was a study done in 2006 that analyzed 200 exclamation point usages posted to two discussion
              groups. What it found was that <b>73% of exclamations were used by females and only 27% were used by males</b>. 
              Tying into that, <b>70% of statements deemed "friendly" were made by females in contrast to 
              only 30% by males</b>. Not only that, but according to a 2012 study, women were shown to use emojis more 
              in emails in contrast to men. In fact, there's a stereotype regarding "emailing like a woman" in which 
              we're known to apologize more, be more agreebale, etc. So why is that? 
            </p>

            <p>There are a wide variety of reasons for why this may be but according to scholars, it could
              be because women are expected to balance being authoritative while also still putting on a 
              sweet, polite persona. Oxford lingust Deborah Cameron describes it as a "tricky negotiation of traditional 
              femininity...and confident leadership". Lean too much in one direction and you're not a strong leader, and lean 
              too much the other way, and you're a mean boss.  
              </p> 

              <p>Where do we come into this? Our program, GenderSender, serves to help make those polite emails
                and make them sound more authoritative without sacrificing any of the substance of the email and 
                without sounding brash or rude. Just put in an email draft, and we can make 
                it sound more direct. On the flip side, if you're worried about coming off as too harsh, we have 
                the capability to make your email sound more polite/friendly! We hope that our program can 
                help make the email writing process a little less intimidating so that we can focus more on 
                getting work done rather than stressing over that one email. 
              </p>

              <p>We are not saying that women need to change how they email people in the corporate side.
              In a perfect world without the Patriarchy, all emails would be respected. We do know however that
              with male coworkers, the typical way most women communicate is something that is looked down on
              (whether or not it is on purpose or not) and we beleive that's not fair. We're helping people communicate the 
              message they intend to, we're just helping communicate it in their intended tone.</p>

              <ul> Sources:
                <li><a href='https://academic.oup.com/jcmc/article/11/4/1012/4617714'>https://academic.oup.com/jcmc/article/11/4/1012/4617714</a></li>
                <li><a href='https://girlboss.com/blogs/read/women-using-exclamation-points'>https://girlboss.com/blogs/read/women-using-exclamation-points</a></li>
                <li><a href='https://www.glamourmagazine.co.uk/article/how-to-write-confident-emails'>https://www.glamourmagazine.co.uk/article/how-to-write-confident-emails</a></li>
                <li><a href='https://chief.com/articles/executive-email-speak'>https://chief.com/articles/executive-email-speak</a></li>
                <li><a href='https://www.vice.com/en/article/8xyb5v/how-to-write-professional-work-email-women'>https://www.vice.com/en/article/8xyb5v/how-to-write-professional-work-email-women</a></li>
              </ul>
          </div>
        </div>

      );
    
}

export default WhyPage;