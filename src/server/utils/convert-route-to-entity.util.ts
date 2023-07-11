const mapping: Record<string, string> = {
  budgets: 'budget',
  expenses: 'expense',
  personals: 'personal',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
