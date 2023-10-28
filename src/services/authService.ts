import { PrismaClient } from "@prisma/client";
import { ErrorResponse, GenerateStrongPassword } from "../utils/templates";
import { PasswordTypes } from "../utils/types";

export class AuthService {
  prisma = new PrismaClient();

  async createUser(userData: any) {
    try {
      const { email, password, userName, salt, ...restData } = userData;
      const passwordHandler = new GenerateStrongPassword(password);

      const isUserExist: object | null = await this.prisma.blogUser.findFirst({
        where: {
            email:email
        }
      })
     
      if(!isUserExist){
        const createdUser = await this.prisma.blogUser.create({data: {
            email,
            userName: 'abc-1',
            password: passwordHandler?.modifiedPassword?.password,
            salt: passwordHandler?.modifiedPassword?.salt,
            ...restData
        }})

      }else{
        return new ErrorResponse('User Already Resistered.',401)
      }
    } catch (error) {return new ErrorResponse('Failed to create user', 401)}
  }
}


// id
// userName 
// email   
// password  
// isRegistered 
// isLogIn 
// isLogout 
// createdAt 
// deletedAt 
// updatedAt 