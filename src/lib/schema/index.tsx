import { z } from "zod";

const AuthenticationShema = z.object({
  name: z.string().min(3).max(20),
  email: z.string().email().min(3).max(50),
  password: z.string().min(3),
})

type ShemaAuthentication = z.infer<typeof AuthenticationShema>;

const CostumerShema = z.object({
  nisn: z.string().min(3, 'NISN minimal 3 karakter').length(11, 'NISN harus 11 karakter'),
  name: z.string().min(3, 'Nama minimal 3 karakter').max(225, 'nama maksimal 225 karakter'),
  gender: z.enum(['Laki-Laki', 'Perempuan',]),
  major: z.string().min(3, 'Jurusan minimal 3 karakter').max(225, 'Jurusan maksimal 225 karakter'),
  class: z.enum(['X', 'XI', 'XII']),
  address: z.string().min(3, 'Alamat minimal 3 karakter').max(225, 'Alamat maksimal 225 karakter'),
  email: z.string().email().min(3, 'Email minimal 3 karakter').max(225, 'Email maksimal 225 karakter'),
  phone: z.string().min(3, 'Nomor Telepon minimal 3 karakter').max(225, 'Nomor Telepon maksimal 225 karakter'),
})

type ShemaCostumer = z.infer<typeof CostumerShema>;

const AddAdminSchema = z
  .object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // Letakkan error di confirmPassword
  });


type ShemaAddAdmin = z.infer<typeof AddAdminSchema>

const TransactionShema = z.object({
  customer_id: z.string(),
  admin_id: z.string(),
  type: z.enum(['deposit', 'withdrawal']),
  amount: z.string(),
})

type ShemaTransaction = z.infer<typeof TransactionShema>;

export { AuthenticationShema, type ShemaAuthentication, CostumerShema, type ShemaCostumer, TransactionShema, type ShemaTransaction, AddAdminSchema, type ShemaAddAdmin };