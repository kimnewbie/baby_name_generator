import { List, Button, Tooltip } from "antd";
import React, { useState } from "react";

const ALPHABET = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function AlphabetButtons(props) {
  const { setForeNameFilter } = props;

  const tableText = '이름 시작 알파벳 선택'

  const [selected, setSelected] = useState(null);

  const handleClick = (char) => {
    if (char === selected) {
      char = null;
    }
    setSelected(char);
    setForeNameFilter(char);
  };

  return (
    <section className="alphabetContainer">
      <Tooltip placement="left" color='#9ea2e3' title={tableText} arrow defaultOpen>
        <List
          grid={{ column: 6 }}
          dataSource={ALPHABET}
          renderItem={(letter) => (
            <List.Item key={letter}>
              <Button
                type={selected === letter ? "primary" : "normal"}
                size="large"
                onClick={() => handleClick(letter)}
              >
                {letter}
              </Button>
            </List.Item>
          )}
        />
      </Tooltip>
    </section>
  );
}

export default AlphabetButtons;
