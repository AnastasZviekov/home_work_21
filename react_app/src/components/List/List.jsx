import React, {Component} from "react";
import "./style.sass"


export default class List extends React.Component {
    constructor (props) {
        super( props );

        const changeColour = setInterval( () => {

            this.setState( {newCol: this.changeCol()} )

            if ( this.state.list.every( el => el.active === true ) ) {
                clearInterval( changeColour )
            }


        }, 2000 )


    }

    changeCol () {
        let index = 0;
        let indexArr = [];
        let summArr = [];
        index = Math.ceil( Math.random() * this.state.list.length - 1 )

        function count () {
            indexArr.push( index )
            return indexArr
        }

        count()


        function duplicates () {
            indexArr.filter( (e, ind, arr) => {
                if ( arr.indexOf( e ) === ind ) {
                    summArr.push( e )
                }

            } )
            return summArr
        }

        duplicates()


        this.state.list.filter( (el, i) => {
            if ( i === index ) {
                el.active = true
            }
            ;
        } )

    }

    state = {
        list: this.props.list,
        color: "green",
        backgroundColor: "white",
    }


    render () {
        return this.state.list.map( (item, index) => <tr style={ {
            color: `${ item.active ? "green" : "black" }`,
            fontWeight: `${ item.active ? "bold" : "normal" }`
        } } key={ index }>
            <td>{ item.type }</td>
            <td>{ item.icon }</td>
        </tr> )
    }
}