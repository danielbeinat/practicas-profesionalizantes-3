class CRUDModel {
  constructor() {
    this.dataContainer = new Array();
  }

  create(data) {
    this.dataContainer.push(data);
    console.log(this.dataContainer);
  }

  edit(index, newData) {
    this.dataContainer[index].firstName = newData.firstName;
    this.dataContainer[index].lastName = newData.lastName;
    this.dataContainer[index].phoneNumber = newData.phoneNumber;
    console.log(this.dataContainer);
  }

  delete(index) {
    this.dataContainer.splice(index, 1);
    console.log(this.dataContainer);
  }
}

class CRUDViewController {
  constructor(view, model) {
    this.innerView = view;
    this.innerModel = model;

    this.innerView.createButton.onclick = () => this.oncreatebuttonclick();

    this.innerView.resultBody.addEventListener("click", (event) => {
      let target = event.target;
      if (target && target.classList.contains("delete-button")) {
        let row = target.closest("tr");
        let rowIndex = row.rowIndex - 1;
        this.innerModel.delete(rowIndex);
        this.innerView.render(this.innerModel.dataContainer);
      }
      if (target && target.classList.contains("update-button")) {
        let row = target.closest("tr");
        let rowIndex = row.rowIndex - 1;
        let newData = this.innerView.getDataInputFromRow(row);
        this.innerModel.edit(rowIndex, newData);
        this.innerView.render(this.innerModel.dataContainer);
      }
    });
  }

  oncreatebuttonclick() {
    let dataFromView = this.innerView.getDataInput();

    if (
      !dataFromView.firstName ||
      !dataFromView.lastName ||
      !dataFromView.phoneNumber
    ) {
      alert("Please enter all required fields.");
      return;
    }

    if (/\d/.test(dataFromView.firstName) || /\d/.test(dataFromView.lastName)) {
      alert("First name and last name should not contain numbers.");
      return;
    }

    if (/\D/.test(dataFromView.phoneNumber)) {
      alert("Phone number should contain only digits.");
      return;
    }

    this.innerModel.create(dataFromView);
    this.innerView.render(this.innerModel.dataContainer);
    this.innerView.clearInputFields();
  }
}

class CRUDView extends HTMLElement {
  constructor() {
    super();

    this.viewTitle = document.createElement("h1");
    this.viewTitle.innerText = "CRUDApplication";

    this.createButton = document.createElement("button");
    this.createButton.innerText = "Create";

    this.firstNameInput = document.createElement("input");
    this.firstNameInput.type = "text";
    this.firstNameInput.placeholder = "First Name";

    this.lastNameInput = document.createElement("input");
    this.lastNameInput.type = "text";
    this.lastNameInput.placeholder = "Last Name";

    this.phoneNumberInput = document.createElement("input");
    this.phoneNumberInput.type = "text";
    this.phoneNumberInput.placeholder = "Phone Number";

    this.optionsInput = document.createElement("select");

    const option1 = document.createElement("option");
    const option2 = document.createElement("option");
    const option3 = document.createElement("option");
    const option4 = document.createElement("option");
    const option5 = document.createElement("option");
    const option6 = document.createElement("option");

    option1.value = "Amigos";
    option1.text = "Amigos";

    option2.value = "Trabajo";
    option2.text = "Trabajo";

    option3.value = "Estudio";
    option3.text = "Estudio";

    option4.value = "Familia";
    option4.text = "Familia";

    option5.value = "Favoritos";
    option5.text = "Favoritos";

    option6.value = "Servicios";
    option6.text = "Servicios";

    this.optionsInput.add(option1, null);
    this.optionsInput.add(option2, null);
    this.optionsInput.add(option3, null);
    this.optionsInput.add(option4, null);
    this.optionsInput.add(option5, null);
    this.optionsInput.add(option6, null);

    this.dataTitle = document.createElement("h4");
    this.dataTitle.innerText = "Data:";

    this.result = document.createElement("table");
    this.resultHeader = this.result.createTHead();
    this.resultBody = this.result.createTBody();

    let columnTags = [
      "id",
      "firstName",
      "lastName",
      "phoneNumber",
      "category",
      "delete",
      "update",
    ];

    this.resultHeaderRow = this.resultHeader.insertRow();

    for (let tag of columnTags) {
      let columnElement = document.createElement("th");
      columnElement.innerText = tag;
      this.resultHeaderRow.insertCell().appendChild(columnElement);
    }

    this.appendChild(this.viewTitle);
    this.appendChild(this.firstNameInput);
    this.appendChild(this.lastNameInput);
    this.appendChild(this.phoneNumberInput);
    this.appendChild(this.optionsInput);
    this.appendChild(this.createButton);
    this.appendChild(document.createElement("br"));
    this.appendChild(document.createElement("br"));
    this.appendChild(document.createElement("br"));
    this.appendChild(this.dataTitle);
    this.appendChild(this.result);

    let style = document.createElement("style");
    style.textContent = `
        table,
        td,
        tr,
        th {
          border: 1px solid black;
          border-collapse: collapse;
        }
  
        .Amigos {
          background-color: #ffffcc;
        }
  
        .Trabajo {
          background-color: #ccffcc;
        }
  
        .Estudio {
          background-color: #ccffff;
        }
  
        .Familia {
          background-color: #ffcccc;
        }
  
        .Favoritos {
          background-color: #ffccff;
        }
  
        .Servicios {
          background-color: #ccccff;
        }
  
        td.delete-cell,
        td.update-cell {
          width: 80px;
          text-align: center;
        }
      `;
    this.appendChild(style);

    //Controller
    this.innerModel = new CRUDModel();
    this.innerController = new CRUDViewController(this, this.innerModel);
  }

