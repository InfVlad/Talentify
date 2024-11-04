import type { CreateJobPostDto, JobPost } from "@/types/jobposts.types";
import { apiClient } from "../api-client";

export async function createJobPost(data: CreateJobPostDto) {
  return apiClient.post("/offers", data);
}

export async function getAllJobPosts() {
  return apiClient.get<JobPost[]>("/offers");
}
