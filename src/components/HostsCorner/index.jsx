import React from "react";

export default function HostsCorner({ currentHouse }) {
  return (
    <>
      <div className="carrousel-infos-droite-host">
        <div className="carrousel-infos-droite-hostname">
          {currentHouse.host.name}{" "}
        </div>
        <div className="carrousel-infos-droite-hostpicture">
          <img src={currentHouse.host.picture} alt={currentHouse.host.name} />
        </div>
      </div>
    </>
  );
}
