import React, { useState, useEffect } from 'react';
import connect from '@vkontakte/vk-connect';
import { Avatar, View, Panel, PanelHeader, Group, List, Cell } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';


class UserView extends React.Component {
  constructor(props) {
        super(props);
        console.log(props.userData);
        this.state = {
            userData: props.userData
        }
  }
  render(){
      return (
      <View id="user_view" activePanel="user_panel">
        <Panel id="user_panel">
          <PanelHeader>User Info</PanelHeader>
          <Group title="User Data Fetched with VK Connect">
      			<Cell
      				before={this.state.userData.photo_200 ? <Avatar src={this.state.userData.photo_200}/> : null}
      				description={this.state.userData.city && this.state.userData.city.title ? this.state.userData.city.title : ''}
      			>
      				{`${this.state.userData.first_name} ${this.state.userData.last_name}`}
      			</Cell>
          </Group>
        </Panel>
      </View>
    );
  }
}

export default UserView;
