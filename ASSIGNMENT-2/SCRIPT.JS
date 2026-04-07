const modal = new bootstrap.Modal(document.getElementById('productModal'));

const products = {
  laptop: {
    title: "ProBook Laptop",
    desc: "Intel i7, 16GB RAM, 512GB SSD. Perfect for professionals."
  },
  headset: {
    title: "SoundMax Headset",
    desc: "Immersive surround sound with noise cancellation."
  },
  watch: {
    title: "ChronoX Watch",
    desc: "Smartwatch with health tracking and GPS."
  }
};

document.querySelectorAll('.open-modal').forEach(btn => {
  btn.addEventListener('click', () => {
    const product = products[btn.dataset.product];
    document.getElementById('modalTitle').innerText = product.title;
    document.getElementById('modalBody').innerText = product.desc;
    modal.show();
  });
});