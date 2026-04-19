import Link from "next/link";
import React from "react";

const Reviews = () => {
  return (
    <section className="h-auto bg-(--bg-tertiary) py-5 px-6 md:py-24 mx-auto flex flex-col gap-3 border-b border-(--border) w-full">
      {/*Top part */}
      <div className="w-full flex flex-row justify-between items-center">
        <aside className="flex flex-col gap-2">
          <div className="rounded-xl w-full h-auto md:text-center border border-(--accent-border) bg-(--pill-bg) p-1 text-(--accent) ">
            Opinie
          </div>
          <p className="font-bold text-xl">Co mówią o nas</p>
        </aside>
        <aside className="flex flex-col gap-1 items-end">
          <p className="text-(--accent) text-2xl">4.9</p>
          <p className="text-(--accent)">★★★★★</p>
        </aside>
      </div>
      {/*Reviews: */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          {
            initials: "KW",
            name: "Karolina W.",
            date: "Marzec 2025",
            text: "Zdałam za pierwszym razem! Instruktor był super cierpliwy i wszystko wytłumaczył.",
          },
          {
            initials: "MT",
            name: "Michał T.",
            date: "Luty 2025",
            text: "Profesjonalne podejście i super atmosfera. Elastyczne godziny były kluczowe.",
          },
          {
            initials: "PK",
            name: "Piotr K.",
            date: "Styczeń 2025",
            text: "17 lat na rynku i widać to w jakości. Instruktor spokojny i konkretny.",
          },
        ].map((r) => (
          <div
            key={r.name}
            className="flex flex-col gap-2 bg-(--bg-secondary) p-3 rounded-xl border border-(--border)"
          >
            <p className="text-(--accent)">★★★★★</p>
            <p className="text-(--text-muted) text-sm">"{r.text}"</p>
            <div className="flex flex-row items-center gap-2 mt-1">
              <div className="p-2 bg-(--pill-bg) border border-(--pill-border) rounded-full text-(--pill-text) text-xs">
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

      {/* CTA */}
      <div className="bg-(--accent) flex flex-col justify-center items-center mt-5 gap-4 p-8 rounded-xl md:flex-row md:justify-between">
        <div className="flex flex-col gap-1">
          <p className="font-bold text-xl">Gotowy żeby zacząć?</p>
          <p className="text-sm opacity-80">
            15 maja — ostatnie miejsca na kurs.
          </p>
        </div>
        <Link
          href=""
          className="bg-white text-(--accent) px-8 py-3 rounded-xl font-bold w-full md:w-auto text-center hover:bg-[#c5c5c5] transition-all duration-200"
        >
          Zapisz się teraz
        </Link>
      </div>
    </section>
  );
};

export default Reviews;
