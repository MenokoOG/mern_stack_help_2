import React, { useContext } from 'react';
import { UserContext } from '../context/userProvider';
import Button from './Button';
import ToggleableButton from './ToggleableButton'; 
import NotesButton from './NotesButton';
import webmaster from "../assets/web_developer_of_universe.png"
import Notes from './Notes'





function Profile() {
    const { user } = useContext(UserContext);
    

    // Check if user is null or undefined
    if (!user) {
        return (
            <div>
                Loading...
            </div>
        );
    }

    // Destructure the username property separately
    const { username } = user;
    return (
        <>
      <main>
        <section className="container">
         <h1>Hello Lord Supreme Developer of the Universe {username}!</h1>
                <img src={webmaster} alt="image of steam punk web developer" /> 
          <section className="intro">
            <p>MERN Stack Helper is a web application designed to provide comprehensive information and guidance on utilizing the MERN stack technologies - MongoDB, Express.js, React.js, and Node.js. The application consists of multiple pages, each focusing on a specific technology within the MERN stack.</p>
          </section>
          <section className="buttons">
            <Button text="M" linkTo="/m-page" />
            <Button text="E" linkTo="/e-page" />
            <Button text="R" linkTo="/r-page" />
            <Button text="N" linkTo="/n-page" />
            <ToggleableButton buttonText="Developer Notes" initialState={false}>
              <NotesButton notesComponent={<Notes />} />
            </ToggleableButton>
          </section>
        </section>
      </main>
    </>



    );
}

export default Profile;
