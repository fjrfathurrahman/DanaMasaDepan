export type Page = 'Nasabah' | 'Admin' | 'Transaksi'


export interface RowTransactionProps {
  id: number;
  customer_id?: number;
  admin_id?: number;
  type?: string;
  amount?: number;
  customer?: {
    id: number;
    name: string;
    email: string;
  };
  admin?: {
    id: number;
    name: string;
    email: string;
  };
  created_at?: string;
  updated_at?: string;
}

export interface RowCostumersProps {
  id: number;
  number?: number;
  nisn?: string;
  name?: string;
  gender?: string;
  major?: string;
  class?: string;
  address?: string;
  email?: string;
  phone?: string;
  created_at?: string;
  updated_at?: string;
}

export interface RowAdminProps {
  id: number;
  name?: string;
  email?: string;
  created_at?: string;
  updated_at?: string;
}

export interface RowProps extends RowTransactionProps, RowCostumersProps, RowAdminProps {
  [key: string]: unknown;
}
