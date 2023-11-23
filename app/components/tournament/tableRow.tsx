import React from "react";
import classes from "./tournament.module.scss";

function TableRow() {
  return (
    <div className={classes.tableRow}>
      <ul>
        <li>12.06.2023</li>
        <li>Pazartesi</li>
        <li>19:00</li>
        <li>XX</li>
        <li>XX</li>
      </ul>
    </div>
  );
}

export default TableRow;
