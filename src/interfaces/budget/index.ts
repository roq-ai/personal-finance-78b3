import { PersonalInterface } from 'interfaces/personal';
import { GetQueryInterface } from 'interfaces';

export interface BudgetInterface {
  id?: string;
  amount: number;
  start_date: any;
  end_date: any;
  personal_id?: string;
  created_at?: any;
  updated_at?: any;

  personal?: PersonalInterface;
  _count?: {};
}

export interface BudgetGetQueryInterface extends GetQueryInterface {
  id?: string;
  personal_id?: string;
}
