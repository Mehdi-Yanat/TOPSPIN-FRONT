import React from "react";
import Hero from "../hero/Hero";
import Nav from "./Nav";
import { useTranslations } from "next-intl";

function NavBar({ lang }: { lang: string }) {
  const t = useTranslations("NavBar");

  return (
    <div style={{ position: "relative" }}>
      <Nav
        links={[
          t("Links.firstLink"),
          t("Links.secondLink"),
          t("Links.thirdLink"),
        ]}
        lang={lang}
      />
      <Hero
        content={[
          t("heroSection.header"),
          t("heroSection.description"),
          t("heroSection.link"),
        ]}
      />
    </div>
  );
}

export default NavBar;
