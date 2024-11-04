import { Request, Response } from 'express'
import { CompanyService } from '../services/company.service'
import { CreateCompanyDto } from '../dto/company.dto';

const companyService = new CompanyService()

export class CompanyController {

    public async createCompany(req: Request, res: Response): Promise<void> {
        try {
            const createCompanyDto: CreateCompanyDto = req.body
            const company = await companyService.create(createCompanyDto)
            res.status(201).json(company)
        } catch (error: any) {
            res.status(400).json({ message: error.message })
        }
    }

    public async getAllCompanies(req: Request, res: Response): Promise<void> {
        try {
            const companies = await companyService.getAll()
            res.status(200).json(companies)
        } catch (error: any) {
            res.status(400).json({ message: error.message })
        }
    }

    public async getCompanyById(req: Request, res: Response): Promise<void> {
        try {
            const id = parseInt(req.params.id)
            const company = await companyService.getById(id)
            if (!company) {
                res.status(404).json({ message: 'Company not found' })
            }
            res.status(200).json(company)
        } catch (error: any) {
            res.status(400).json({ message: error.message })
        }
    }

    public async updateCompany(req: Request, res: Response): Promise<void> {
        try {
            const id = parseInt(req.params.id)
            const updateData: Partial<CreateCompanyDto> = req.body
            const companyUpdated = await companyService.update(id, updateData)
            res.status(200).json(companyUpdated)
        } catch (error: any) {
            res.status(400).json({ message: error.message })
        }
    }

    public async deleteCompany(req: Request, res: Response): Promise<void> {
        try {
            const id = parseInt(req.params.id)
            await companyService.delete(id)
            res.status(204).send()
        } catch (error: any) {
            res.status(400).json({ message: error.message })
        }
    }

}
