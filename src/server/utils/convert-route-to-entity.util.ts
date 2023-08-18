const mapping: Record<string, string> = {
  admins: 'admin',
  companies: 'company',
  customers: 'customer',
  'rental-requests': 'rental_request',
  tools: 'tool',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
