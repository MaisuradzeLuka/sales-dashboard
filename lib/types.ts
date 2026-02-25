export type SalesDataPoint = {
  month: string;
  sales: number;
  year: number;
};

export type SalesByYear = {
  year: number;
  data: SalesDataPoint[];
};
