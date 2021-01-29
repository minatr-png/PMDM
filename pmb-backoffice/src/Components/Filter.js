import * as React from 'react';
import { InputText } from 'primereact/inputtext';

const inputMargin = {
    marginLeft: "7px",
    marginRight: "10px"
}

class Filter extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <view>
                {this.props.name}
                <InputText type={this.props.type} style={inputMargin} onChange={this.props.onChange} keyfilter={this.props.keyfilter}/>
            </view>
        );
    }
};

export default Filter;
