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
    const tasks = await connection('toDoListUser')
        .select()
        .join('toDoList', function () {
            this
                .on('toDoListUser.id', '=', 'toDoList.creator_user_id')
        })

    if (Object.entries(tasks).length === 0) {
        return null
    }

    const task = tasks.filter((task) => {
        if (task.id === id) {
            return task
        }
    })

    const dateSplit = task[0].limit_date.toISOString().split('-')

    const limitDate = `${dateSplit[2].slice(0, 2)}/${dateSplit[1]}/${dateSplit[0]}`

    const taskInfo = [{
        taskId: task[0].id,
        title: task[0].title,
        description: task[0].description,
        limitDate: limitDate,
        status: task[0].status,
        creatorUserId: task[0].creator_user_id,
        creatorUserNickname: task[0].nickname
    }]

    return taskInfo
}

export const GetAllUsers = async (): Promise<any> => {
    const userList = await connection('toDoListUser')
        .select('id', 'nickname')

    if (!userList) {
        const users = {}
        return users
    }

    const users = { users: [{ ...userList }] }
    return users
}

export const GetTaskByUserId = async (userId: number): Promise<any> => {
    const tasks = await connection('toDoListUser')
        .select()
        .join('toDoList', function () {
            this
                .on('toDoListUser.id', '=', 'toDoList.creator_user_id')
        })

    if (Object.entries(tasks).length === 0) {
        return null
    }

    const task = tasks.filter((task) => {
        if (task.creator_user_id === userId) {
            return task
        }
    })

    if (task.length === 0) {
        const task = {}
        return task
    }

    const dateSplit = task[0].limit_date.toISOString().split('-')

    const limitDate = `${dateSplit[2].slice(0, 2)}/${dateSplit[1]}/${dateSplit[0]}`

    const taskInfo = [{
        taskId: task[0].id,
        title: task[0].title,
        description: task[0].description,
        limitDate: limitDate,
        creatorUserId: task[0].creator_user_id,
        status: task[0].status,
        creatorUserNickname: task[0].nickname
    }]

    return taskInfo
}

export const SearchForUser = async (userQuery: string): Promise<any> => {
    const userSearch = await connection('toDoListUser')
        .select('id', 'name')
        .where('name', 'like', `%${userQuery}%`)
        .orWhere('email', 'like', `%${userQuery}%`)

    if (userSearch.length === 0) {
        const noUser = {}
        return noUser
    }

    const users = { users: [{ ...userSearch }] }

    return users
}

export const AssignUserTask = async (taskId: number,
    userId: number): Promise<any> => {

    let allOk

    const userIdChecker = await connection('toDoListUser')
        .select('id')
        .where({ id: userId })

    const taskIdChecker = await connection('toDoList')
        .select('id')
        .where({ id: taskId })

    if (taskIdChecker.length === 0 || userIdChecker.length === 0) {
        allOk = false
        return allOk
    }

    if (taskIdChecker.length > 0 && userIdChecker.length > 0) {
        await connection('toDoListRespUserTaskRelation')
            .insert({
                task_id: taskId,
                responsible_user_id: userId
            })
        allOk = true
        return allOk
    }
}
