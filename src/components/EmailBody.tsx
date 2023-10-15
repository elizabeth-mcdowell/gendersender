import React, { useState } from 'react';

const EmailForm: React.FC = () => {
  const [recipient, setRecipient] = useState('');
  const [cc, setCc] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSendEmail = () => {
    // Logic for sending the email
  };

  return (
    <div style={{ height: '66vh', display: 'flex', flexDirection: 'column' }}>
      <h1>Send an Email</h1>
      <form style={{ flex: 1 }}>
        <button 
          type="button"
          onClick={handleSendEmail}
          style={{ backgroundColor: 'lightcoral', color: 'white', margin: "5px"}}
        >
          Send Email
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
      </form>
    </div>
  );
};

export default EmailForm;
