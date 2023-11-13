import React, {Component} from "react";
import  "./style.sass"



export default class List extends React.Component {
    constructor (props) {
        super(props);

        setTimeout(()=>{this.setState( {

            /* newColor: this.changeColor(),*/
          list: this.state.list,

        })},1500)


    }


    changeColor (){
        this.setState({color:"white", backgroundColor:"blue"})
    }

    state={list:this.props.list,
    color:"green",
        backgroundColor:"white",
    }


render () {
    return this.state.list.map((item,index)=>   <tr  style={{color:this.state.color,backgroundColor:this.state.backgroundColor}  }  key={index}
    > <td>{item.type}</td> <td>{item.icon}</td></tr>)
}

}
/*export default function List ({list=[]}){
    return list.map((item,index)=>  <tr key={index}> <td>{item.type}</td> <td>{item.icon}</td></tr>)
}*/