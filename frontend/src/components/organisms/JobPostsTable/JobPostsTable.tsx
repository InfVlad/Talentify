import { Users } from "lucide-react";
import { Button } from "@/components/atoms/Button/Button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/atoms/Table/Table";
import { Text } from "@/components/atoms/Text/Text";
import { JobPostStatus } from "@/components/molecules/JobPostStatus/JobPostStatus";

export interface JobData {
  title: string;
  publishDate: string;
  status: "open" | "closed";
  numberOfCandidates: number;
}
type JobPostsTableProps = {
  data: JobData[];
};

export function JobPostsTable({ data }: JobPostsTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Empleos</TableHead>
          <TableHead>Estado</TableHead>
          <TableHead>Postulaciones</TableHead>
          <TableHead className="text-center">Acciones</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map(
          ({ title, numberOfCandidates, publishDate, status }, index) => (
            <TableRow key={index}>
              <TableCell>
                <div className="min-w-max">
                  <Text variant="Subheadline-4/16">{title}</Text>
                  <Text variant="Paragraph-3/12" className="text-gray-500">
                    Publicado el {publishDate}
                  </Text>
                </div>
              </TableCell>
              <TableCell>
                <JobPostStatus status={status} />
              </TableCell>
              <TableCell>
                <div className="flex min-w-max items-center gap-1 text-grey-darkFont">
                  <Users />
                  <Text variant="Subheadline-5/14">
                    {numberOfCandidates} candidatos
                  </Text>
                </div>
              </TableCell>
              <TableCell className="flex justify-center">
                <Button variant="outlined">Ver detalles</Button>
              </TableCell>
            </TableRow>
          )
        )}
      </TableBody>
    </Table>
  );
}
