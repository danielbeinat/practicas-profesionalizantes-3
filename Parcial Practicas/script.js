class ButtonStateModel {
  constructor() {
    this.value = 0;
  }

  increment() {
    this.value = this.value + 1;
  }

  read() {
    return this.value;
  }
}

class NewButtonStateModel extends ButtonStateModel {
  constructor() {
    super();
  }

  increment() {
    if (this.value < 255) {
      this.value = this.value + 2;
    }
  }
}

class ButtonStateController {
  constructor(model, view) {
    this.innerModel = model;
    this.innerView = view;
  }

  init() {
    this.innerView.setValue(this.innerModel.read());
    this.updateButtonColor();
  }

  onclick() {
    this.innerModel.increment();
    this.innerView.setValue(this.innerModel.read());
    this.updateButtonColor();
  }

  updateButtonColor() {
    const color = `rgb(${255 - this.innerModel.read()}, 0, 0)`;
    this.innerView.setButtonColor(color);
  }
}

class ButtonStateView extends HTMLElement {
  constructor() {
    super();

    this.innerModel = new ButtonStateModel();
    this.innerController = new ButtonStateController(this.innerModel, this);

    this.customButton = document.createElement("button");
    this.appendChild(this.customButton);
  }

  connectedCallback() {
    this.customButton.onclick = () => this.innerController.onclick();
    this.innerController.init();
  }

  setValue(value) {
    this.customButton.innerText = value.toString();
  }

  setButtonColor(color) {
    this.customButton.style.backgroundColor = color;
  }
}

customElements.define("button-state-view", ButtonStateView);

function main() {
  // const testButton = new ButtonStateView();

  const NewModel = new NewButtonStateModel();
  const testButton = new ButtonStateView();
  testButton.innerModel = NewModel;

  document.body.appendChild(testButton);
}
