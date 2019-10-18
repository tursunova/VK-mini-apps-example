import * as React from "react";
import ReactDOM from 'react-dom';
import connect from '@vkontakte/vk-connect';
import { Tabbar, Epic, TabbarItem, Root, View, Panel, PanelHeader, Group, List, Cell } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import UserView from './views/user/user-view'
import HomeView from './views/home/home-view'

import Icon24User from '@vkontakte/icons/dist/24/user';
import Icon24Home from '@vkontakte/icons/dist/24/home';

const tabs = [
	{
			id: 'home',
			name: 'Home',
			view: 'home_view',
			content: <Icon24Home/>
	},
	{
        id: 'profile',
        name: 'Info',
        view: 'user_view',
        content: <Icon24User/>
    }
];


class App extends React.Component {
	constructor(props) {
      super(props);

      this.state = {
          activeStory: 'home_view',
					userData: null
      }
  }
	onTabClicked(view) {
      this.setState({
          'activeStory': view
      })
  }
	async componentDidMount() {
    connect.subscribe(function ({ detail: { type, data }}) {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		}.bind(this));
    const data = await connect.sendPromise('VKWebAppGetUserInfo');
    this.setState({
      userData: data
    });
    console.log(this.state.userData);
  }
	render() {
	  return (
			<Epic activeStory={this.state.activeStory} tabbar={
                <Tabbar>
                    {tabs.map((tab) =>
                        <TabbarItem
                            onClick={(e) => this.onTabClicked(tab.view)}
                            selected={this.state.activeStory === tab.view}
                            text={tab.name}
                        >
                            {tab.content}
                        </TabbarItem>
                    )}
                </Tabbar>
      }>
				<HomeView id="home_view"/>
				<UserView
					id="user_view"
          userData={this.state.userData}
				/>
			</Epic>
	  );
	}
}

export default App;
