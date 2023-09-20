import React from "react";
import { List } from "antd";

function FavoriteNames(props) {
  const { names } = props;
  return (
    <List
      itemLayout="horizontal"
      dataSource={names}
      header={<label>Favorite Names</label>}
      renderItem={(name) => (
        <List.Item>
          <List.Item.Meta title={name.forename} description={name.surname} />
        </List.Item>
      )}
    />
  );
}

export default FavoriteNames;
