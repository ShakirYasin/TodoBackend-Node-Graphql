import prisma from "../../lib/prisma"
import { GraphQLError } from "graphql"
import { signJwt } from "../../utils/jwt.utils"
import { comparePassword, hashPassword } from "../../utils/auth.utils"


export const getUser = async (id: string) => {

    const user = await prisma.user.findFirst({where: {id: id}})

    if(!user) {
        throw new GraphQLError('User not Found. Idiot!!')
    }
    
    return user
}

export const createUser = async ({name, email, password}: {name: string, email: string, password: string}) => {

    const signedJWT = signJwt({name, email})
    const hashedPassword = await hashPassword(password)

    try {
        const user = await prisma.user.create({data: {
            name,
            email,
            password: hashedPassword
        }})
        return {...user, jwt: signedJWT}
        
    } catch (error) {
        throw new GraphQLError('Some Error Occurred. Idiot!!')
    }

}

export const login = async ({email, password}: {email: string, password: string}) => {

    const user = await prisma.user.findFirst({where: {email}})

    if(!user) {
        throw new GraphQLError("User does not Exists.")
    }

    const passwordsMatch = await comparePassword(password, user.password as string)


    if(!passwordsMatch) {
        throw new GraphQLError('Incorrect Password')
    }

    const signedJWT = signJwt({id: user.id, name: user.name, email})
    
    return {...user, jwt: signedJWT}
}