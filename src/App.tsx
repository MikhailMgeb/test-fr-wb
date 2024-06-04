import React, { useRef, useState } from 'react';

import { cnApp } from './App.classname';

import { Select } from './components/Select/Select';
import { SelectOption, ValueSelect } from './types';
import { Input } from './components/Input/Input';
import { useFetch } from './components/hooks/hooks';

import './App.css';

const optionSelect: SelectOption = ['user', 'repo'];

const App = () => {
  const [selected, setSelected] = useState<ValueSelect>('user');
  const [inputValue, setInputValue] = useState('');
  const [url, setUrl] = useState<string | null>(null);
  const { data, isLoading, error } = useFetch(url);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const onChangeSelect = (eventValue: ValueSelect) => {
    setSelected(eventValue);
  }

  const onChangeInput = (eventValue: string) => {
    setInputValue(eventValue);

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      if (selected === 'user') {
        setUrl(`https://api.github.com/users/${eventValue}`);
      }

      if (selected === 'repo') {
        setUrl(`https://api.github.com/repos/${eventValue}`);
      }
    }, 1000);
  }

  if (error) {
    return <div className={cnApp('Error')}>{error}</div>
  }

  return (
    <div className={cnApp()}>
      <Select
        options={optionSelect}
        usedValue={selected}
        disabled={isLoading}
        placeholder={'Тип запроса'}
        onChange={onChangeSelect} />
      <Input
        value={inputValue}
        placeholder={selected === "user" ? 'введите nickname' : 'введите repo'}
        disabled={isLoading}
        onChange={onChangeInput} />
      {isLoading ? <i className="fa fa-circle-o-notch fa-spin" style={{ fontSize: '24px' }}></i> : null}
      {data !== null ?
        <div className={cnApp('information')}>
          <p className={cnApp('Title')}>{data.full_name || data.login}</p>
          <p className={cnApp('Description')}>{data.stargazers_count || data.public_repos}</p>
        </div> : null}
    </div>
  );
}

export { App };
