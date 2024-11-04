import { PrismaClient } from "@prisma/client";
import { CreateCompanyDto } from '../dto/company.dto';
import { cloudinaryHandler } from "../utils/cloudinary.use";

const prisma = new PrismaClient()

export class CompanyService {

    public async create(createCompanyDto: CreateCompanyDto) {
        const { name, address, country, email, category, website, imageUrl } = createCompanyDto

        const imageUpload = await this.uploadImage(imageUrl)

        return prisma.company.create({
            data: {
                name,
                address,
                country,
                email,
                category,
                website,
                imageUrl: imageUpload
            }
        })
    }

    public async getAll() {
        return prisma.company.findMany()
    }

    public async getById(id: number) {
        return prisma.company.findUnique({
            where: { id }
        })
    }

    public async update(id: number, updateData: Partial<CreateCompanyDto>) {
        return prisma.company.update({
            where: { id },
            data: updateData,
        })
    }

    public async delete(id: number) {
        return prisma.company.delete({
            where: { id },
        })
    }

    private async uploadImage(image: string): Promise<string> {
        try {
            const imageUpload = await cloudinaryHandler(image)
            return imageUpload
        } catch (error: any) {
            throw new Error(`Error al subir imagen: ${error.message}`)
        }
    }

}

