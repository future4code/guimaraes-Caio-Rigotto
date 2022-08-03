import { MovieDatabase } from "../data/MovieDatabase"
import { v4 as generateId } from 'uuid'
import { Movie } from "../model/Movie"
import { CreateMovieDTO } from "../model/MovieDTO"

export class MovieBusiness {
  async create(input: CreateMovieDTO): Promise<void> {

    const id = generateId()

    const movieDatabase = new MovieDatabase()
    await movieDatabase.create({
      id,
      input
    })
  }
  async get(): Promise<Movie[]> {
    const MovieDataBase = new MovieDatabase()

    return await MovieDataBase.get()
  }
}