import React, {useState, useEffect} from 'react';
import {Checkbox} from 'antd';

const Main = ({checked, onChange, trueValue = true, falseValue = false, ...props}) => {

    const [curValue, setCurValue] = useState(checked);

    const curChange = (val) => {
        onChange && onChange(val.target.checked ? trueValue : falseValue);
    }

    useEffect(() => {
        setCurValue(checked === trueValue);
    }, [checked]);

    return (
        <Checkbox
            {...props}
            checked={curValue}
            onChange={curChange}
        />
    );
}

export default Main;
