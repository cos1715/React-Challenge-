import React, { Component } from 'react';

import Age from './components/Age';
import Name from './components/Name';
import Points from './components/Points';
import Rank from './components/Rank';
import Table from './components/Table';

import { userData } from './data';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: userData,
      sortBy: {
        sortValue: '',
        asc: false
      }
    }
  }

  sortTable = (arr, value) => {
    const { sortBy } = this.state;
    let orderBy;
    const dataArr = arr.slice();
    const sortAsc = (a, b) => {
      if (a[value] < b[value])
        return -1;
      else
        return 1;
    };
    const sortDesc = (a, b) => {
      if (a[value] > b[value])
        return -1;
      else
        return 1;
    };

    if (sortBy.sortValue !== value || sortBy.asc) {
      dataArr.sort(sortAsc);
      orderBy = false;
    } else {
      dataArr.sort(sortDesc);
      orderBy = true;
    }

    this.setState(state => {
      return {
        userData: dataArr,
        sortBy: {
          sortValue: value,
          asc: orderBy
        }
      };
    });
  }

  render() {
    const { userData } = this.state;
    return (
      <div className="text-center buttons">
        <header className="text-center">
          <h1>Leaderboard</h1>
        </header>
        <div className="text-center buttons">
          <Age sortTable={() => this.sortTable(userData, 'age')}></Age>
          <Name sortTable={() => this.sortTable(userData, 'name')}></Name>
          <Points sortTable={() => this.sortTable(userData, 'points')} ></Points>
          <Rank sortTable={() => this.sortTable(userData, 'rank')}></Rank>

        </div>
        <div className="text-center buttons">
          <Table userData={userData}></Table>
        </div>
      </div>
    );
  }
}

