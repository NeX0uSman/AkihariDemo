import Link from "next/link";

const NotFound = () => {
  return (
    <div className="bg-(--bg-secondary) w-full min-h-screen flex flex-col justify-center items-center gap-4">
      <p className="text-(--accent) font-bold text-8xl font-[syne]">404</p>
      <h1 className="text-3xl font-bold">Strona nie istnieje</h1>
      <p className="text-(--text-secondary) text-center">Wygląda na to, że się zgubiłeś — tak jak przed kursem jazdy.</p>
      <Link
        href="/"
        className="mt-4 px-6 py-3 bg-(--accent) hover:bg-(--accent-hover) transition-colors rounded-xl font-bold text-(--text-primary)"
      >
        Wróć na stronę główną
      </Link>
    </div>
  );
};

export default NotFound;