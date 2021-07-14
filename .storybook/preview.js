import * as paramsOther from './config/parameters';
import Preview from './config/Preview.jsx';
// import {ThemeProvider} from 'styled-components';

// 配置参数
export const parameters = {
    actions: {argTypesRegex: '^on[A-Z].*'},
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    ...paramsOther
};

// 包装
export const decorators = [
    (Story) => (
        <Preview>
            <Story />
        </Preview>
    ),
];

// 工具栏自定义选项 https://storybook.js.org/docs/vue/essentials/toolbars-and-globals#global-types-toolbar-annotations
export const globalTypes = {
};
