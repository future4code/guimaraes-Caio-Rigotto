import { CustomError } from "../error/CustomError";
import { UserInputDTO } from "../model/User";
import { GetFriendsIds } from "../services/GetFriendsIds";
import { BaseDatabase } from "./BaseDatabase";

export class userDatabase extends BaseDatabase {
    private tableName = "labook_users";

    async insert(input: UserInputDTO) {
        try {
            await BaseDatabase.connection(this.tableName)
                .insert({
                    id: input.id,
                    name: input.name,
                    email: input.email,
                    password: input.password
                })
        } catch (error) {
            throw new CustomError('Something is wrong', 500)
        }
    }

    async getUserFriends(id: string) {
        try {
            const queryResult = await BaseDatabase.connection(this.tableName)
                .select('sender_id', 'receiver_id')
                .join('labook_users_relations', 'labook_users.id', '=', 'labook_users_relations.sender_id')
                .where({ sender_id: id })
                .orWhere({ receiver_id: id })

            const friendsIds = GetFriendsIds(queryResult)

            return friendsIds
        }
        catch (error: any) {
            throw new CustomError(error.message || error.sqlMessage, error.statusCode)
        }
    }

    async getUserTimeline(timelineIds: any) {
        try {
            let posts: any[] = []

            for (let index = 0; index < timelineIds.length; index++) {

                const friendPost = await BaseDatabase.connection(this.tableName)
                    .select('labook_posts.id','name', 'photo', 'description', 'type', 'created_at', 'author_id')
                    .join('labook_posts', 'labook_users.id', '=', 'labook_posts.author_id')
                    .where({ author_id: timelineIds[index] })

                if (friendPost[0]) {
                    posts.push(... friendPost)
                }
            }

            return posts
        } catch (error: any) {
            throw new CustomError(error.message || error.sqlMessage, error.statusCode)
        }
    }

}