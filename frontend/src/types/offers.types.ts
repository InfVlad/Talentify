enum OfferStatus {
  OPEN = "OPEN",
  CLOSED = "CLOSED",
}

type OwnerType = {
  id: number;
  fullName: string;
};

export interface OfferDto {
  id: number;
  title: string;
  description: string;
  owner: OwnerType;
  salary: string;
  requirements: string[];
  location: string;
  modality: string;
  status: OfferStatus;
  creationDate: string;
  contractType: string;
  workDay: string;
  companyName: string;
  companyDescription: string;
  image?: string;
}
