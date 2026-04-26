import * as z from "zod";

export const schema = z
  .object({
    imie_nazwisko: z
      .string()
      .min(1, { message: "Proszę wpisać swoje Imie i Nazwisko" }),
    pesel: z
      .string()
      .length(11, { message: "PESEL musi mieć dokładnie 11 cyfr" })
      .regex(/^\d+$/, { message: "PESEL może zawierać tylko cyfry" }),
    kurs: z.string().min(1, { message: "Proszę wybrać kurs" }),
    telefon: z
      .string()
      .min(9, { message: "Numer musi mieć co najmniej 9 cyfr" })
      .regex(/^\d+$/, { message: "Numer może zawierać tylko cyfry" }),
    poPoludniowy: z.boolean(),
    weekendowy: z.boolean(),
    email: z.email({ message: "Nieprawidłowy email" }),
    uwagi: z
      .string()
      .max(255, {
        message: 'Pole "Uwagi" może zawierać maksymalnie 255 znaków',
      })
      .optional(),
  })
  .refine((data) => data.poPoludniowy || data.weekendowy, {
    message: "Wybierz co najmniej jeden termin",
    path: ["poPoludniowy"],
  });
