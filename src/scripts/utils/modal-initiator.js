import { createPopupModal } from '../views/templates/template-creator';

const modalInitiator = {
  async init({ modalContainer, status, reload }) {
    this._modalContainer = modalContainer;
    this._message = this._checkStatus(status);
    this._reload = reload;

    await this.renderModal();
  },

  async renderModal() {
    await this.showModal();
  },

  async isModalExist() {
    let exist = true;
    if (this._modalContainer.innerHTML === '') {
      exist = false;
    }
    return exist;
  },

  async hideModal() {
    this._modalContainer.innerHTML = '';
    if (this._reload) {
      window.location.reload();
    }
  },

  async showModal() {
    this._modalContainer.innerHTML = createPopupModal(this._message);
    const modalButton = document.querySelector('#modalButton');
    modalButton.addEventListener('click', async () => {
      this.hideModal();
    });
  },

  _checkStatus(status) {
    let message;
    switch (status) {
      case 'success':
        message = {
          title: 'Success!',
          content: 'Your review has been added successfully!',
          color: 'green',
        };
        break;
      case 'fail':
        message = {
          title: 'Failed To Add Review',
          content: 'Oops, your review failed to add, please try again later',
          color: 'orange',
        };
        break;
      case 'empty':
        message = {
          title: 'Please Fill Out The Field',
          content:
            'To add the new review, name and review field needed to be filled, fill it correctly!',
          color: 'orange',
        };
        break;
      case 'add':
        message = {
          title: 'Success!',
          content:
            'This restaurant has been added to your favorite restaurant!',
          color: 'green',
        };
        break;
      case 'remove':
        message = {
          title: 'Success!',
          content:
            'This restaurant has been removed from your favorite restaurant!',
          color: 'green',
        };
        break;
      default:
        message = {
          title: 'Success!',
          content:
            'This restaurant has been removed from your favorite restaurant!',
          color: 'green',
        };
        break;
    }
    return message;
  },
};

export default modalInitiator;
