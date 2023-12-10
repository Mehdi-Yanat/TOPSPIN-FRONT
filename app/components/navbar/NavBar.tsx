import React from "react";
import { useTranslations } from "next-intl";
import ExtraLayer from "./ExtraLayer";

function NavBar({
  lang,
  page,
  link,
}: {
  lang: string;
  page: string;
  link?: string;
}) {
  const t = useTranslations("NavBar");
  const tPage = useTranslations(page);

  return (
    <div style={{ position: "relative" }}>
      <ExtraLayer
        page={page}
        links={[
          t("Links.firstLink"),
          t("Links.secondLink"),
          t("Links.thirdLink"),
        ]}
        links2={[
          t("heroSection.header"),
          t("heroSection.description"),
          t("heroSection.link"),
        ]}
        title={tPage("title")}
        lang={lang}
        link={link}
      />
    </div>
  );
}

export default NavBar;
