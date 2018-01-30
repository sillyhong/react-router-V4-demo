
import React from 'react';
export default class B extends React.Component{
    render(){
        console.log(this.props.match.params.param)
        return(
            <div>
                <div>C页面{this.props.match.params.param}</div>

            </div>
        );
    }
}