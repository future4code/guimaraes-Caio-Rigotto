import connection from "../connection"

export const CreateUser = async (name: string,
    nickname: string,
    email: string): Promise<any> => {
    await connection('toDoListUser')
        .insert({
            name: name,
            nickname: nickname,
            email: email
        })
}

export const EditUser = async (id: number,
    name: string,
    nickname: string,
    email: string): Promise<any> => {
    await connection('toDoListUser')
        .update({
            name: name,
            nickname: nickname,
            email: email
        })
        .where({ id: id })
}

export const CreateTask = async (task:string, 
    desc:string, 
    status:string, 
    limitDate:string, 
    creatorId:number): Promise<any> => {
        
        const dateSplit = limitDate.split('/')

        const sqlDate = `${dateSplit[2]}-${dateSplit[1]}-${dateSplit[0]}`

        await connection('toDoList')
        .insert({
            title:task,
            description:desc,
            status,
            limit_date:sqlDate,
            creator_user_id:creatorId
        })
    }
