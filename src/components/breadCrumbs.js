import React from "react";
import { useLocation } from "react-router-dom";

const BreadCrumbs = () => {
  const { pathname } = useLocation();

  const pathnames = pathname.split("/").filter((x) => x);

  const renderPathItem = (isLink, name) => (
    <div key={name} style={{ marginRight: 4 }}>
      {isLink ? (
        <a href={name ? `/${name}` : "/"}>{name || "Home"} /</a>
      ) : (
        <div>{name || "Home"} /</div>
      )}
    </div>
  );

  return (
    <div style={{ display: "flex" }}>
      {renderPathItem(pathnames.length)}
      {pathnames.map((path, index) => {
        if (index === pathnames.length - 1) return null;
        return renderPathItem(true, path);
      })}
    </div>
  );
};

export default BreadCrumbs;
