import { Button, Switch } from "antd";
import React from "react";
import EditSurnameButton from "./EditSurnameButton";
import BabyNameGenerator from "../../services/BabyNameGenerator";
import AlphabetButtons from "./AlphabetButtons";
import { PlusOutlined } from '@ant-design/icons';

function Buttons(props) {
  const {
    firstCharFilter,
    isBoyFilter,
    setCurrentForename,
    setCurrentSurname,
    setForeNameFilter,
    setGenderFilter,
    addHistoricName,
    currentName,
    addToFavs,
  } = props;

  const handleBabyNameChange = () => {
    const newName = BabyNameGenerator(isBoyFilter === "BOY", firstCharFilter);
    setCurrentForename(newName);
    addHistoricName({ forename: newName, surname: currentName.surname });
  };

  return (
    <section className="buttonsContainer">
      <section className="top">
        <Button
          shape="round"
          style={{ borderColor: "red", color: "red" }}
          onClick={() =>
            addToFavs({
              forename: currentName.forename,
              surname: currentName.surname,
            })
          }
        >
          Add to Favorites
          <PlusOutlined />
        </Button>
      </section>
      <section className="bottom">
        <Button size="large" onClick={handleBabyNameChange}>
          New Name
        </Button>
        <Switch
          defaultChecked
          checkedChildren="Boy"
          unCheckedChildren="Girl"
          onChange={(checked, e) => setGenderFilter(checked ? "BOY" : "GIRL")}
        />
        <EditSurnameButton setCurrentSurname={setCurrentSurname} />
      </section>
      <AlphabetButtons setForeNameFilter={setForeNameFilter} />
    </section>
  );
}

export default Buttons;
