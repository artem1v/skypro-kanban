import React from "react";
//import "./CardLoader.css";
import {
  DivActions,
  DivContent,
  DivDate,
  DivHeader,
  DivLoader,
  DivTheme,
  DivTitle,
} from "./CardLoader";

export default function CardLoader() {
  return (
    <DivLoader className="card-loader">
      <DivHeader className="card-loader__header">
        <DivTheme className="card-loader__theme"></DivTheme>
        <DivActions className="card-loader__actions"></DivActions>
      </DivHeader>
      <DivContent className="card-loader__content">
        <DivTitle className="card-loader__title"></DivTitle>
        <DivDate className="card-loader__date"></DivDate>
      </DivContent>
    </DivLoader>
  );
}
