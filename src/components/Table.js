import React, { Component } from 'react';
import TableRow from './TableRow';

export default class Table extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { userData } = this.props;
		return (
			<div>
				<table className="table table-striped">
					<thead>
						<tr key="head">
							<th>Age</th>
							<th>Name</th>
							<th>Points</th>
							<th>Rank</th>
						</tr>
					</thead>
					<TableRow users={userData} />
				</table>
			</div>
		);
	}
}
