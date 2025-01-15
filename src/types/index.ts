import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string({ required_error: 'Email é necessário' })
    .min(1, 'Email é necessário')
    .email('Email inválido'),
  password: z
    .string({ required_error: 'Senha é necessária' })
    .min(1, 'Senha é necessária')
    .min(8, 'Deve possuir no mínimo 8 caracteres')
    .max(32, 'Quantidade de caracteres excedido'),
})

export const InputsFormAuthSchema = z.object({
  email: z
    .string()
    .email({ message: 'Endereço de email inválido' })
    .toLowerCase(),
  password: z.string().min(6, { message: '* Senha requerida' }),
})

export type InputsFormAuth = z.infer<typeof InputsFormAuthSchema>