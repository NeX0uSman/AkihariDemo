"use client";
import { DotIcon } from "@phosphor-icons/react";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="h-auto bg-(--bg-tertiary) w-full">
      {/*All page wrapper */}
      <section className="flex flex-col gap-7 items-center justify-around lg:w-[70vw] md:w-[90vw] w-full py-16 px-6 md:py-24 mx-auto flex-1 md:flex-row">
        
        {/* Левая колонка (Добавлен общий fadeUpHeader) */}
        <div className="flex flex-col items-start gap-5 md:w-[40vw] xl:w-[30vw] animate-fadeUpHeader">
          
          {/* Pill: Добавлено свечение при наведении и пульсация иконки */}
          <div className="flex flex-row justify-center items-center bg-(--pill-bg) border border-(--pill-border) rounded-full text-xs md:text-base font-medium px-2 hover:shadow-[0_0_15px_rgba(234,88,12,0.2)] hover:border-(--accent) transition-all duration-300 cursor-default">
            <DotIcon size={21} weight="bold" color="#EA580C" className="animate-pulse" />
            <span className="text-(--pill-text) pr-3">Poznań — od 2007 roku </span>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-4xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-6xl">
              Prawo jazdy zdane<br className=""></br>
              {/* Текст: Добавлено подчеркивание, выезжающее при наведении (через after:) */}
              <span className="text-(--accent) relative inline-block after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[3px] after:bg-(--accent) after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">
                {" "}za pierwszym razem
              </span>
            </h1>
            <p className="text-(--text-secondary) md:text-(--text-muted) md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl">
              Profesjonalni instruktorzy i najwyższa zdawalność w Poznaniu.
              <br></br>
              Dołącz do 1200+ absolwentów.
            </p>
          </div>

          <div className="hidden md:flex flex-row gap-4 justify-between w-auto">
            {/* Кнопка 1: Левитация и цветная тень при наведении */}
            <Link href="/enrollment" className="w-[10vw] md:w-auto xl:w-[12vw] 2xl:w-[10vw] flex justify-center items-center border border-(--accent) rounded-xl min-h-auto p-3 bg-(--accent) hover:bg-(--accent-hover) hover:-translate-y-1 hover:shadow-[0_5px_20px_rgba(234,88,12,0.4)] transition-all duration-300 text-center">
              Zapisz sie online
            </Link>
            {/* Кнопка 2: Левитация и осветление бордера */}
            <Link href="/courses" className="w-[10vw] md:w-auto xl:w-[12vw] 2xl:w-[10vw] flex justify-center items-center border border-(--border) rounded-xl min-h-auto p-3 bg-(--bg-secondary) hover:bg-(--bg-tertiary) hover:-translate-y-1 hover:border-(--text-muted) transition-all duration-300">
              Sprawdz cennik
            </Link>
          </div>

          {/* Статистика: Добавлен твой класс card-glow и drop-shadow на цифры */}
          <div className="flex flex-row bg-(--bg-secondary) justify-around border border-(--border) rounded-2xl w-full card-glow transition-colors duration-300">
            <section className="flex flex-col items-center justify-center gap-1 p-2 w-1/3">
              <p className="text-(--accent) font-bold text-2xl drop-shadow-[0_0_8px_rgba(234,88,12,0.3)]">94%</p>
              <p className="text-xs text-(--text-secondary) md:text-[10px]">zdawalność</p>
            </section>
            <section className="flex flex-col items-center justify-center gap-1 p-2 w-1/3 border-r border-l border-(--border)">
              <p className="text-(--accent) font-bold text-2xl drop-shadow-[0_0_8px_rgba(234,88,12,0.3)]">17+</p>
              <p className="text-xs text-(--text-secondary) md:text-[10px]">lat na rynku</p>
            </section>
            <section className="flex flex-col items-center justify-center gap-1 p-2 w-1/3">
              <p className="text-(--accent) font-bold text-2xl drop-shadow-[0_0_8px_rgba(234,88,12,0.3)]">1200+</p>
              <p className="text-xs text-(--text-secondary) md:text-[10px]">absolwentów</p>
            </section>
          </div>
        </div>

        {/* Правая колонка (Анимация выезда снизу с задержкой 0.2s) */}
        <section 
          className="flex flex-col w-full gap-9 md:w-[35vw] lg:w-[20vw] animate-fadeUp"
          style={{ animationDelay: "0.2s", animationFillMode: "both" }}
        >
          {/* Главная карточка: Добавлен твой card-glow и эффект поднятия hover:-translate-y-2 */}
          <div onAnimationEnd={(e) => (e.currentTarget.style.animation = "none")} className="p-4 flex flex-col justify-around gap-2 md:gap-7 bg-(--bg-secondary) w-full rounded-xl border border-(--border) card-glow-whyUs hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all duration-300">
            
            {/* Внутренние плашки: Подсветка бордера при наведении */}
            <div className="flex flex-col gap-2 md:border md:border-(--border) md:rounded-xl md:p-2 md:bg-(--bg-tertiary) hover:border-(--accent)/40 transition-colors duration-300">
              <p className="text-xs text-(--text-secondary)">Najbliższy kurs</p>
              <div className="flex flex-row justify-between">
                <div className="flex flex-col items-start">
                  <p className="text-xs text-(--text-secondary)  md:text-xl">
                    Start
                  </p>
                  <p className="text-sm  md:text-xl">15 maja 2026</p>
                  {/* Пульсация на срочных местах */}
                  <p className="text-sm text-(--accent) md:text-xl hidden md:block">
                    3 miejsca wolne
                  </p>
                </div>
                <div className="flex flex-col items-end md:hidden">
                  <p className="text-xs text-(--text-secondary)  md:text-xl">
                    Cena
                  </p>
                  <p className="text-sm  md:text-xl">4000 zł</p>
                </div>
              </div>
            </div>

            <div className="hidden flex-col gap-2 md:border md:border-(--border) md:rounded-xl md:p-2 md:bg-(--bg-tertiary) md:flex hover:border-(--accent)/40 transition-colors duration-300">
              <p className="text-xs text-(--text-secondary)">Najbliższy kurs</p>
              <div className="flex flex-row justify-between">
                <div className="flex flex-col items-start">
                  <p className="text-xs text-(--text-secondary)  md:text-xl">
                    Cena
                  </p>
                  <p className="text-sm  md:text-xl">4000 zł</p>
                  <p className="text-sm  text-(--text-secondary) md:text-md">
                    w tym 30h wykładów + 30h jazdy
                  </p>
                </div>
              </div>
            </div>

            <p className="text-(--accent) text-sm md:hidden">
              Zostały 3 ostatnie miejsca
            </p>
            
            {/* Кнопка записи в карточке: Тень и левитация */}
            <Link href="/enrollment" className="w-full border border-(--border) rounded-xl min-h-auto p-2 bg-(--accent) text-center hover:bg-(--accent-hover) hover:shadow-[0_0_15px_rgba(234,88,12,0.4)] hover:-translate-y-0.5 transition-all duration-300">
              Zarezerwuj miejsce
            </Link>
            
            {/* Телефон: Подсветка текста */}
            <span className="text-(--text-muted) hidden flex-row justify-center md:flex hover:text-(--text-primary) transition-colors duration-300 cursor-pointer">
              lub zadzwoń: <a href="tel:+48 50 993 0923">+48 50 993 0923</a>
            </span>
          </div>

          <Link href="/courses" className="text-center block text-xl min-h-auto p-1.5 w-full border border-(--border) rounded-xl md:hidden hover:bg-(--bg-tertiary) hover:-translate-y-1 transition-all duration-300">
            Sprawdź pełny cennik
          </Link>
        </section>
      </section>
    </section>
  );
};

export default Hero;