import React from 'react';

class Work extends React.Component {
    render () {
        return (
        <div>
            <h3>Work</h3>
            <div>id: {this.props.workID}</div>
            <div>time: {this.props.time}</div>
            <div>problems: {this.props.problems}</div>
        </div>
        );
    }
}
export default Work;