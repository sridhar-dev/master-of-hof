import React, { Component } from 'react';

export default class HigherOrderComponent extends Component {
constructor(){
    super();
    this.state = {
        userData: [
            { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
            { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
            { id: '3', name: 'John', user_type: 'Teacher', age:24,years: 2},
            { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
            { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}

        ]
    }
}
    // display all items
renderItems = () => {
    const data = this.state.userData;
    const mapRows = data.map((item) => (
        <React.Fragment key={item.id}>
            <li className="list-elements">
                {/* Passing unique value to 'key' prop, eases process for virtual DOM to remove specific element and update HTML tree  */}
                <span>Id: {item.id}</span>
                <span>Name : {item.name}</span>
                <span>User Type: {item.user_type}</span>
           </li>
        </React.Fragment>
    ));
    return mapRows;
}

// Display based on user type
renderUserType = () => {
    let type = this.state.userData;
    let filterUser = type.filter((item) => {
        return item.user_type === "Designer"
    })
        .map((item) => {
        return <React.Fragment>
            <li className="list-elements">
                <span>Id: {item.id}</span>
                <span>Name : {item.name}</span>
                <span>User Type: {item.user_type}</span>
           </li>
        </React.Fragment>
});
    return filterUser;
}

renderJ = () => {
    let type = this.state.userData;
    let filterJ = type.filter((item) => {
        return item.name.startsWith('J')
    })
    .map((item) => {
        return <React.Fragment>
            <li className="list-elements">
                <span>Id: {item.id}</span>
                <span>Name : {item.name}</span>
                <span>User Type: {item.user_type}</span>
           </li>
        </React.Fragment>
});
    return filterJ;
}

renderAge = () => {
    let type = this.state.userData;
    let filterAge = type.filter((item) => {
        return item.age > 28 && item.age <= 50;
    })
    .map((item) => {
        return <React.Fragment>
            <li className="list-elements">
                <span>Id: {item.id}</span>
                <span>Name : {item.name}</span>
                <span>User Type: {item.user_type}</span>
           </li>
        </React.Fragment>
});
    return filterAge;
}

renderExp = () => {
    let type = this.state.userData;
    let filterUser = type.filter((item) => {
        return item.user_type === "Designer"
    })
        .reduce ((a, b) => {
            return a.years + b.years
        })

        return <React.Fragment>
            <li className="List-elements">
                <span>{filterUser}</span>
            </li>
            </React.Fragment>

 
}

render() {
    return (
    // instead of a parent div tag we can also use React.Fragment
      <React.Fragment>
        <h1>Display all items</h1>
        <div className="display-box">
        <ul>{this.renderItems()} </ul>
        </div>
        <h1>Display based on user type</h1>
        <div className="display-box">
        <ul>{this.renderUserType()} </ul>
        </div>
        <h1>Filter all data starting with J</h1>
        <div className="display-box">
        <ul>{this.renderJ()} </ul>
        </div>
        <h1>Filter Data based on age</h1>
        <div className="display-box">
        <ul>{this.renderAge()} </ul>
        </div>
        <h1>Find the total experience of the designers</h1>
        <div className="display-box">
        <ul>{this.renderExp()} </ul>
        </div>
      </React.Fragment>
      
    )
}
}


