import crypto from 'node:crypto'
import { PasswordObject } from './types';



// response template
export class ResponseTemplate {
    success: boolean;
    status: number;
    messages: string;
    results: any;

    constructor(success:boolean, status:number, messages:string, results:any = null){
        this.success = success 
        this.status = status
        this.messages = messages
        this.results = results
    }
}

//custom error template
export class ErrorResponse extends Error {
    statusCode: number

    constructor(message: any, statusCode: number) {
      super(message);
      this.statusCode = statusCode;
      Error.captureStackTrace(this, this.constructor);
    }
}



// generateStrongPassword 
export class GenerateStrongPassword {
   private userPass: string;

    constructor(pass:string){
        this.userPass = pass;
    }

   private createSalt(){
        const salt = crypto.randomBytes(256).toString('base64');
        return salt;
    }

    private createHash(){
        const hashedPassword =  crypto.pbkdf2Sync(this.userPass, this.createSalt(), 100000, 64, "sha512").toString("base64");
        return hashedPassword;
    }

    public modifiedPassword:PasswordObject = {
        salt : this.createSalt(),
        password: this.createHash()
   }
}

// exports.validatePassword = (givenPass, regHash, regSalt) => {
//     const registeredPassword = regHash;
//     const verifyHash =  crypto.pbkdf2Sync(givenPass, regSalt, 100000, 64, "sha512").toString("base64");
//     return (registeredPassword === verifyHash);
//   }