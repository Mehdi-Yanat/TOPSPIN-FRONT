"use client";
import React, { Dispatch, SetStateAction } from "react";
import classes from "./navbar.module.scss";
import Image from "next/image";
import Link from "next/link";

function MenuNav({
  lang,
  setOpenMenu,
  openMenu,
  linksMenuNav,
}: {
  lang: string;
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
  openMenu: boolean;
  linksMenuNav: string[];
}) {
  return (
    <>
      <Image
        loading="lazy"
        width={5472}
        height={3078}
        alt="drone image"
        src={"/images/footerBanner.JPG"}
        className={`${classes.image} ${openMenu ? classes.reset : ""}`}
      />
      <nav className={`${classes.nav} ${openMenu ? classes.reset : ""}`}>
        <div className={classes.closeBtn}>
          <Image
            loading="lazy"
            width={40}
            height={40}
            alt="xmark"
            src={"/assets/xmark-solid.svg"}
            onClick={() => setOpenMenu(false)}
          />
        </div>
        <ul className={classes.ul}>
          <Link onClick={() => setOpenMenu(false)} href={`/${lang}/academy`}>
            <li>{linksMenuNav[0]}</li>
          </Link>
          <Link
            onClick={() => setOpenMenu(false)}
            href={`/${lang}/our-mission`}
          >
            <li>{linksMenuNav[1]} </li>
          </Link>
          <Link onClick={() => setOpenMenu(false)} href={`/${lang}/cankaya`}>
            <li>{linksMenuNav[2]}</li>
          </Link>
          <Link
            onClick={() => setOpenMenu(false)}
            href={`/${lang}/league-information`}
          >
            <li>{linksMenuNav[3]}</li>
          </Link>
          <Link
            onClick={() => setOpenMenu(false)}
            href={`/${lang}/reservation`}
          >
            <li>{linksMenuNav[4]}</li>
          </Link>
          <Link onClick={() => setOpenMenu(false)} href={`/${lang}/management`}>
            <li>{linksMenuNav[5]}</li>
          </Link>
          <Link onClick={() => setOpenMenu(false)} href={`#`}>
            <li>{linksMenuNav[6]}</li>
          </Link>
          <Link onClick={() => setOpenMenu(false)} href={`/${lang}/contact`}>
            <li>{linksMenuNav[7]}</li>
          </Link>
        </ul>
      </nav>
    </>
  );
}

export default MenuNav;
