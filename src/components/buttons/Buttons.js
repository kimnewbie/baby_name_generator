import { Button, Switch, Tooltip } from "antd";
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

  const addText = '보이는 이름을 즐겨찾기에 넣기'
  const newNameText = '이름 새로고침'
  const genderText = '성별 선택'
  const editSurnameText = '원하는 성 지정'

  const handleBabyNameChange = () => {
    const newName = BabyNameGenerator(isBoyFilter === "BOY", firstCharFilter);
    setCurrentForename(newName);
    addHistoricName({ forename: newName, surname: currentName.surname });
  };

  return (
    <section className="buttonsContainer">
      <section className="top">
        <Tooltip placement="right" color='#9ea2e3' title={addText} arrow defaultOpen>
          <Button
            shape="round"
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
        </Tooltip>
      </section>
      <section className="bottom">
        <Tooltip placement="bottom" color='#9ea2e3' title={newNameText} arrow defaultOpen>
          <Button size="large" onClick={handleBabyNameChange}>
            New Name
          </Button>
        </Tooltip>
        <Tooltip placement="bottom" color='#9ea2e3' title={genderText} arrow defaultOpen>
          <Switch
            defaultChecked
            checkedChildren="Boy"
            unCheckedChildren="Girl"
            onChange={(checked, e) => setGenderFilter(checked ? "BOY" : "GIRL")}
          />
        </Tooltip>
        <Tooltip placement="bottom" color='#9ea2e3' title={editSurnameText} arrow defaultOpen>
          <EditSurnameButton setCurrentSurname={setCurrentSurname} />
        </Tooltip>
      </section>
      <AlphabetButtons setForeNameFilter={setForeNameFilter} />
    </section >
  );
}

export default Buttons;
