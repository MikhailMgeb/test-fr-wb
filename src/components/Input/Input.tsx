import React, { ChangeEvent, FC } from 'react';

import { cnInput } from './Input.classname';

type InputProps = {
    value: string;
    placeholder: string;
    disabled: boolean;
    onChange: (value: string) => void;
}

const Input: FC<InputProps> = ({ value, placeholder, disabled, onChange }) => {

    const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    }

    return (
        <div className={cnInput()}>
            <label htmlFor="input-request"></label>
            <input
                className={cnInput('Input')}
                value={value}
                placeholder={placeholder}
                disabled={disabled}
                onChange={handleChangeValue}
            />
        </div>
    );
}

export { Input };
