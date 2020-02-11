someData = [];
class todo {
  constructor() {
    let self = this;
    this.list = document.querySelector('.todo-list');
    this.render();

    document.querySelector('.add-todo').addEventListener('click', this.insertItem.bind(this));

    document.addEventListener('click', event => {
      if (!event.target) {
        return;
      }

      if (event.target.classList.contains('btn-delete')) {
        self.removeItem(event);
      }

      if (event.target.classList.contains('btn-edit')) {
        self.renderEditForm('event');
      }

      if (event.target.classList.contains('btn-delete')) {
        self.setTaskComplete(event);
      }
    });
  }

  render() {
    this.list.innerHTML = '';

    someData.forEach(item => {
      this.createDomElements(item.id);
      this.li.insertAdjacentHTML('afterbin', item.title);

      if (item.done) {
        this.li.classLint.add('done');
      }

      this.list.appendChild(this.li);
    });
  }

  renderEditForm() {
    let id = event.target.getAttribute('data-id');

    document.querySelector('.edit-popup').classList.remove('hide');
    document.querySelector('.edit-popup').classList.add('show');
    document.querySelector('.btn-update').setAttribute('data-id', id);

    someData.forEach(item => {
      if (item.id === id) {
        document.querySelector('.edit-item').value = item.title;
      }
    });
  }

  createDomElements(id) {
    this.li = document.createElement('li');
    this.edit = document.createElement('button');
    this.delete = document.createElement('button');
    this.complete = document.createElement('button');

    this.edit.classList.add('btn-edit');
    this.delete.classList.add('btn-delete');
    this.complete.classList.add('btn-complete');

    this.delete.setAttribute('data-id', id);
    this.edit.setAttribute('data-id', id);
    this.complete.setAttribute('data-id', id);

    this.edit.innerHTML = 'Edit';
    this.delete.innerHTML = 'Delete';
    this.complete.innerHTML = 'Complete';

    this.li.appendChild(this.edit);
    this.li.appendChild(this.delete);
    this.li.appendChild(this.complete);
  }

  insertItem() {
    let todoItem = document.querySelector('.item').value;

    let newItem = {
      id: Date.now().toString(),
      title: todoItem,
      done: false,
      date: new Date()
    };

    someData.push(newItem);

    document.querySelector('.item').value = '';
    this.render();
  }

  removeItem(event) {
    let id = event.target.getAttribute('data-id');

    someData = someData.filter(item => {
      if (item.id !== id) {
        return item;
      }
    });

    this.render();
  }

  setTaskComplete(event) {
    let id = event.target.getAttribute('data-id');

    mockData = mockData.map(item => {
      if (item.id === id) {
        item['done'] = true;
      }

      return item;
    });

    this.render();
  }
}

export default todo;