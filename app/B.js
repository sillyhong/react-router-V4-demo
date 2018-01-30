
import React from 'react';
import { Prompt } from 'react-router-dom'

export default class B extends React.Component{
    render(){
        return(
            <div>B页面
                <Prompt message="残忍离开？"/>

            </div>
        );
    }
}