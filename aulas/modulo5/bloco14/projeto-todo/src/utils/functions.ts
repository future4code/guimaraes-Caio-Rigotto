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

export const CreateTask = async (task: string,
    desc: string,
    status: string,
    limitDate: string,
    creatorId: number): Promise<any> => {

    const dateSplit = limitDate.split('/')

    const sqlDate = `${dateSplit[2]}-${dateSplit[1]}-${dateSplit[0]}`

    await connection('toDoList')
        .insert({
            title: task,
            description: desc,
            status,
            limit_date: sqlDate,
            creator_user_id: creatorId
        })
}

export const GetTaskById = async (id: number): Promise<any> => {
    const tasks = await connection('toDoList')
        .select()
        .where({ id: id })

    if (Object.entries(tasks).length === 0) {
        return null
    }

    const task = tasks[0]

    const creatorName = await connection('toDoListUser')
        .select()
        .where({ id: task.creator_user_id })

    const dateSplit = task.limit_date.toISOString().split('-')

    const limitDate = `${dateSplit[2].slice(0, 2)}/${dateSplit[1]}/${dateSplit[0]}`

    const taskInfo = [{
        taskId: task.id,
        title: task.title,
        description: task.description,
        limitDate: limitDate,
        status: task.status,
        creatorUserId: task.creator_user_id,
        creatorUserNickname: creatorName[0].nickname
    }]

    return taskInfo
}