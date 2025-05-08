export interface IServiceRecord {
  serviceId?: string;
  bikeId: string;
  serviceDate: string;
  completionDate?: string | null;
  description: string;
  status?: "pending" | "in_progress" | "done";
}
  