import { PrismaClient } from '@prisma/client'
import { CreateFavoriteDto } from '../dto/favorite.dto'

const prisma = new PrismaClient()

export class FavoriteService {

    public async create(createFavoriteDto: CreateFavoriteDto) {
        const { userId, offerId, } = createFavoriteDto

        return prisma.favorites.create({
            data: {
                userId,
                offerId,
            }
        })
    }

    public async getAll() {
        return prisma.favorites.findMany()
    }

    public async getById(id: number) {
        return prisma.favorites.findUnique({
            where: { id }
        })
    }

    public async update(id: number, updateData: Partial<CreateFavoriteDto>) {
        return prisma.favorites.update({
            where: { id },
            data: updateData
        })
    }

    public async delete(id: number) {
        return prisma.favorites.delete({
            where: { id }
        })
    }

    public async deleteAll() {
        return prisma.favorites.deleteMany()
    }

}

