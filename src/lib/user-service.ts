import { db } from "./db"


export const getUserByUserName = async (username: string) => {

    const user = await db.user.findUnique({
        where:{
            userName: username
        }
    })

    return user

}