  connectedCallback() {}

  disconnectedCallback() {}

  getDataInput() {
    let data = {
      firstName: this.firstNameInput.value,
      lastName: this.lastNameInput.value,
      phoneNumber: this.phoneNumberInput.value,
      category: this.optionsInput.value,
    };

    return data;
  }

  getDataInputFromRow(row) {
    let data = {};

    data.firstName = row.cells[1].querySelector("input").value;
    data.lastName = row.cells[2].querySelector("input").value;
    data.phoneNumber = row.cells[3].querySelector("input").value;

    return data;
  }

  getSelectedIndex() {
    let selectedRow = this.resultBody.querySelector(".selected");
    if (selectedRow) {
      return selectedRow.rowIndex - 1;
    }
    return -1;
  }

  setSelectedIndex(index) {
    let selectedRow = this.resultBody.querySelector(".selected");
    if (selectedRow) {
      selectedRow.classList.remove("selected");
    }
    let row = this.resultBody.rows[index];
    if (row) {
      row.classList.add("selected");
      this.firstNameInput.value = row.cells[1].innerText;
      this.lastNameInput.value = row.cells[2].innerText;
      this.phoneNumberInput.value = row.cells[3].innerText;
      this.optionsInput.value = row.cells[4].innerText;
    }
  }

  clearInputFields() {
    this.firstNameInput.value = "";
    this.lastNameInput.value = "";
    this.phoneNumberInput.value = "";
  }

  render(dataContainer) {
    this.resultBody.innerHTML = "";

    for (let i = 0; i < dataContainer.length; i++) {
      let row = this.resultBody.insertRow();
      let idCell = row.insertCell();
      let firstNameCell = row.insertCell();
      let lastNameCell = row.insertCell();
      let phoneNumberCell = row.insertCell();
      let categoryCell = row.insertCell();
      let deleteCell = row.insertCell();
      let updateCell = row.insertCell();

      idCell.innerText = i;

      let firstNameInput = document.createElement("input");
      firstNameInput.type = "text";
      firstNameInput.value = dataContainer[i].firstName;
      firstNameCell.appendChild(firstNameInput);

      let lastNameInput = document.createElement("input");
      lastNameInput.type = "text";
      lastNameInput.value = dataContainer[i].lastName;
      lastNameCell.appendChild(lastNameInput);

      let phoneNumberInput = document.createElement("input");
      phoneNumberInput.type = "text";
      phoneNumberInput.value = dataContainer[i].phoneNumber;
      phoneNumberCell.appendChild(phoneNumberInput);

      categoryCell.innerText = dataContainer[i].category;

      row.classList.add(dataContainer[i].category);

      row.addEventListener("click", () => {
        let selectedRow = this.resultBody.querySelector(".selected");
        if (selectedRow) {
          selectedRow.classList.remove("selected");
        }
        row.classList.add("selected");
      });

      let deleteButton = document.createElement("button");
      deleteButton.innerText = "Delete";
      deleteButton.classList.add("delete-button");
      deleteCell.appendChild(deleteButton);

      let updateButton = document.createElement("button");
      updateButton.innerText = "Update";
      updateButton.classList.add("update-button");
      updateCell.appendChild(updateButton);
    }
  }
}

customElements.define("x-crud", CRUDView);

function main() {
  let appView = new CRUDView();
  document.body.appendChild(appView);
}

// window.onload = main;
