import connection from "../connection"

export const CreateUser = async (name:string,
    nickname:string,
    email:string):Promise<any> =>{
        await connection('toDoListUser')
        .insert({
            name:name, 
            nickname:nickname,
            email:email
        })
    }

export const EditUser = async (id:number,
    name:string,
    nickname:string,
    email:string):Promise<any> =>{
        await connection('toDoListUser')
        .update({
            name:name,
            nickname:nickname,
            email:email
        })
        .where({id:id})
    }
