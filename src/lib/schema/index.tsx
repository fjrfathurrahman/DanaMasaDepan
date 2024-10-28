import { z } from "zod";

const AuthenticationShema = z.object({
  name: z.string().min(3).max(20),
  email: z.string().email().min(3).max(50),
  password: z.string().min(3),
})

type ShemaAuthentication = z.infer<typeof AuthenticationShema>;

export { AuthenticationShema, type ShemaAuthentication };