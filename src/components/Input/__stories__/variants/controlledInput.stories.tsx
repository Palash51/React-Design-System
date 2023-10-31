import * as React from 'react';
import Input, { InputProps } from '../../input'
import '../../input.css'

export const ControlledInput = () => {
  const [value, setValue] = React.useState('Name');
  const handleParentChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const updatedValue = event.target.value;
    window.setTimeout(() => {
      setValue(updatedValue);
    }, 1000);
  };
  const [value1, setValue1] = React.useState('Password');
  const onChangeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
    const updatedValue = event.target.value;
    window.setTimeout(() => {
      setValue1(updatedValue);
    }, 1000);
  };
  const onClearHandler = () => {
    const updatedValue = '';
    window.setTimeout(() => {
      setValue1(updatedValue);
    }, 1000);
  };
  return (
    <div className='Controlled__input'>
      <div className='Controlled__input-item'>
        <Input
          size='medium'
          value={value}
          placeholder="Placeholder"
          icon='search'
          onChange={handleParentChange}
        />
      </div>
      <div className="Controlled__input-item">
        <Input
          size='medium'
          value={value1}
          placeholder="PlaceHolder"
          onChange={onChangeHandler}
          onClear={onClearHandler}
        />
      </div>
    </div>
  );
};



export default {
  title: 'Components/Input/variants/Controlled Input',
  component: Input,
  parameters: {
    docs: {
      docPage: {
        title: 'Input',
      },
    },
  },
};