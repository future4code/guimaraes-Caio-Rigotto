import connection from "../connection"

const CreateUser = async (name:string,
    nickname:string,
    email:string):Promise<any> =>{
        await connection('toDoListUser')
        .insert({
            name:name, 
            nickname:nickname,
            email:email
        })
    }

    export default CreateUser;