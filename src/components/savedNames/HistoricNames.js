import React from "react";
import { List, Button } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";

function HistoricNames(props) {
  const { names, addToFavs } = props;
  return (
    <List
      itemLayout="horizontal"
      dataSource={names}
      header={<label>Historic Names</label>}
      renderItem={(name) => (
        <List.Item
          actions={[
            <Button
              type="normal"
              shape="round"
              icon={<HeartOutlined />}
              onClick={() =>
                addToFavs({ forename: name.forename, surname: name.surname })
              }
            />,
          ]}
        >
          <List.Item.Meta title={name.forename} description={name.surname} />
        </List.Item>
      )}
    />
  );
}

export default HistoricNames;
