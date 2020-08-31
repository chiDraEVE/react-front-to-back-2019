import React, {Component} from 'react';

class UserItem extends Component {
	constructor() {
		super();
	}

	render() {
		const { login, id, avatar_url, html_url } = this.props.user;

		return (
			<div key={id} className={"card text-center"}>
				<img
					src={avatar_url}
					alt="avatar"
					className={'round-img'}
					style={{ width: '60px'}}
				/>
				<h3>{login}</h3>
				<div>
					<a href={avatar_url} className="btn btn-dark btn-sm my-1">
						More
					</a>
				</div>
			</div>
		);
	}
}

export default UserItem;