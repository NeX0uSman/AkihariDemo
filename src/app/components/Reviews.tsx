import React from "react";

const Reviews = () => {
  return (
    <section className="h-auto bg-(--bg-tertiary) py-5 px-6 md:py-24 mx-auto flex flex-col gap-3 border-b border-(--border)">
      {/*Top part */}
      <div className="w-full flex flex-row justify-between items-center">
        <aside className="flex flex-col gap-2">
          <div className="rounded-xl w-full h-auto md:text-center border border-(--accent-border) bg-(--pill-bg) p-1 text-(--accent) ">
            Opinie
          </div>
          <p className="font-bold text-xl">Co mówią o nas</p>
        </aside>
        <aside className="flex flex-col gap-1 items-end">
          <h1 className="text-(--accent) text-2xl">4.9</h1>
          <p className="text-(--accent)">★★★★★</p>
        </aside>
      </div>
      {/*Reviews: */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1 bg-(--bg-secondary) p-2 rounded-xl border border-(--border)">
          <div>
            <p className="text-(--accent)">★★★★★</p>
            <p className="text-(--text-muted)">
              "Zdałam za pierwszym razem! Instruktor był super cierpliwy i
              wszystko wytłumaczył."
            </p>
          </div>
          <div className="flex flex-row items-center justify-items-start gap-2">
            <div className="p-2 bg-(--pill-bg) border border-(--pill-border) rounded-full text-(--pill-text) text-xs">
              KW
            </div>
            <div className="flex flex-col">
              <p className="font-bold">Karolina W.</p>
              <p className="text-(--text-secondary)">Marzec 2025</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1 bg-(--bg-secondary) p-2 rounded-xl border border-(--border)">
          <div>
            <p className="text-(--accent)">★★★★★</p>
            <p className="text-(--text-muted)">
              "Profesjonalne podejście i super atmosfera. Elastyczne godziny
              były kluczowe."
            </p>
          </div>
          <div className="flex flex-row items-center justify-items-start gap-2">
            <div className="p-2 bg-(--pill-bg) border border-(--pill-border) rounded-full text-(--pill-text) text-xs">
              MT
            </div>
            <div className="flex flex-col">
              <p className="font-bold">Michał T.</p>
              <p className="text-(--text-secondary)">Luty 2025</p>
            </div>
          </div>
        </div>
      </div>

      {/*CTA */}
      <div className="bg-(--accent) flex flex-col justify-center items-center mt-5 gap-4 h-44 p-4 rounded-xl">
        <div className="flex flex-col gap-2 items-center">
          <p className="font-bold text-xl">Gotowy żeby zacząć?</p>
          <p className="text-sm">15 maja — ostatnie miejsca na kurs.</p>
        </div>
        <button className="bg-(--background) text-(--accent) h-12 w-full rounded-xl font-bold">
          Zapisz się teraz
        </button>
      </div>

    </section>
  );
};

export default Reviews;
