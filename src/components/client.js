import React from 'react';

class Client extends React.Component {
    // constructor(props){
    //     super(props);
    //     let state = {}
    // }
    render(props){
        return (
            <div className="client">
            <h3>Client {this.props.name}</h3>
            <p> {this.props.address} </p>
            </div>

        );
    }
}
export default Client;