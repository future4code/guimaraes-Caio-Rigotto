import express from 'express'
import cors from 'cors'
import { Request, Response } from 'express'
import { users } from './data'
import { v4 as generateId } from 'uuid'

const app = express()

app.use(express.json())
app.use(cors())


app.get('/playlists', (req: Request, res: Response) => {

    try {

        const listaUsuarios = users

        const userPlaylist = listaUsuarios.map((cadaUsuario) => {
            return cadaUsuario.playlists
        })

        const result = userPlaylist.flat(1)

        res.status(200).send(result)

    }
    catch (error) {
        res.status(400).end("Playlists não encontradas")
    }
})


app.get('/tracks', (req: Request, res: Response) => {

    try {
        const playlistId = req.query.id
        let playTracks: {}[] = []

        for (let element of users) {
            for (let playlist of element.playlists) {
                if (playlist.id === playlistId) {
                    playTracks.push(playlist.tracks)
                }
            }
        }

        res.status(200).send(playTracks)

    }
    catch (error) {
        res.status(400).end("Id não encontrado")
    }
})


app.delete('/track', (req: Request, res: Response) => {
    try {

        const trackId = req.query.idTrack
        const playlistId = req.query.idPlaylist

        let newPlaylist
        for (let element of users) {
            for (let playlist of element.playlists) {
                if (playlist.id === playlistId) {

                    let index = playlist.tracks.findIndex((track) => track.id === trackId)
                    if (index > -1) { playlist.tracks.splice(index, 1) }
                    newPlaylist = playlist
                }
            }
        }

        res.status(200).send(newPlaylist)

    }
    catch (error) {
        res.status(400).end("Playlist não encontrada, por favor verifique o id")
    }
})


app.delete('/playlist/:id', (req: Request, res: Response) => {
    try {

        const id = req.params.id

        for (let element of users) {
            let index = element.playlists.findIndex((playlist) => playlist.id === id)

            if (index > -1) {
                element.playlists.splice(index, 1)
            }

        }

        res.status(200).send("Playlist deletada")

    }
    catch (error) {
        res.status(400).end("Playlist não encontrada, por favor verifique o id")
    }
})

//requisições da aula


app.listen(3003, () => {
    console.log("Servidor de pé na porta 3003")
})