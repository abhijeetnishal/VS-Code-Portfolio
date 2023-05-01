"use client";
import { useEffect, useState } from "react";
import "./styles/globals.css";
import "./styles/themes.css";
import Head from "./components/Head";

export default function Home({ props, Component }) {

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      document.documentElement.setAttribute(
        "data-theme",
        localStorage.getItem("theme")
      );
    }
  }, []);

  return (
    <>
      <Head title={`Kostas Georgiou | ${props.title}`} /> 
      <Component />
    </>
  )
}
