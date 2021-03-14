import React from "react";

class Item extends React.Component {
    construtor (props){

    }

    render () {
        return(
            <div className="project-item">
                <h3>name: {this.props.name}</h3>
                <div>item id:{this.props.itemId}</div>
                <div>project id: {this.props.projectId}</div>

                <div>description: {this.props.description}</div>
            </div>
        );

    }
    

}
export default Item;