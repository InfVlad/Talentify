"use client";

import { WelcomeMessage } from "@/components/molecules/WelcomeMessage/WelcomeMessage";
import { JobPostsStatisticsContainer } from "@/components/organisms/JobPostsStatisticsContainer/JobPostsStatisticsContainer";
import { RecentJobPostsTableContainer } from "@/components/organisms/RecentJobPostsTable/RecentJobPostsTable";
import { useRedirectToHomeByRole } from "@/hooks/useRedirectToHomeByRole";

export default function RecruitersHome() {
  useRedirectToHomeByRole();
  return (
    <main className="w-full pt-12">
      <section className="mx-auto w-[95%] max-w-7xl">
        <div className="mb-20 space-y-8">
          <WelcomeMessage />
          <JobPostsStatisticsContainer />
        </div>
        <div>
          <RecentJobPostsTableContainer />
        </div>
      </section>
    </main>
  );
}
