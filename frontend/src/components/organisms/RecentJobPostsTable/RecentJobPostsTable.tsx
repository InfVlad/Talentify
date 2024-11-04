import { Text } from "@/components/atoms/Text/Text";
import { JobPostsTable, type JobData } from "../JobPostsTable/JobPostsTable";

const jobPostsMockData: JobData[] = [
  {
    title: "Desarrollador Frontend",
    publishDate: "24/10/2024",
    status: "open",
    numberOfCandidates: 15,
  },
  {
    title: "Desarrollador Backend",
    publishDate: "20/10/2024",
    status: "closed",
    numberOfCandidates: 5,
  },
  {
    title: "Diseñador UI/UX",
    publishDate: "19/10/2024",
    status: "open",
    numberOfCandidates: 10,
  },
  {
    title: "Desarrollador Front End",
    publishDate: "10/10/2024",
    status: "closed",
    numberOfCandidates: 20,
  },
  {
    title: "Desarrollador Web",
    publishDate: "5/10/2024",
    status: "closed",
    numberOfCandidates: 41,
  },
];

export function RecentJobPostsTableContainer() {
  return (
    <section>
      <Text variant="Subheadline-1/24" className="mb-4">
        Avisos recientes
      </Text>

      <JobPostsTable data={jobPostsMockData} />
    </section>
  );
}
