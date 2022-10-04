import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function BallCards(props) {
    return (        
        <Stack direction="row" spacing={2}>
            <Avatar sx={{
                bgcolor: '#FFFFFF',
                color: '#000000'
            }}>20</Avatar>
        </Stack>
    );
}