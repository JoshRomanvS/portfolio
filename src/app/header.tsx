import React from "react";

export default function Header({ title }) {
  return <h1>{title ? title : "Default title"}</h1>;
}