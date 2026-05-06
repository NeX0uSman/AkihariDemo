"use client";
import { FacebookLogoIcon, YoutubeLogoIcon } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../public/akinariLogo.webp";

const navLinks = [
  { href: "/", label: "Strona główna" },
  { href: "/courses", label: "Kursy i cennik" },
  { href: "/instructors", label: "Instruktorzy" },
  { href: "/enrollment", label: "Zapisy" },
  { href: "/contact", label: "Kontakt" },
  { href: "/FAQ", label: "FAQ" },
];

const contactLinks = [
  { label: "Telefon", value: "+48 50 993 0923", href: "tel:+48509930923" },
  { label: "Email", value: "biuro@akinari.eu", href: "mailto:biuro@akinari.eu" },
  { label: "Adres", value: "ul. Jackowskiego 22, 61-000 Poznań (MODENA)", href: "https://maps.app.goo.gl/wwS5nSSYcbjJiE4dA" },
  { label: "Zajęcia", value: "Czw 17:30 · Sob 9:00", href: null },
];

const Footer = () => {
  return (
    <footer className="bg-(--bg-primary) border-t border-(--border)">
      <div className="max-w-6xl mx-auto px-8 py-12 flex flex-col md:flex-row justify-between gap-12">

        {/* Brand */}
        <div className="flex flex-col gap-4 max-w-xs">
          <Image src={logo} alt="Akinari Logo" width={150} height={50} />
          <p className="text-sm text-(--text-muted) leading-relaxed">
            Profesjonalna szkoła jazdy w Poznaniu od 2007 roku. Wysoka zdawalność, doświadczeni instruktorzy.
          </p>
          <div className="flex flex-row gap-3">
            <a href="https://www.facebook.com/oskakinari" target="_blank"
              className="p-2 bg-(--bg-secondary) border border-(--border) rounded-xl hover:border-(--accent) hover:text-(--accent) transition-all duration-200">
              <FacebookLogoIcon size={24} weight="duotone" />
            </a>
            <a href="https://www.youtube.com/@oskakinari9130" target="_blank"
              className="p-2 bg-(--bg-secondary) border border-(--border) rounded-xl hover:border-(--accent) hover:text-(--accent) transition-all duration-200">
              <YoutubeLogoIcon size={24} weight="duotone" />
            </a>
          </div>
        </div>

        {/* Nav + Contact */}
        <div className="flex flex-row gap-16">

          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-widest text-(--text-muted) font-bold">Nawigacja</p>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}
                className="text-sm text-(--text-secondary) hover:text-(--accent) transition-colors duration-200">
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-widest text-(--text-muted) font-bold">Kontakt</p>
            {contactLinks.map((item) => (
              <div key={item.label} className="flex flex-col gap-0.5">
                <p className="text-xs text-(--text-muted)">{item.label}</p>
                {item.href ? (
                  <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined}
                    className="text-sm text-(--text-secondary) hover:text-(--accent) transition-colors duration-200">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm text-(--text-secondary)">{item.value}</p>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-(--border) px-8 py-4 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        <p className="text-xs text-(--text-muted)">© 2026 <span className="text-(--accent)">Akinari</span> · Wszelkie prawa zastrzeżone</p>
        <div className="flex gap-4">
          <Link rel="noopener noreferrer" target="_blank" href="/regulamin.pdf" className="text-xs text-(--text-muted) hover:text-(--text-secondary) transition-colors">Regulamin</Link>
          <Link rel="noopener noreferrer" target="_blank" href="/politykaPrywatnosci.pdf" className="text-xs text-(--text-muted) hover:text-(--text-secondary) transition-colors">Polityka prywatności</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;