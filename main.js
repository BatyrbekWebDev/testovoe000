let lists = document.querySelectorAll('.list');
let column_1 = document.querySelector('.column_1'); // изменение
let column_2 = document.querySelector('.column_2'); // изменение
let column_3 = document.querySelector('.column_3'); // изменение

for (list of lists) {
  list.addEventListener('dragstart', function (e) {
    let selected = e.target;

    column_1.addEventListener('dragover', function (e) {
      e.preventDefault();
    });
    column_1.addEventListener('drop', function (e) {
      column_1.appendChild(selected);
      selected = null;
    });

    column_2.addEventListener('dragover', function (e) {
      e.preventDefault();
    });
    column_2.addEventListener('drop', function (e) {
      column_2.appendChild(selected);
      selected = null;
    });

    column_3.addEventListener('dragover', function (e) {
      e.preventDefault();
    });
    column_3.addEventListener('drop', function (e) {
      column_3.appendChild(selected);
      selected = null;
    });
  });
}
