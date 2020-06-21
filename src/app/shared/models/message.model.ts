import { User } from './user.model';

export interface Message {
  _id: number;
  sourceUser: User;
  destUser: User;
  title: string;
  content: string;
}
