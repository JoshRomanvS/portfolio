import React from "react";

export default function NavBar({ title }) {
  return <h1>{title ? title : "Default title"}</h1>;
}