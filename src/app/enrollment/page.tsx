"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { courses } from "@/const/courses";
import { Button } from "@/components/ui/button";
import { PhoneIcon } from "lucide-react";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { schema } from "@/types/FormData.zod.type";
import Pill from "@/components/Pill";
import { WarningIcon } from "@phosphor-icons/react";
import Link from "next/link";

type FormData = z.infer<typeof schema>;

const Page = () => {
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("https://formspree.io/f/mnjlozel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = res.json();
      console.log("Result: ", result);
      if (!res.ok) {
        console.log("Formspree Error: ", result);
        setError(true);
        return;
      }
      setSubmitted(true);
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };

  if (submitted) {
    return (
      <div className="animate-fadeUp bg-(--bg-secondary) w-full min-h-screen flex flex-col justify-center items-center gap-4">
        <div className="text-6xl">🎉</div>
        <h2 className="text-4xl font-bold">Dziękujemy!</h2>
        <p className="text-(--text-secondary)">
          Oddzwonimy do Ciebie w ciągu 24h.
        </p>
        <Button className="p-2">
          <Link href="/">Wróć na stronę główną</Link>
        </Button>
      </div>
    );
  }

  if (error) {
    return (
      <div className="animate-fadeUp bg-(--bg-secondary) w-full min-h-screen flex flex-col justify-center items-center gap-4 text-center px-4">
        <WarningIcon
          size={52}
          weight="light"
          className="p-2 bg-(--accent-bg) border border-(--accent-border) rounded-xl"
          color="#EA580C"
        />

        <h2 className="text-3xl md:text-4xl font-bold">
          Wystąpił problem podczas wysyłania formularza
        </h2>

        <p className="text-(--text-secondary) max-w-md">
          Nie udało się wysłać wiadomości. Spróbuj ponownie za chwilę lub
          skontaktuj się z nami telefonicznie.
        </p>

        <Button className="p-2">
          <a href="tel:+48 50 993 0923">Zadzwoń teraz</a>
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-(--bg-secondary) w-full min-h-screen flex flex-col justify-start items-center gap-6 p-8">
      <Pill text={"ZAPISY 2026"} />
      <div
        style={{
          animationDelay: `0.2s`,
          animationFillMode: "both",
        }}
        className="flex flex-col gap-2 justify-center items-center animate-fadeUpHeader"
      >
        <h1 className="text-[clamp(36px,5vw,56px)] font-bold xl:font-extrabold text-center">
          Zapisz się na <span className="text-(--accent)">kurs</span>
        </h1>
        <p className="text-(--text-secondary)">
          Wypełnij formularz — oddzwonimy w ciągu 24h
        </p>
      </div>

      <form
        style={{
          animationDelay: `0.2s`,
          animationFillMode: "both",
        }}
        onSubmit={handleSubmit(onSubmit)}
        className={`bg-(--bg-tertiary) border border-(--border) rounded-2xl p-8 w-full max-w-2xl flex flex-col gap-8 animate-fadeUp`}
      >
        <div className="flex flex-col gap-4">
          <p className="text-(--text-muted) text-xs uppercase tracking-widest pb-2 border-b border-(--border)">
            DANE OSOBOWE
          </p>

          <div
            style={{ animationDelay: "0.1s" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 animation-fadeUp"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="">Imie i Nazwisko <span className="text-(--text-secondary)">*</span></label>
              <Input
                className="font-nunito"
                {...register("imie_nazwisko")}
                placeholder="Jan Kowalski"
              />
              {errors.imie_nazwisko && (
                <p className="text-red-500 text-sm">
                  {errors.imie_nazwisko.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">PESEL <span className="text-(--text-secondary)">*</span></label>
              <Input
                type="number"
                className="font-nunito"
                {...register("pesel")}
                placeholder="752XXXXXXXX"
              />
              {errors.pesel && (
                <p className="text-red-500 text-sm">{errors.pesel.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Numer telefonu <span className="text-(--text-secondary)">*</span></label>
              <Input
                type="number"
                className="font-nunito"
                {...register("telefon")}
                placeholder="76XXXXXXX"
              />
              {errors.telefon && (
                <p className="text-red-500 text-sm">{errors.telefon.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Email <span className="text-(--text-secondary)">*</span></label>
              <Input
                type="email"
                className="font-nunito"
                {...register("email")}
                placeholder="JanNowak@email.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
          </div>
        </div>
        <div
          className="flex flex-col gap-4 animation-fadeUp"
          style={{ animationDelay: "0.2s" }}
        >
          <p className="text-(--text-muted) text-xs uppercase tracking-widest pb-2 border-b border-(--border)">
            WYBÓR KURSU <span className="text-(--text-secondary)">*</span>
          </p>
          <Controller
            name="kurs"
            control={control}
            defaultValue="Kurs Express"
            render={({ field }) => {
              return (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {courses
                    .filter((course) => course.type == "course")
                    .map((course) => {
                      return (
                        <Card
                          className={`cursor-pointer transition-all active:scale-95 ${
                            field.value === course.name
                              ? "border border-(--accent) bg-(--accent-dim)"
                              : "border border-(--border)"
                          }`}
                          onClick={() => field.onChange(course.name)}
                          key={course.id}
                        >
                          <CardHeader>
                            <CardTitle className="text-2xl font-bold">
                              {course.name}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-(--accent) font-bold">
                              {course.price}
                            </p>
                            <p className="text-(--text-muted) text-sm">
                              {course.length}
                            </p>
                          </CardContent>
                        </Card>
                      );
                    })}
                </div>
              );
            }}
          />
          {errors.kurs && (
            <p className="text-red-500 text-sm">{errors.kurs.message}</p>
          )}
        </div>

        <div
          className="flex flex-col gap-4 animation-fadeUp"
          style={{ animationDelay: "0.3s" }}
        >
          <p className="text-(--text-muted) text-xs uppercase tracking-widest pb-2 border-b border-(--border)">
            TERMIN ZAJĘĆ <span className="text-(--text-secondary)">*</span>
          </p>
          <div className="flex flex-col gap-3">
            <label className="flex items-center gap-2 text-sm text-(--text-secondary) cursor-pointer">
              <input
                type="checkbox"
                {...register("poPoludniowy")}
                className="w-4 h-4 accent-orange-500"
              />
              Kurs popołudniowy (czwartek 17:30)
            </label>
            <label className="flex items-center gap-2 text-sm text-(--text-secondary) cursor-pointer">
              <input
                type="checkbox"
                {...register("weekendowy")}
                className="w-4 h-4 accent-orange-500"
              />
              Kurs weekendowy (sobota 9:00)
            </label>
          </div>
          {errors.poPoludniowy && (
            <p className="text-red-500 text-sm">
              {errors.poPoludniowy.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-(--text-muted) text-xs uppercase tracking-widest pb-2 border-b border-(--border)">
            Dodatkowe informacje
          </p>
          <div className="">
            <textarea
              {...register("uwagi")}
              placeholder="Np. preferowane godziny, pytania..."
              name=""
              id=""
              className="font-nunito bg-(--bg-primary) border border-(--border) rounded-xl p-3 text-sm text-(--text) resize-none w-full h-36 outline-none focus:border-(--accent)"
            ></textarea>
            {errors.uwagi && (
              <p className="text-red-500 text-sm">{errors.uwagi.message}</p>
            )}
          </div>
        </div>
        <div className="flex items-center gap-3 bg-(--accent-bg) border border-(--accent-border) rounded-xl p-4">
          <PhoneIcon size={20} color="#EA580C" />
          <p className="text-sm text-(--text-secondary)">
            Wolisz zadzwonić? <br className="block sm:hidden" />
            <a href="tel:+48 50 993 0923" className="text-(--accent) font-bold">
              +48 50 993 0923
            </a>
          </p>
        </div>
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            {...register("zgoda")}
            className="w-4 h-4 mt-1 accent-orange-500"
          />
          <p className="text-sm text-(--text-secondary)">
            Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z{" "}
            <a
              rel="noopener noreferrer"
              href="/politykaPrywatnosci.pdf"
              target="_blank"
              className="text-(--accent) hover:underline"
            >
              Polityką prywatności
            </a>{" "}
            oraz akceptuję{" "}
            <a
              rel="noopener noreferrer"
              href="/regulamin.pdf"
              target="_blank"
              className="text-(--accent) hover:underline"
            >
              Regulamin
            </a>
            . *
          </p>
        </div>
        {errors.zgoda && (
          <p className="text-red-500 text-sm">{errors.zgoda.message}</p>
        )}
        <button
          type="submit"
          className="border cursor-pointer border-(--border) rounded-xl min-h-auto p-2 bg-(--accent) text-center hover:bg-(--accent-hover) transition-all duration-200"
        >
          Wyślij zgłoszenie
        </button>
        <p className="text-(--text-secondary) text-sm">* - Dane obowiązkowe do uzupelnienia</p>
      </form>
    </div>
  );
};

export default Page;
