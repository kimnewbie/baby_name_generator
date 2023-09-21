import React from "react";

function Names(props) {
  const { forename, surname } = props;

  return (
    <section className="namesContainer">
      <div className="name__section">
        <section className="forename">{forename}</section>
        <section className="surname">{surname}</section>
      </div>
    </section>
  );
}

export default Names;
