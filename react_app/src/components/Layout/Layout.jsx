import React from "react";
import List from "../List/List";



export default function Layout () {
    const animals = [
        {type: `turtle`, icon: `🐢`},
        {type: `octopus`, icon: `🐙`},
        {type: `fish`, icon: `🐠`},
        {type: `flamingo`, icon: `🦩`},
        {type: `penguin`, icon: `🐧`}
    ]
    return <>
        <table>
            <tbody>
        <List list={ animals } />
            </tbody>
            </table>


    </>

}