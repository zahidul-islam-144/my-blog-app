import { PrismaClient } from "@prisma/client";
import { ErrorResponse } from "../utils/templates";

export class Config {
  prisma = new PrismaClient();

  connectToDb() {
    this.prisma
      .$connect()
      .then(() => console.log(">> Connected to the database."))
      .catch((error: any) => new ErrorResponse(error, 401));
  }

}



















// import { PrismaClient } from "@prisma/client";

// const globalForPrisma = global;

// const prisma = globalForPrisma.prisma || new PrismaClient();

// if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

// export default prisma;