import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function BallCards(props) {
    const gameSelected = props.gameSelected
    const ballNumbers = props.ballNumbers
    const isLoadingNumbers = props.isLoadingNumbers
    console.log(ballNumbers)

    return (
        <Stack direction="row"
            spacing={1}>
            {
                isLoadingNumbers
                    ?
                    <p>Selecione um jogo</p>
                    :
                    ballNumbers.numeros.map((number) => {
                        return (
                            <Avatar sx={{
                                bgcolor: '#FFFFFF',
                                color: '#000000'
                            }}>{number}</Avatar>
                        )
                    })

            }
        </Stack>
    );
}