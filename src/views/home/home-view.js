import * as React from "react";
import connect from '@vkontakte/vk-connect';
import { View, ModalCard, ModalPage, Button, ModalRoot, FormLayout, FormLayoutGroup, Panel, Group, ModalPageHeader, HeaderButton, Radio, PanelHeader } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import OptionsPanel from './panels/options-panel';
import PersikPanel from './panels/persik-panel'
import ModalPanel from './panels/modal-panel'

import Icon56MoneyTransferOutline from '@vkontakte/icons/dist/56/money_transfer_outline';


class HomeView extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
            activePanel: 'options_panel',
            history: ['options_panel'],
            activeModal: null,
            modalHistory: []
        }
        this.modalBack = () => {
          this.setActiveModal(this.state.modalHistory[this.state.modalHistory.length - 2]);
        };
  }
  goBack() {
        const history = [...this.state.history];
        history.pop();
        const activePanel = history[history.length - 1];
        this.setState({ history, activePanel });
  }
  goForward(activePanel) {
        const history = [...this.state.history];
        history.push(activePanel);
        this.setState({ history, activePanel });
  }

  setActiveModal(activeModal) {
      activeModal = activeModal || null;
      let modalHistory = this.state.modalHistory ? [...this.state.modalHistory] : [];

      if (activeModal === null) {
        modalHistory = [];
      } else {
        modalHistory.push(activeModal);
      }
      this.setState({
        activeModal,
        modalHistory
      });
  };

  render() {
    const modal = (
      <ModalRoot activeModal={this.state.activeModal}>
        <ModalPage
          id="modal_page"
          onClose={this.modalBack}
          header={
            <ModalPageHeader
              left={<HeaderButton onClick={this.modalBack}>Cancel</HeaderButton>}
              right={<HeaderButton onClick={this.modalBack}>Done</HeaderButton>}
            >
              Filters
            </ModalPageHeader>
          }
        >
          <FormLayout>

            <FormLayoutGroup top="Gender">
              <Radio name="sex" value={0} defaultChecked>Female</Radio>
              <Radio name="sex" value={1}>Male</Radio>
              <Radio name="sex" value={2}>Genderqueer/Non-Binary</Radio>
              <Radio name="sex" value={1}>Prefer not to disclose</Radio>
            </FormLayoutGroup>

          </FormLayout>
        </ModalPage>

        <ModalCard
          id="modal_card"
          onClose={() => this.setActiveModal(null)}
          icon={<Icon56MoneyTransferOutline />}
          title="This is the ModalCard"
          actions={[{
            title: 'OK',
            type: 'primary',
            action: () => {
              this.setActiveModal(null);
            }
          }, {
            title: 'Open ModalPage',
            type: 'primary',
            action: () => {
              this.setActiveModal("modal_page");
          }}]}
        >
        </ModalCard>


      </ModalRoot>
    );
    return (
      <View id="home_view" activePanel={this.state.activePanel} modal={modal}>
        <OptionsPanel
          id="options_panel"
          go={this.goForward.bind(this)}
        />
        <PersikPanel
          id="persik_panel"
          goBack={this.goBack.bind(this)}
        />
        <ModalPanel
          id="modal_panel"
          goBack={this.goBack.bind(this)}
          setActiveModal={this.setActiveModal.bind(this)}
        />
      </View>
    );
  }
}

export default HomeView;
