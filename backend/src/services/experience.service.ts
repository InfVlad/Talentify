import { Prisma, PrismaClient } from "@prisma/client";
import { CreateExperienceDto } from "../dto/experience.dto";

const prisma = new PrismaClient()

export class ExperienceService {

    public async create(createExperienceDto: CreateExperienceDto) {
        const { profileId, company_name, position, start_date, end_date } = createExperienceDto

        return prisma.experience.create({
            data: {
                profile: {
                    connect: { id: profileId }
                },
                company_name,
                position,
                start_date,
                end_date
            }
        })
    }

    public async getAll() {
        return prisma.experience.findMany()
    }

    public async getById(id: number) {
        return prisma.experience.findUnique({
            where: { id }
        })
    }

    public async update(id: number, updateData: Partial<CreateExperienceDto>) {
        return prisma.experience.update({
            where: { id },
            data: updateData
        })
    }

    public async delete(id:number) {
        return prisma.experience.delete({
            where: { id }
        })
    }
}
