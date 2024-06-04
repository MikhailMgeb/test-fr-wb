import React, { useState } from 'react';

import { cnApp } from './App.classname';

import { Select } from './components/Select/Select';
import { selectOption, valueSelect } from './types';

import './App.css';

const optionSelect: selectOption = ['user', 'repo'];

const App = () => {
  const [usedValue, setUsedValue] = useState<valueSelect | undefined>(undefined)

  const onChangeSelect = (eventValue: valueSelect) => {
    setUsedValue(eventValue);
  }

  return (
    <div className={cnApp()}>
      <Select options={optionSelect} usedValue={usedValue} placeholder={'Тип запроса'} onChange={onChangeSelect} />
    </div>
  );
}

export { App };
