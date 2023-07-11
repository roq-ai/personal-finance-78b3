import { BudgetInterface } from 'interfaces/budget';
import { ExpenseInterface } from 'interfaces/expense';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface PersonalInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  budget?: BudgetInterface[];
  expense?: ExpenseInterface[];
  user?: UserInterface;
  _count?: {
    budget?: number;
    expense?: number;
  };
}

export interface PersonalGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
