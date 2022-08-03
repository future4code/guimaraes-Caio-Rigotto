import { Movie } from "../model/Movie";
import { BaseDatabase } from "./BaseDatabase";

export class MovieDatabase extends BaseDatabase {
    private static TABLE_NAME = "LABEFLIX_MOVIE";

    async create({ id,
        title,
        description,
        durationInMinutes,
        yearOfRelease }: any): Promise<void> {
        await MovieDatabase.connection
            .insert({
                id,
                title,
                description,
                duration_in_minutes: durationInMinutes,
                year_of_release: yearOfRelease
            })
            .into(MovieDatabase.TABLE_NAME);
    }
    async get(): Promise<Movie[]> {
        try {
            MovieDatabase.TABLE_NAME = 'LABEFLIX_MOVIE'
            const Movies: Movie[] = [];

            const result = await MovieDatabase.connection()
                .select('*')
                .from(MovieDatabase.TABLE_NAME)

            for (let movie of result) {
                Movies.push(movie);
            }

            return Movies;
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}
