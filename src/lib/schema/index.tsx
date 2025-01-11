import { z } from "zod";

const ACCEPTED_IMAGE_TYPES = [ "image/jpeg", "image/jpg", "image/png", "image/gif", "image/svg+xml" ];

const AuthenticationShema = z.object({
  name: z.string().min(3).max(20),
  email: z.string().email().min(3).max(50),
  password: z.string().min(3),
})

type ShemaAuthentication = z.infer<typeof AuthenticationShema>;

const CostumerShema = z.object({
  nisn: z.string().length(11, 'NISN harus 11 karakter'),
  name: z.string().min(3, 'Nama tidak boleh kosong atau kurang dari 3 karakter').max(500, 'Nama maksimal 500 karakter'),
  email: z.string().email({message: 'Format email salah'}),
  phone: z.string().min(8, 'Nomor minimal 8 karakter').max(15, 'Nomor maksimal 15 karakter'),
  gender: z.enum(['Laki-laki', 'Perempuan', ''], { message: 'Pilih salah satu jenis kelamin' }),
  major: z.enum(['Akuntansi dan Keuangan Lembaga', 'Pengembangan Perangkat Lunak dan Gim', 'Teknik Jaringan Komputer dan Telekomunikasi', ''], { message: 'Pilih salah satu jurusan'}),
  class: z.enum(['X', 'XI', 'XII', ''], { message: 'Pilih salah satu kelas' }),
  image: z.custom<FileList>().refine((files) =>!files || ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type), "Hanya format .jpg, .jpeg, .png, .gif dan .svg yang didukung"),
  address: z.string().min(3, 'Alamat tidak boleh kosong atau kurang dari 3 karakter').max(1000, 'Alamat maksimal 1000 karakter'),
})

type ShemaCostumer = z.infer<typeof CostumerShema>;

const AdminSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 8 characters"),
  role: z.enum(["admin", "teacher", "student", "superadmin"]),
  image: z.custom<FileList>().refine((files) =>!files || ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type), "Hanya format .jpg, .jpeg, .png, .gif dan .svg yang didukung"),
})

type SchemaAdmin = z.infer<typeof AdminSchema>

const TransactionShema = z.object({
  customer_id: z.string(),
  type: z.string(),
  amount: z.string(),
})

type ShemaTransaction = z.infer<typeof TransactionShema>;

const ContactUsShema = z.object({
  subject: z.string().min(3, 'Subject minimal 3 karakter').max(225, 'Subject maksimal 225 karakter'),
  name: z.string().min(3, 'Nama minimal 3 karakter').max(225, 'Nama maksimal 225 karakter'),
  email: z.string().email().min(3, 'Email minimal 3 karakter').max(225, 'Email maksimal 225 karakter'),
  message: z.string().min(3, 'Pesan minimal 3 karakter'),
})

type ShemaContactUs = z.infer<typeof ContactUsShema>;

export { AuthenticationShema, type ShemaAuthentication, CostumerShema, type ShemaCostumer, TransactionShema, type ShemaTransaction, AdminSchema, type SchemaAdmin, ContactUsShema, type ShemaContactUs };