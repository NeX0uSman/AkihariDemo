import * as z from "zod";

export const schema = z.object({
  imie_nazwisko: z
    .string()
    .min(1, { message: "Proszę wpisać swoje Imie i Nazwisko" }),
  pesel: z.number().min(11, { message: "Pesel musi mieć 11 znaków" }).max(11, { message: "Pesel musi mieć 11 znaków" }),
  kurs: z.string().min(1, {message: 'Proszę wybrać kurs'}),
  telefon: z.number().min(9, { message: "Numer musi mieć 9 znaków" }).max(9, { message: "Numer musi mieć 9 znaków" }),
  poPoludniowy: z.boolean(),
  weekendowy: z.boolean(),
  email: z.email({ message: "Nieprawidłowy email" }),
  uwagi: z.string().max(255, {message: 'Pole "Uwagi" może zawierać maksymalnie 255 znaków'}).optional(),
}).refine(
  (data) => data.poPoludniowy || data.weekendowy,
  { message: "Wybierz co najmniej jeden termin", path: ["poPoludniowy"] },
);
