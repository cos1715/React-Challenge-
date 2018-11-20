import React, { Component } from 'react';

export default class TableRow extends Component {
  constructor(props) {
    super(props);
  }

  renderRows() {
    const { users } = this.props;
    return users.map((item, index) => (
      <tr key={index}>
        {
          Object.keys(item).map((el, i) => {
            return <td key={i}>{item[el]}</td>
          }).reverse()
        }
      </tr>
    ));
  }

  render() {
    return (
      <tbody>
        {this.renderRows()}
      </tbody>
    );
  }
}