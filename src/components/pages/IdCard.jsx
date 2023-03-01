import React from "react";

export default function IdCard({ card }) {
  return (
    <>
      <div>{card.id}</div>
      <div>{card.name}</div>
    </>
  );
}
