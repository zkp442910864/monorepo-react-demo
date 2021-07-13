// import * as React from 'react';
// import * as PropTypes from 'prop-types';
import {CheckboxProps as AbstractCheckboxProps} from 'antd/lib/checkbox/Checkbox.d.ts';

export interface CheckboxProps extends AbstractCheckboxProps {
    /**
     * 选中时候的值
     */
    trueValue?: boolean | number | string;
    /**
     * 取消时候的值
     */
    falseValue?: boolean | number | string;
    /**
     * 值改变
     */
    onChange?: (val: boolean | number | string) => void
}
declare class Checkbox extends React.Component<CheckboxProps, {}> {

    render(): JSX.Element;
}
export default Checkbox;
