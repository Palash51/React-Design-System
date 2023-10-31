import * as React from 'react';
import Input, { InputProps } from '../input';
import { action } from '@storybook/addon-actions';

export const BasicInput = (args: InputProps) => {
  const [value, setValue] = React.useState('John Doe');

  const onChange = React.useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    action('Input Value Changed')(e.target.value);
  }, []);

  const onClear = React.useCallback(() => {
    setValue('');
  }, []);

  return <Input size="medium" placeholder="Name"  value={value} onChange={onChange} onClear={onClear} />;
};


export default {
  title: 'Components/Input/Basic Input',
  component: Input,
  parameters: {
    docs: {
      docPage: {
        title: 'Input',
      },
    },
  },
};

BasicInput.args = {
  size: 'medium',
  placeholder: 'Basic input',
  onChange: () => {},
};