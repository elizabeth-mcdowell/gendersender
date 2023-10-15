import React, { useState } from 'react';
import axios from 'axios';

const EmailForm: React.FC = () => {
  const [recipient, setRecipient] = useState('');
  const [cc, setCc] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  var result;

  const handleSendDirect = () => {
    
    axios.post('http://localhost:8000/data', {
    prompt: message,
    directify: 'True'
    })
    .then(response => {
        console.log(response.data);
        result = response.data
    })
    .catch(error => {
        console.error('Error with POST request:', error);
    });
      
  };

  const handleSendPolite = () => {
    
    axios.post('http://localhost:8000/data', {
      prompt: message,
      directify: 'False'
      })
      .then(response => {
          console.log(response.data);
          result = response.data
      })
      .catch(error => {
          console.error('Error with POST request:', error);
      });
      
  };

  return (
    <div style={{ height: '66vh', display: 'flex', flexDirection: 'column' }}>
      
      <form style={{ flex: 1 }}>

        <button 
          type="button"
          style={{ backgroundColor: 'lightcoral', color: 'white', margin: "5px"}}
        >
          Send Email
        </button>
        <button 
          type="button"
          onClick={handleSendPolite}
          style={{ backgroundColor: 'lightcoral', color: 'white', margin: "5px"}}
        >
          Make Polite
        </button>
        <button 
          type="button"
          onClick={handleSendDirect}
          style={{ backgroundColor: 'lightcoral', color: 'white', margin: "5px"}}
        >
          Make Direct
        </button>
        <div>
          <label>To:</label>
          <input style={{margin:"5px", width: "95%"}}
            type="text"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
          />
        </div>
        <div>
          <label>CC:</label>
          <input style={{margin:"5px", width: "95%"}}
            type="text"
            value={cc}
            onChange={(e) => setCc(e.target.value)}
          />
        </div>
        <div>
         
          <input style={{margin:"5px", width: "98%"}}
            type="text"
            placeholder="Add a subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div>
          <textarea style={{margin:"5px", width: "98%", height: "200px"}}
            placeholder="Type / to insert files and more"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <input
        type="text"
        value={result}
        readOnly // This attribute makes the input read-only
    />
      </form>
    </div>
  );
};

export default EmailForm;
