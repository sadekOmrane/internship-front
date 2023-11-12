import { Location } from "./location";
import { Sector } from "./sector";
import { User } from "./user";

export class Company {
  id?: number;
  name?: string;
  description?: string
  owner?: User;
  sectors?: Sector[];
  location?: Location;
}
