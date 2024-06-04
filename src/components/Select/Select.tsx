import React, { ChangeEvent, FC } from 'react';

import { cnSelect } from './Select.classname';
import { selectOption, valueSelect } from '../../types';

type SelectProps = {
    usedValue?: valueSelect | undefined,
    options: selectOption;
    placeholder: string;
    disabled?: boolean;
    onChange: (arg: valueSelect) => void;
}

const Select: FC<SelectProps> = ({ options, placeholder, disabled, usedValue, onChange }) => {

    const handleChangeValue = (event: ChangeEvent<HTMLSelectElement>) => {
        const value: valueSelect = event.target.value as valueSelect;

        if (onChange) {
            onChange(value);
        };
    };

    return (
        <div className={cnSelect()}>
            <label htmlFor="use-request">Pick a request:</label>
            <select
                className={cnSelect('Value')}
                value={usedValue}
                disabled={disabled}
                onChange={handleChangeValue}
            >
                <option value="" disabled>{placeholder}</option>
                {
                    options.map((option) => <option key={option} value={option}>{option}</option>)
                }
            </select>
        </div>
    );
}

export { Select };
