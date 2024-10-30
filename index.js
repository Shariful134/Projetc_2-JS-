const h2 = document.querySelectorAll("h2");

h2.forEach((item) => {
  let count = 0;
  const stop = setInterval(() => {
    count = count + 1;
    item.innerHTML = count;
    if (count == item.dataset.number) clearInterval(stop);
  }, 100);
});
