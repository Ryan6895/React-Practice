import React, { Component } from 'react';

class List extends Component {
  constructor(props){
    super(props);
  }
  render(){
    // let items = [];
    // for (var i = 0; i < this.props.items.length; i++) {
    //   items.push(<li>{this.props.items[i]}</li>)
    // }

    let items = this.props.items.map((item, i) => {
      return <li key={i}>{item}</li>
    })

    let titleStyle = {
      backgroundColor: 'red'
    }

    return  (
      <div>
        <h1 style={titleStyle}>{this.props.title}</h1>
        <ul>
        {items}
        </ul>
      </div>
    )
  }
}

export default List;
