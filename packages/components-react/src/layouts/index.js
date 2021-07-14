import React from 'react';
import {Layout} from 'antd';
import {connect} from 'dva';
import DocumentTitle from 'react-document-title';

const {Content} = Layout;


class BasicLayout extends React.PureComponent {

    render () {

        const {
            children,
        } = this.props;

        return (
            <React.Fragment>
                <DocumentTitle title="组件">
                    <Content >{children}</Content>
                </DocumentTitle>
            </React.Fragment>
        );
    }
}

export default connect((store) => store)(BasicLayout);
