(() => {
  const refs = {
    openHotelPricesModalBtn: document.querySelector(
      '[data-hotel-modal-prices-open]'
    ),
    openSecondHotelPricesModalBtn: document.querySelector(
      '[data-hotel-modal-prices-open-second]'
    ),
    openThirdHotelPricesModalBtn: document.querySelector(
      '[data-hotel-modal-prices-open-third]'
    ),
    openTFourthHotelPricesModalBtn: document.querySelector(
      '[data-hotel-modal-prices-open-fourth]'
    ),
    closeHotelPricesModalBtn: document.querySelector(
      '[data-hotel-modal-prices-close]'
    ),
    modalHotelPrices: document.querySelector('[data-hotel-modal-prices]'),
  };
  refs.openHotelPricesModalBtn.addEventListener('click', toggleModal);
  refs.openSecondHotelPricesModalBtn.addEventListener('click', toggleModal);
  refs.openThirdHotelPricesModalBtn.addEventListener('click', toggleModal);
  refs.openFourthHotelPricesModalBtn.addEventListener('click', toggleModal);
  refs.closeHotelPricesModalBtn.addEventListener('click', toggleModal);
  function toggleModal() {
    refs.modalHotelPrices.classList.toggle('is-hidden');
  }
})();