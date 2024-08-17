function accordion(selector) {
  const accordionWrapper = document.querySelector(selector);
  if (!accordionWrapper) {
    console.error(`Element with selector "${selector}" not found.`);
    return;
  }
  const accordionBtns = accordionWrapper.querySelectorAll(".accordion__btn");

  accordionBtns.forEach(function (btn) {
    btn.addEventListener("click", openContent);

    function openContent(event) {
      event.preventDefault();

      const currentItem = btn.closest(".accordion__item");
      const currentContent = currentItem.querySelector(".accordion__content");

      currentItem.classList.toggle('active');

      if (currentItem.classList.contains('active')) {
        currentContent.style.maxHeight = currentContent.scrollHeight + 'px';
      } else {
        currentContent.style.maxHeight =0;
      }

    }
  });
}

accordion("#accordion-1");
