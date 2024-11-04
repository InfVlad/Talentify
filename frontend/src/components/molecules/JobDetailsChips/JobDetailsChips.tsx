import { Chip } from "@/components/atoms/Chip/Chip";

type JobDetailsChipsProps = {
  location: string;
  modality: string;
  workDay: string;
};

export const JobDetailsChips: React.FC<JobDetailsChipsProps> = ({
  location,
  modality,
  workDay,
}) => {
  return (
    <div className="flex flex-row flex-wrap">
      {location ? (
        <Chip className="mb-2 mr-2" variant="default" location={true}>
          {location}
        </Chip>
      ) : null}
      {modality ? (
        <Chip className="mb-2 mr-2" variant="default">
          {modality}
        </Chip>
      ) : null}
      {workDay ? (
        <Chip className="mb-2 mr-2" variant="default">
          {workDay}
        </Chip>
      ) : null}
    </div>
  );
};
