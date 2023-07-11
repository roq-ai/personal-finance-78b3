import { PersonalInterface } from 'interfaces/personal';
import { GetQueryInterface } from 'interfaces';

export interface ExpenseInterface {
  id?: string;
  amount: number;
  date: any;
  category: string;
  personal_id?: string;
  created_at?: any;
  updated_at?: any;

  personal?: PersonalInterface;
  _count?: {};
}

export interface ExpenseGetQueryInterface extends GetQueryInterface {
  id?: string;
  category?: string;
  personal_id?: string;
}
