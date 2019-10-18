import * as React from "react";
import connect from '@vkontakte/vk-connect';
import { ModalCard, ModalPage, Button, ModalRoot, FormLayout, FormLayoutGroup, Panel, Group, ModalPageHeader, HeaderButton, Radio, PanelHeader } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Icon56MoneyTransferOutline from '@vkontakte/icons/dist/56/money_transfer_outline';
import Icon24Back from '@vkontakte/icons/dist/24/back';

class ModalPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  goBack() {
      this.props.goBack()
  }

  setActiveModal(activeModal) {
    this.props.setActiveModal(activeModal)
  };

  render() {

    return (
      <Panel id="modal_panel">
      <PanelHeader
        left={<HeaderButton onClick={this.goBack.bind(this)}>
          {<Icon24Back/>}
        </HeaderButton>}
      >
        Modal pages
      </PanelHeader>

          <Group>
            <FormLayout>
              <Button size="xl" level="secondary" onClick={() => this.setActiveModal("modal_page")}>
                  Open modal page
              </Button>

              <Button size="xl" level="secondary" onClick={() => this.setActiveModal("modal_card")}>
                  Open modal card
              </Button>
            </FormLayout>
          </Group>
        </Panel>
    );
  }
}

export default ModalPanel;
