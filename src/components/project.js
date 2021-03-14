import React from 'react';

class project extends React.Component{
    render(){
        return (
        <div class="Project" >
            <h3>project {this.props.name}</h3>
            <div>description {this.props.description}</div>
        </div>
        ); 
    }
}
export default project;
