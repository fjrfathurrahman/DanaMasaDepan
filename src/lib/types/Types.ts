export type Page = 'Nasabah' | 'Admin' | 'Transaksi'

export interface RowTransactionProps {
  id: number;
  customer_id?: number;
  admin_id?: number;
  type?: 'deposit' | 'withdrawal';
  amount?: number;
  customer?: RowCostumersProps;
  admin?: RowAdminProps;
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
  balance?: number;
  image?: string;
  created_at?: string;
  updated_at?: string;
}

export interface RowAdminProps {
  id: number;
  name?: string;
  email?: string;
  role?: 'admin' | 'teacher' | 'student' | 'superadmin';
  image?: string;
  created_at?: string;
  updated_at?: string;
}

export interface RowProps extends RowTransactionProps, RowCostumersProps, RowAdminProps {
  [key: string]: unknown;
}

export interface RenderInputProps {
  name: string;
  label?: string;
  type?: "text" | "number" | "email" | "password" | "date" | "file";
  placeholder?: string;
  element?: "text" | "password" | "textArea" | "category" | "select" | "date";
  options?: { key: string; label: string }[];
  dynamicOptionsFetcher?: () => { key: string, label: string }[]
}