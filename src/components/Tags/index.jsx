import React from "react";

export default function Tags({ currentHouse }) {
  const tags = [...currentHouse.tags];

  return (
    <>
      {tags.map((tag, index) => (
        <div className="carrousel-tag" key={index}>
          {tag}
        </div>
      ))}
    </>
  );
}
