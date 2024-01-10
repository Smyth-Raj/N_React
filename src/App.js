// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [name, setName] = useState('');
    const [greeting, setGreeting] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Submitting data:', { name }); // Add this log

        // Make API request with user's name
        axios.post('/api/greet', { name })
            .then(response => {
                console.log('API Response:', response.data); // Add this log
                setGreeting(response.data.message);
            })
            .catch(error => console.error('Error fetching data:', error));
    };

    return (
        <div className="App">
            <header className="App-header">
                <form onSubmit={handleSubmit}>
                    <label>
                        Enter your name:
                        <br></br>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </label>
                    <button type="submit">Submit</button>
                </form>
                {greeting && <p>{greeting}</p>}
            </header>
        </div>
    );
}

export default App;
