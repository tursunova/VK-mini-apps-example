import * as React from "react";
import connect from '@vkontakte/vk-connect';
import { View, Panel, PanelHeader, Group, List, Cell, HeaderButton } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import persik from '../../../img/persik.png';
import './Persik.css';

import Icon24Back from '@vkontakte/icons/dist/24/back';

class PersikPanel extends React.Component {
  goBack() {
      this.props.goBack()
  }
  render(){
      return (
        <Panel id="persik_panel">
          <PanelHeader
            left={<HeaderButton onClick={this.goBack.bind(this)}>
              {<Icon24Back/>}
            </HeaderButton>}
          >
            Persik
          </PanelHeader>
          <img className="Persik" src={persik} alt="Persik The Cat"/>
        </Panel>
    );
  }
}

export default PersikPanel;
