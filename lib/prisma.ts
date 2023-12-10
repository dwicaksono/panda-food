// import { PrismaClient } from "@prisma/client";

// declare global {
// 	var prisma: PrismaClient | undefined;
// }

// const client = globalThis.prisma || new PrismaClient();
// if (process.env.NODE_ENV !== "production") globalThis.prisma = client;

// export default client;

import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
	prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
