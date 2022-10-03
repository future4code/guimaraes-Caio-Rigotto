import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import GlobalContext from '../global/GlobalContext';

export default function GameSelector() {
    const data = React.useContext(GlobalContext);
    const [gameSelected, setSelected] = React.useState('')

    console.log(data, gameSelected)

    const handleChange = (event) => {
        setSelected(event.target.value);
    };

    return (

        <Box sx={{
            minWidth: '20vw',
            maxWidth: '20vw'
        }}>
            <FormControl fullWidth>
                <InputLabel id="Game">
                    Selecione um jogo
                </InputLabel>
                <Select
                    style={{ textTransform: "uppercase" }}
                    id="Games"
                    value={gameSelected}
                    label="Game"
                    onChange={handleChange}
                >
                    {data.isLoadingName
                        ? <p>Loading...</p>
                        :
                        data.gameName.map((game) => {
                            return (
                                <MenuItem
                                    style={{ textTransform: "capitalize" }}
                                    value={game.id}
                                    key={game.id}
                                    id="Games">
                                    {game.nome}
                                </MenuItem>
                            )
                        })}
                </Select>
            </FormControl>
        </Box>
    );
}
