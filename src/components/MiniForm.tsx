import React, { useState, FormEvent, ChangeEvent } from 'react';
import './MiniForm.css';
const MiniForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [questions, setQuestions] = useState('');

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleQuestionsChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setQuestions(e.target.value);
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Add your logic to handle the form submission, e.g., send the data to a server or perform some action.
    // You can access 'email' and 'questions' state values here.
    console.log('Email:', email);
    console.log('Questions:', questions);
  };

  return (
    <div style={{ width: '100%' }}> {/* Set the width to 100% */}
      <h2>Mini Form</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label htmlFor="questions">Questions:</label>
          <textarea
            id="questions"
            value={questions}
            onChange={handleQuestionsChange}
            required
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default MiniForm;
