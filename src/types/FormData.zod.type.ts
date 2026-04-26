import * as z from "zod";

export const schema = z
  .object({
    imie_nazwisko: z
      .string()
      .min(1, { message: "Proszę wpisać swoje Imię i Nazwisko" })
      .refine((val) => val.trim().split(" ").length >= 2, {
        message: "Proszę wpisać imię i nazwisko",
      }),
    pesel: z
      .string()
      .length(11, { message: "PESEL musi mieć dokładnie 11 cyfr" })
      .regex(/^\d+$/, { message: "PESEL może zawierać tylko cyfry" }),
    kurs: z.string().min(1, { message: "Proszę wybrać kurs" }),
    telefon: z
      .string()
      .min(9, { message: "Numer musi mieć co najmniej 9 cyfr" })
      .max(15, { message: "Numer jest za długi" })
      .regex(/^[\d\s+\-()]+$/, { message: "Nieprawidłowy numer telefonu" })
      .refine((val) => val.replace(/\D/g, "").length >= 9, {
        message: "Numer musi mieć co najmniej 9 cyfr",
      }),
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
