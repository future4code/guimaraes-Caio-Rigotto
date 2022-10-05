import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

export default function BallCards(props) {
    const ballNumbers = props.ballNumbers,
        isLoadingNumbers = props.isLoadingNumbers;

    return (
        <Grid2
            container
            disableEqualOverflow
            alignItems={'center'}
            overflow={'auto'}
        >
            {
                isLoadingNumbers
                    ?
                    <p>Selecione um jogo</p>
                    :
                    ballNumbers.numeros.map((number) => {
                        return (
                            <Grid2>
                                <Avatar sx={{
                                    bgcolor: '#FFFFFF',
                                    color: '#000000'
                                }}
                                    key={number}
                                >{number}</Avatar>
                            </Grid2>
                        )
                    })

            }
        </Grid2>
    );
}