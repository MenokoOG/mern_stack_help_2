import React, { useState } from 'react';
import Notes from './Notes';
import NotesButton from './NotesButton'; 

import Button from './Button';

import ToggleableButton from './ToggleableButton';

const MPage = () => {
 
  return (
    <>
      
      <main>
        <section className="container">
          <h1>MongoDB and Mongoose</h1>
          <div>
            
            <p>
              MongoDB is a NoSQL database, and Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js.
            </p>
            <h3>Installation</h3>
            <p>To install MongoDB, follow the instructions on the <a href="https://docs.mongodb.com/manual/installation/" target="_blank">official MongoDB documentation</a>.</p>
            <p>To install Mongoose, use npm or yarn:</p>
            <pre><code>{`npm install mongoose`}</code></pre>
            <h3>Usage</h3>
            <p>Import Mongoose in your Node.js application:</p>
            <pre><code>{`const mongoose = require('mongoose');`}</code></pre>
            <p>Then connect to MongoDB using Mongoose:</p>
            <pre><code>{`mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));`}</code></pre>
            <p>For more information, refer to the <a href="https://mongoosejs.com/docs/" target="_blank">Mongoose documentation</a>.</p>
            <h2>V School Specific Notes:</h2>
          </div>
          <Button text="Return to MERN" linkTo="/" />
          <ToggleableButton buttonText="Developer Notes" initialState={false}>
              <NotesButton notesComponent={<Notes />} />
            </ToggleableButton>
          
          
        </section>
        
      </main>
    </>
  );
}

export default MPage;
