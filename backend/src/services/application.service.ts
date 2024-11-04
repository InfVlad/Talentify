import { PrismaClient } from "@prisma/client";
import { CreateApplicationDto } from '../dto/application.dto';

const prisma = new PrismaClient()

export class ApplicationService {

    // Create a new application
    public async create(createApplicationDto: CreateApplicationDto) {
        const { userId, offerId, status } = createApplicationDto;

        // Perform application creation
        return prisma.application.create({
            data: {
                userId,
                offerId,
                status,
            },
            include: {
                user: true, 
                offer: true, 
            }
        });
    }

    // Get all applications
    public async getAll() {
        return prisma.application.findMany({
            include: {
                user:{
                    select: {
                        fullName: true,  
                        email: true      
                    }
                },  
                offer: {
                    select: {
                        ownerId: true,
                        title: true,
                        description: true,
                        salary: true,
                        requirements: true,
                        location: true,
                        modality: true,
                        status: true
                    }
                }
            }
        });
    }

    // Get application by ID
    public async getById(id: number) {
        return prisma.application.findUnique({
            where: { id },
            include: {
                user:{
                    select: {
                        fullName: true,  
                        email: true      
                    }
                },  
                offer: {
                    select: {
                        ownerId: true,
                        title: true,
                        description: true,
                        salary: true,
                        requirements: true,
                        location: true,
                        modality: true,
                        status: true
                    }
                }
            }
        });
    }

    // Update an application by ID
    public async update(id: number, updateData: Partial<CreateApplicationDto>) {
        return prisma.application.update({
            where: { id },
            data: updateData,
            include: {
                user: true,  
                offer: true, 
            }
        });
    }

    // Delete an application by ID
    public async delete(id: number) {
        return prisma.application.delete({
            where: { id },
        });
    }
}
