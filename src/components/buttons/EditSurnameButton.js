import { Button, Input, Modal, Tooltip } from 'antd';
import React, { useState } from 'react';

function EditSurnameButton(props) {
  const { setCurrentSurname } = props;

  const [isVisible, setIsVisible] = useState(false);
  const [inputSurname, setInputSurname] = useState('');

  const editSurnameText = '원하는 성 지정'

  const handleOk = () => {
    setIsVisible(false);
    setCurrentSurname(inputSurname);
  }

  return (
    <section>
      <Tooltip placement="bottom" color='#9ea2e3' title={editSurnameText} arrow >
        <Button type="link" size="large" onClick={() => setIsVisible(true)}>
          Edit Surname
        </Button>
      </Tooltip>
      <Modal
        title="Enter Surname"
        open={isVisible}
        onCancel={() => setIsVisible(false)}
        onOk={handleOk}
      >
        <Input
          placeholder="Please enter surname"
          onChange={e => setInputSurname(e.target.value)}
        />
      </Modal>
    </section>
  )
}

export default EditSurnameButton;