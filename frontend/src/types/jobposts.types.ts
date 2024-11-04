import type { z } from "zod";
import type { jobPostSchema } from "@/validations/jobpost.schema";

export type OfferStatus = "OPEN" | "CLOSED";

export interface CreateJobPostDto
  extends Omit<z.infer<typeof jobPostSchema>, "requirements"> {
  ownerId: number;
  salary: string;
  requirements: string;
  status: OfferStatus;
}

export interface JobPost
  extends Omit<CreateJobPostDto, "requirements" | "salary"> {
  id: number;
  ownerId: number;
  salary: string;
  requirements: string;
  status: OfferStatus;
  creationDate: Date;
}
