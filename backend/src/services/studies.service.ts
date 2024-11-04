import CreateStudiesDto from "../dto/studies.dto";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class StudiesService {
  static async create(createStudiesDto: CreateStudiesDto) {
    const { profileId, institution_name, degree, graduation_date } =
      createStudiesDto;
    if (!profileId || !institution_name || !degree || !graduation_date) {
      throw new Error("Missing required fields");
    }

    return await prisma.studies.create({
      //como paso el id?
      data: {
        profile: {
          connect: { id: profileId }, //???
        },
        institution_name: institution_name,
        degree: degree,
        graduation_date: graduation_date,
      },
    });
  }
  static async getAll() {
    const studies = prisma.studies.findMany();
    return studies;
  }
  static async getById(id: number) {
    const study = prisma.studies.findUnique({ where: { id } });
    return study;
  }
  static async update(id: number, updateData: Partial<CreateStudiesDto>) {
    return prisma.studies.update({ where: { id }, data: updateData });
  }
  static async delete(id: number) {
    return prisma.studies.delete({ where: { id } });
  }
}

export default StudiesService;
