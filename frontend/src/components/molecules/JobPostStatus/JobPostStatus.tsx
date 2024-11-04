import { CircleCheck, CircleX } from "lucide-react";

type JobPostStatusProps = {
  status: "open" | "closed";
};

export function JobPostStatus({ status }: JobPostStatusProps) {
  if (status === "closed") {
    return (
      <div className="flex items-center gap-1 text-red-alert">
        <CircleX size={20} />
        Expirado
      </div>
    );
  }
  return (
    <div className="flex items-center gap-1 text-green-success">
      <CircleCheck size={20} />
      Activo
    </div>
  );
}
