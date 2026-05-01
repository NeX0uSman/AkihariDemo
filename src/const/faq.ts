import { Category } from "@/types/category.type";

export const faqCategories: Category[] = [
  {
    id: "1",
    categoryTitle: "Zapisy i formalności",
    questions: [
      {
        q: "Jak zapisać się na kurs?",
        a: "Wypełnij formularz na stronie lub zadzwoń do nas. Przed rozpoczęciem kursu musisz uzyskać Profil Kandydata na Kierowcę (PKK) w Wydziale Komunikacji.",
      },
      {
        q: "Czy można płacić w ratach?",
        a: "Tak, oferujemy płatność w nieoprocentowanych ratach bez prowizji na czas trwania kursu.",
      },
    ],
  },
  {
    id: "2",
    categoryTitle: "Przebieg kursu",
    questions: [
      {
        q: "Ile godzin trwa kurs?",
        a: "Kurs obejmuje 30 godzin zajęć teoretycznych oraz 30 godzin praktycznej nauki jazdy.",
      },
      {
        q: "Kiedy odbywają się zajęcia teoretyczne?",
        a: "Zajęcia teoretyczne prowadzimy w czwartki (ul. Jackowskiego 22, MODENA) o 17:30–19:00 oraz w soboty 9:00–12:00.",
      },
      {
        q: "Na jakim samochodzie odbywa się jazda?",
        a: "Szkolimy na samochodach Kia Rio — takich samych jak na egzaminie państwowym w WORD.",
      },
      {
        q: "Czy macie własny plac manewrowy?",
        a: "Tak, posiadamy oświetlony plac manewrowy na terenie ośrodka. Nie tracimy czasu na dojazd — zajęcia praktyczne zaczynamy od razu przy ośrodku.",
      },
    ],
  },
  {
    id: "3",
    categoryTitle: "Egzamin i zdawalność",
    questions: [
      {
        q: "Jaka jest zdawalność w OSK Akinari?",
        a: "Nasza zdawalność wynosi 94% — jedna z najwyższych w Poznaniu, potwierdzona niezależnym rankingiem szkół jazdy.",
      },
      {
        q: "Co jeśli nie zdam egzaminu za pierwszym razem?",
        a: "Organizujemy gratisową lekcję z projekcją filmu przedstawiającego domniemane trasy egzaminacyjne, aby pokazać typowe pułapki na egzaminie.",
      },
      {
        q: "Czym jest System SPS?",
        a: "SPS to nowoczesna forma nauczania teorii z wykorzystaniem sprzętu audiowizualnego. Podręcznik kursanta jest zgodny z materiałami używanymi na zajęciach, co ułatwia powtórkę i przyswajanie przepisów.",
      },
    ],
  },
  {
    id: "4",
    categoryTitle: "Dodatkowe usługi",
    questions: [
      {
        q: "Czy mogę dokupić dodatkowe godziny jazdy?",
        a: "Tak, oferujemy jazdy dodatkowe w cenie 150 zł/h dla kursantów i absolwentów w dowolnym terminie.",
      },
      {
        q: "Czym jest rejestrator jazdy?",
        a: "Posiadamy rejestrator jazdy umożliwiający nagranie danej jazdy. Film można otrzymać na własność i analizować swoje manewry w domu.",
      },
      {
        q: "Czy jest kurs pierwszej pomocy?",
        a: "Tak, kurs pierwszej pomocy jest wliczony w cenę każdego kursu.",
      },
    ],
  },
]