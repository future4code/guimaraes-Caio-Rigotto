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

    console.log(data)

    const handleChange = (event) => {
        setSelected(event.target.value);
    };

    return (
        <Box sx={{
            minWidth: '10vw',
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
                    defaultValue='0'
                    label="Game"
                    onChange={handleChange}
                >
                    {data.isLoadingName
                        ? <MenuItem>Loading...</MenuItem>
                        :
                        data.gameName.map((game) => {
                            return (
                                <MenuItem
                                    style={{ textTransform: "uppercase" }}
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
