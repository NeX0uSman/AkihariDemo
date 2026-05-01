import Link from "next/link";
import React from "react";

const Reviews = () => {
  return (
    <section className="h-auto bg-(--bg-tertiary) py-5 px-6 md:py-24 mx-auto flex flex-col gap-3 border-b border-(--border) w-full">
      {/*Top part */}
      <div className="w-full flex flex-row justify-between items-center animate-fadeUpHeader">
        <aside className="flex flex-col gap-2">
          <div className="rounded-xl w-full h-auto md:text-center border border-(--accent-border) bg-(--pill-bg) p-1 text-(--accent) transition-transform hover:scale-105 duration-300">
            Opinie
          </div>
          <p className="font-bold text-xl">Co mówią o nas</p>
        </aside>
        <aside className="flex flex-col gap-1 items-end">
          <p className="text-(--accent) text-2xl drop-shadow-[0_0_8px_rgba(234,88,12,0.3)]">
            4.9
          </p>
          <p className="text-(--accent)">★★★★★</p>
        </aside>
      </div>

      {/*Reviews: */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          {
            initials: "FF",
            name: "Franciszek F.",
            date: "Grudzień 2025",
            text: "Usłyszałem o szkółce w polecenia i szczerze nie spodziewałem się tak przemiłych jak i kompetentnych instruktorów. Rady które dostałem pozwoliły mi zdać egzamin za pierwszym razem. Serdecznie polecam",
          },
          {
            initials: "JK",
            name: "Jakub K.",
            date: "Listopad 2025",
            text: "Bardzo polecam tę szkołę. Szybko nabrałem pewności za kierownicą. Pan Marek wszystko dobrze tłumaczył i pomagał zrozumieć trudne sytuacje na drodze. Dzięki niemu dobrze przygotowałem się do egzaminuni i zdałem za pierwszym razem.",
          },
          {
            initials: "ZK",
            name: "Zuzia K.",
            date: "Śierpień 2023",
            text: "Bardzo polecam!! nauka z Panem Sławkiem to sama przyjemność i zero stresu podczas jazdy. Profesjonalne podejście do kursantów, dużo przydatnych wskazówek. Prawo jazdy zdane za pierwszym razem :))",
          },
        ].map((r, index) => (
          <div
            key={r.name}
            style={{
              animationDelay: `${0.1 + index / 10}s`,
              animationFillMode: "both",
            }}
            className="flex flex-col gap-2 bg-(--bg-secondary) p-3 rounded-xl border border-(--border) card-glow-whyUs animate-fadeUp"
          >
            <p className="text-(--accent)">★★★★★</p>
            <p className="text-(--text-muted) text-sm">"{r.text}"</p>
            <div className="flex flex-row items-center gap-2 mt-1">
              <div className="p-2 bg-(--pill-bg) border border-(--pill-border) rounded-full text-(--pill-text) text-xs transition-transform group-hover:scale-110">
                {r.initials}
              </div>
              <div>
                <p className="font-bold text-sm">{r.name}</p>
                <p className="text-(--text-secondary) text-xs">{r.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA: Добавлена тень, плавное увеличение и hover на кнопку */}
      <div
        style={{ animationDelay: `0.5s`, animationFillMode: "both" }}
        className="bg-(--accent) flex flex-col justify-center items-center mt-5 gap-4 p-8 rounded-xl md:flex-row md:justify-between shadow-[0_0_20px_rgba(234,88,12,0.2)] animate-fadeUp"
      >
        <div className="flex flex-col gap-1 text-(--text-primary)">
          <p className="font-bold text-xl">Gotowy żeby zacząć?</p>
          <p className="text-sm opacity-90 italic">
            15 maja — ostatnie miejsca na kurs.
          </p>
        </div>
        <Link
          href="/enrollment"
          className="bg-white text-(--accent) px-8 py-3 rounded-xl font-bold w-full md:w-auto text-center hover:bg-(--pill-bg) hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
        >
          Zapisz się teraz
        </Link>
      </div>
    </section>
  );
};

export default Reviews;
