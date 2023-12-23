import React from "react";
import classes from "../../styles/league.module.scss";
import Image from "next/image";
import Link from "next/link";

interface TranslatedContent {
  header: string;
  description: string[];
  buttons: string[];
}

function LeagueTournament({
  league,
  tournament,
}: {
  league: TranslatedContent;
  tournament: TranslatedContent;
}) {
  return (
    <div className={classes.content}>
      <div className={classes.containerBox}>
        <Image
          loading="lazy"
          width={4096}
          height={2421}
          alt="Topspin Cankaya"
          src={"/images/aboutus.jpeg"}
        />
        <div>
          <h2>{league.header}</h2>
          <p>
            {league.description[0]}
            <br />
            {league.description[1]}
          </p>
          <div className={classes.links}>
            <Link
              className="button"
              href={"/league-information/2023-topspin-bilkent-winter-league"}
            >
              {league.buttons[0]}
            </Link>
            <Link
              className="button"
              href={"/league-information/2023-topspin-cankaya-winter-league"}
            >
              {league.buttons[1]}
            </Link>
            <Link
              className="button"
              href={"/league-information/2023-topspin-summer-bilkent-league"}
            >
              {league.buttons[2]}
            </Link>
            <Link
              className="button"
              href={"/league-information/2023-topspin-summer-cankaya-league"}
            >
              {league.buttons[3]}
            </Link>
          </div>
        </div>
      </div>
      <div className={classes.containerBox}>
        <Image
          loading="lazy"
          width={705}
          height={536}
          alt="Topspin Cankaya"
          src={"/images/resort1.png"}
        />
        <div>
          <h2>{tournament.header}</h2>
          <p>
            {tournament.description[0]} <br />
            {tournament.description[1]} <br />
            {tournament.description[2]}
          </p>
          <div className={classes.links}>
            <Link
              className="button"
              href={"/league-information/100th-anniversary-of-the-republic"}
            >
              {tournament.buttons[0]}
            </Link>
            <Link
              className="button"
              href={
                "/league-information/2023-topspin-bilkent-autumn-singles-tournament"
              }
            >
              {tournament.buttons[1]}
            </Link>
            <Link
              className="button"
              href={
                "/league-information/tta-2023-singles-and-doubles-spring-tournament"
              }
            >
              {tournament.buttons[2]}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeagueTournament;
