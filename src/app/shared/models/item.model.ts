import { User } from './user.model';

export interface Item {
  id?: number;
  name: string;
  category: string;
  city: string;
  description: string;
  owner?: User;
}
