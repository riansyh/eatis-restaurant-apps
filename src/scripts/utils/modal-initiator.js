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
    console.log(this._message);
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
          title: 'Berhasil Ditambahkan!',
          content: 'Hore review yang kamu tulis berhasil ditambahkan',
        };
        break;
      case 'fail':
        message = {
          title: 'Gagal Menambahkan!',
          content:
            'Maaf review yang kamu tulis tidak berhasil ditambahkan, periksa koneksi internet kamu!',
        };
        break;
      case 'empty':
        message = {
          title: 'Data Harus Diisi!',
          content:
            'Untuk menambahkan review kamu harus mengisi nama dan review dengan jelas',
        };
        break;
      default:
        message = {
          title: 'Berhasil Ditambahkan!',
          content: 'Hore review yang kamu tulis berhasil ditambahkan',
        };
        break;
    }
    return message;
  },
};

export default modalInitiator;
