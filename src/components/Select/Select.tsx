import React, { ChangeEvent, FC } from 'react';

import { cnSelect } from './Select.classname';
import { SelectOption, ValueSelect } from '../../types';

type SelectProps = {
    usedValue?: ValueSelect | undefined;
    options: SelectOption;
    placeholder: string;
    disabled?: boolean;
    onChange: (arg: ValueSelect) => void;
}

const Select: FC<SelectProps> = ({ options, placeholder, disabled, usedValue, onChange }) => {

    const handleChangeValue = (event: ChangeEvent<HTMLSelectElement>) => {
        const value: ValueSelect = event.target.value as ValueSelect;

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
