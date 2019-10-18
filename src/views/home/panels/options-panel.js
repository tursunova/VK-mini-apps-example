import * as React from "react";
import connect from '@vkontakte/vk-connect';
import { Button, View, Panel, PanelHeader, Group, List, Cell, CellButton } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import PersikPanel from './persik-panel';
import ModalPanel from './modal-panel';

class OptionsPanel extends React.Component {
    constructor(props) {
      super(props);
    }
    onPersikClicked(e) {
      this.props.go('persik_panel');
    }
    onModalsClicked(e){
      this.props.go('modal_panel');
    }
    render() {
        return (
            <Panel id="options_panel">
                <PanelHeader>
                    Home
                </PanelHeader>
                <List>
                  <CellButton
                    id="modal_button"
                    data-kind="modal"
                    onClick = {this.onModalsClicked.bind(this)}>
                    Modals
                  </CellButton>
                  <CellButton
                    id="persik_button"
                    data-kind="persik"
                    onClick = {this.onPersikClicked.bind(this)}>
                    Persik
                  </CellButton>
                </List>
            </Panel>
        )
    }
}

export default OptionsPanel;
