import React from 'react';
import { fetchUserData, cancelFetch } from './dataFetcher';
import { Userlist } from './Userlist';

export class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: null,
        };
    }

    loadUserData() {
        this.setState({ userData: null });
        this.fetchID = fetchUserData(this.props.username, (userData) => {
            this.setState({ userData });
        });
        console.log("this.state.userData", this.state.userData);
    }

    componentDidMount() {
        this.loadUserData();
    }

    componentDidUpdate(prevProps) {
        if (this.props.username != prevProps.username) {
            cancelFetch(this.fetchID);
            this.loadUserData();
        }
    }

    componentWillUnmount() {
        cancelFetch(this.fetchID);
    }

    render() {
        const isLoading = this.state.userData === null;
        const name = isLoading ? 'Loading...' : this.state.userData.name;
        const bio = isLoading ? 'Loading...' : this.state.userData.bio;
        const friends = isLoading ? [] : this.state.userData.friends;

        let className = 'Profile';
        if (isLoading) {
            className += ' loading';
        }

        return (
            <div className={className}>
                <div className="profile-picture">{!isLoading && (
                    <img src={this.state.userData.profilePictureUrl} alt="" />
                )}</div>
                <div className="profile-body">
                    <h2>{name}</h2>
                    <h3>@{this.props.username}</h3>
                    <p>{bio}</p>
                    <h3>My friends</h3>
                    <Userlist usernames={friends} onChoose={this.props.onChoose} />
                </div>
            </div>
        );
    }
}
