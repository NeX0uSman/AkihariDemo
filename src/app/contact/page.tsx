"use client";
import Pill from "@/components/Pill";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ClockIcon } from "@phosphor-icons/react";
import { EnvelopeIcon } from "@phosphor-icons/react/dist/ssr";

import { MapPinIcon, PhoneIcon } from "lucide-react";
import React from "react";

const page = () => {
  const contactInfo = [
    {
      icon: <PhoneIcon size={36} color="#EA580C" />,
      label: "Telefon",
      value: "+48 61 XXX XXXX",
      content: "Pon–Pt: 9:00 – 18:00",
      cta: "Zadzwoń teraz",
      href: "tel:+4861XXXXXXX",
    },

    {
      icon: <EnvelopeIcon size={36} weight="light" color="#EA580C" />,
      label: "Email",
      value: "biuro@akinari.eu",
      content: "Odpowiadamy w ciągu 24h",
      cta: "Napisz do nas",
      href: "mailto:artemkirpotenko@gmail.com",
    },

    {
      icon: <MapPinIcon size={36} color="#EA580C" />,
      label: "Adres",
      value: "ul. Jackowskiego 22, Poznań",
      content: "61-000 Poznań (MODENA)",
      cta: "Otwórz w mapach",
      href: "https://maps.app.goo.gl/wwS5nSSYcbjJiE4dA",
    },

    {
      icon: <ClockIcon size={36} weight="light" color="#EA580C" />,
      label: "Godziny Zajęć",
      schedule: [
        { day: "Czwartek", from: "17:30", to: "19:00" },
        { day: "Sobota", from: "9:00", to: "12:00" },
      ],
      biuro: [
        {
          name: "Biuro",
          day: "Śr-Cz",
          from: "16:00",
          to: "18:00",
        },
      ],
      href: null,
    },
  ];

  return (
    <div className="bg-(--bg-secondary) w-full min-h-screen flex flex-col justify-start items-center gap-6 p-8">
      <Pill text="KONTAKT" />

      <div className="flex flex-col gap-2 justify-center items-center animate-fadeUpHeader">
        <h1 className="text-[clamp(36px,5vw,56px)] font-extrabold text-center">
          Skontaktuj się <span className="text-(--accent)">z nami</span>
        </h1>
        <p className="text-(--text-secondary) text-center">
          Jesteśmy do Twojej dyspozycji — zadzwoń, napisz lub wpadnij do nas
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl w-auto">
        {contactInfo.map((card, index) => {
          return (
            <Card
              key={index}
              style={{
                animationDelay: `${(index + 1) * 0.1}s`,
                animationFillMode: "both",
              }}
              className="card-glow border border-(--border) flex flex-col gap-2 justify-start"
            >
              <CardHeader>
                <span className="flex flex-row items-start p-2 bg-(--accent-bg) border border-(--accent-border) rounded-xl w-fit">
                  {card.icon}
                </span>
                <p className="text-(--text-muted) font-bold">
                  {card.label.toUpperCase()}
                </p>
                <CardTitle className="text-2xl">{card.value}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-(--text-secondary)">{card.content}</p>

                {/*For Godziny Zajec only */}
                {card.schedule && (
                  <div className="grid grid-cols-2 gap-2 mb-2">
                    {card.schedule.map((day, index) => {
                      return (
                        <div
                          key={index}
                          className="flex flex-col p-2 bg-(--bg-secondary) rounded-xl border border-(--border) p-2"
                        >
                          <span className="text-white text-xl">{day.day}:</span>
                          <span className="text-(--accent) font-bold">
                            {" "}
                            {day.from} – {day.to}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}
                {card.biuro && (
                  <div className="grid grid-cols-2 gap-2">
                    {card.biuro.map((day, index) => {
                      return (
                        <div
                          key={index}
                          className="flex flex-col p-2 bg-(--bg-secondary) rounded-xl border border-(--border) w-auto"
                        >
                          <span className="text-white text-xl">{day.name}</span>
                          <div>
                            <span className="text-(--text-secondary)">
                              {day.day}:{" "}
                            </span>
                            <span className="text-(--accent) font-bold">
                              {" "}
                              {day.from} – {day.to}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
                {/*For Godziny Zajec only */}

                {/*For CTA*/}
                {card.cta ? (
                  <a
                    target="_blank"
                    className="flex items-center gap-1 text-(--accent) group text-md"
                    href={card.href}
                  >
                    <span className="cursor-pointer">{card.cta}</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      {" "}
                      →
                    </span>
                  </a>
                ) : (
                  ""
                )}
                {/*For CTA*/}
              </CardContent>
            </Card>
          );
        })}
      </div>
      <div style={{
        animationDelay: `${(contactInfo.length + 2) * 0.1}s`
      }} className="rounded-xl card-glow border border-(--border) animate-fadeUpHeader w-full max-w-3xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2433.8306277857914!2d16.9001487!3d52.409745799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470444c918891f93%3A0x4cb0834abf7155cd!2sOSK%20AKINARI!5e0!3m2!1sru!2spl!4v1777237117007!5m2!1sru!2spl"
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="opacity-0 transition-opacity duration-500"
          onLoad={(e) => e.currentTarget.classList.replace('opacity-0', 'opacity-100')}
        ></iframe>
        <div className="flex flex-row justify-between items-center p-5">
          <div className="flex flex-col">
            <p className="font-bold text-md text-white">OSK Akinari</p>
            <p className="text-(--text-muted)">
              ul. Jackowskiego 22 (MODENA), 61-000 Poznań
            </p>
          </div>
          <Button className="p-2">Nawiguj →</Button>
        </div>
      </div>
    </div>
  );
};

export default page;
