import { prisma } from "../../db";
export const restartDb = async () => {
    await prisma.$transaction([
        prisma.sum.deleteMany()
    ])
}