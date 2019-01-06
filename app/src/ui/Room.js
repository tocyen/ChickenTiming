import React, { Component } from 'react';
import './Room.css';



class Room extends Component {
    render() {
      return (
        <div className="Room-wrapper">
          <div className="room select">
              <h2>最佳時雞</h2>
              <div className="username">Hi, {this.props.name}</div>
              <ul className="join-create">
                <li className="joinroom-button"><p>加入房間</p></li>
                <li className="createroom-button"><p>建立房間</p></li>
              </ul>
          </div>
        </div>
      );

    }
  }

  export default Room;