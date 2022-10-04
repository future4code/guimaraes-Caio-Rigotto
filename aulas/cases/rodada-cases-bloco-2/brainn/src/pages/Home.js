import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import GameSelector from '../components/GameSelector';
import BallCards from '../components/BallCards';

export default function Home() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="100sm"
                disableGutters>
                <Box sx={{
                    bgcolor: '#EFEFEF',
                    height: '100vh',
                    display: 'flex'
                }}>
                    <GameSelector />
                    <BallCards />
                </Box>
            </Container>
        </React.Fragment>
    );
}
