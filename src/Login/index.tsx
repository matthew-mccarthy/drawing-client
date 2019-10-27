import React, { useState } from 'react';
import axios from 'axios';
import { Button, TextField } from '@material-ui/core';

import './Login.css';
import { RouteComponentProps } from 'react-router-dom';

const Login: React.FC<RouteComponentProps> = (props) => {
    const [username, setUsername] = useState('');

    const submit = (username: string) => {
        axios.post('/api/login', { username }).then(
            () => props.history.push('/')
        );
    }

    return (
        <div className='Login'>
            <div className='LoginContents'>
                <TextField
                    label="Username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    margin="normal"
                    variant="outlined" />
                <Button variant="contained" color="primary" onClick={() => submit(username)}>
                    Login
                </Button>
            </div>
        </div>
    );
}

export default Login;