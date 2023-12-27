import { getSelf } from "./auth-service"
import { db } from "./db"

export const getRecommended = async () => {

    //await new Promise(resolve => setTimeout(resolve,5000))

    let userId;

    const self = await getSelf();

  try {
    
    userId = self.id;
  } catch {
    userId = null;
  }

  let users = [];

    if(userId)
    {

        users = await db.user.findMany({
            where:{
             
                AND:[
                  {
                    NOT:{
                      id: userId
                    }
                  },
                  {
                    
                      followedBy: {
                        some: {
                          followerId: userId,
                        },
                      },
                    
                    
                  },
                ]
              
              
                
            },
            orderBy:{
                createdAt: "desc"
            }
        })

    }else{

        users = await db.user.findMany({
            orderBy:{
                createdAt: "desc"
            }
        })

    }

   

    return users

}