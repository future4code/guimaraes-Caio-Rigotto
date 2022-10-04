import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import GlobalContext from '../global/GlobalContext';
import logo from "../img/logo.png"
import { Typography } from '@mui/material';

export default function GameSelector() {
    const data = React.useContext(GlobalContext);
    const [gameSelected, setSelected] = React.useState("")

    const renderLogo = () => {
        if (!data.isLoadingName && gameSelected !== "") {
            return (
                <Box sx={{
                    display: 'flex',
                    filter: 'brightness(0) invert(1)',
                    alignItems: 'center'
                }}>
                    <img src={logo}
                    alt = 'Logo das Loterias Caixa'
                        style={{ width: '20%', }}
                    />
                    <Typography
                        style={{
                            fontFamily: 'Montserrat',
                            fontStyle: 'normal',
                            fontWeight: '700',
                            fontSize: '30px',
                            lineHeight: '37px',
                            color: '#FFFFFF',
                            textTransform: "uppercase"
                        }}
                    >
                        {data.gameName[gameSelected].nome}
                    </Typography>
                </Box>
            )
        }
    }

    const renderContest = () => {
        if (!data.isLoadingContest && gameSelected !== "") {
            return (
                <Box sx={{
                    display: 'flex',
                    filter: 'brightness(0) invert(1)',
                    flexDirection: 'column',
                    alignSelf: 'flex-start',
                    marginLeft: '3vw'
                }}>
                    <Typography
                        style={{
                            fontFamily: 'Montserrat',
                            fontStyle: 'normal',
                            fontWeight: '500',
                            fontSize: '2vh',
                            color: '#FFFFFF',
                            textTransform: "uppercase"
                        }}
                    >
                        Concurso <br />
                        {data.constestData[gameSelected].concursoId}
                    </Typography>
                </Box>
            )
        }
    }

    const handleChange = (event) => {
        setSelected(event.target.value);
    };

    return (
        <Box
            sx={{
                minWidth: '30vw',
                maxWidth: '30vw',
                width: 'fit-content',
                bgcolor: '#6BEFA3',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
            <FormControl sx={{
                minWidth: '60%',
                maxWidth: '70%',
                bgcolor: '#FFFFFF',
                borderRadius: '5px'
            }}
                margin='normal'
                variant='standard'
            >
                <InputLabel id="Game">
                    Selecione um jogo
                </InputLabel>
                <Select
                    style={{ textTransform: "uppercase" }}
                    id="Games"
                    value={gameSelected}
                    defaultValue="0"
                    label="Game"
                    onChange={handleChange}
                >
                    {data.isLoadingName
                        ? <MenuItem>Carregando jogos...</MenuItem>
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
            {renderLogo()}
            {renderContest()}
        </Box>
    );
}
