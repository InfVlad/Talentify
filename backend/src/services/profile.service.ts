import { PrismaClient } from '@prisma/client';
import { CreateProfileDto } from '../dto/profile.dto';

const prisma = new PrismaClient();

export class ProfileService {

    // Create a new Profile
    public async create(createProfileDto: CreateProfileDto) {

        const { userId, about, phone, resume, address } = createProfileDto;

        return prisma.profile.create({
            data: {
                user: {
                    connect: { id: userId },
                },
                about,
                address,
                phone,
                resume,

            }
        });
    }

    // Get all Profiles
    public async getAll() {
        return prisma.profile.findMany();
    }

    // Get Profile by ID
    public async getById(id: number) {
        return prisma.profile.findUnique({
            where: { id }
        });
    }

    // Update a Profile
    public async update(id: number, updateData: Partial<CreateProfileDto>) {
        return prisma.profile.update({
            where: { id },
            data: updateData,
        });
    }

    // Delete a Profile
    public async delete(id: number) {
        return prisma.profile.delete({
            where: { id }
        });
    }
}
