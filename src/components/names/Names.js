import React from "react";

function Names(props) {
  const { forename, surname } = props;

  return (
    <section className="namesContainer">
      <section className="forename">{forename}</section>
      <section className="surname">{surname}</section>
    </section>
  );
}

export default Names;
