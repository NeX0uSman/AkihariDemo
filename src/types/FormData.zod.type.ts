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
      .transform((val) => val.replace(/\D/g, ""))
      .refine(
        (val) =>
          val.length === 9 || (val.length === 11 && val.startsWith("48")),
        {
          message: "Podaj poprawny numer telefonu (9 cyfr)",
        },
      ),
    poPoludniowy: z.boolean(),
    weekendowy: z.boolean(),
    email: z.email({ message: "Nieprawidłowy email" }),
    zgoda: z.literal(true, { message: "Wymagana zgoda na przetwarzanie danych" }),
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
