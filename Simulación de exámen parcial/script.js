class Tickets extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div>
          <span>Tipo</span>
          <select id="typeSelect">
            <option>Falla</option>
            <option>Nuevo Requerimiento</option>
          </select>
        </div>
  
        <br>
  
        <div>
          <span>Prioridad</span>
          <select id="prioritySelect">
            <option>urgente</option>
            <option>Media</option>
            <option>Baja</option>
          </select>
        </div>
  
        <br>
  
        <div>
          <span>Descripción</span>
          <br>
          <textarea id="descriptionTextarea" rows="8" cols="30"></textarea>
          <br>
          <button onclick="addTicket()">Agregar</button>
        </div>
  
        <br>
  
        <div id="ticketsTable">
          <table>
            <tr>
              <th>Tipo</th>
              <th>Descripción</th>
              <th>Prioridad</th>
            </tr>
          </table>
        </div>
      `;
  }
}

function addTicket() {
  var typeSelect = document.getElementById("typeSelect");
  var prioritySelect = document.getElementById("prioritySelect");
  var descriptionTextarea = document.getElementById("descriptionTextarea");
  var ticketsTable = document
    .getElementById("ticketsTable")
    .querySelector("table");

  var type = typeSelect.value;
  var priority = prioritySelect.value;
  var description = descriptionTextarea.value;

  if (description.trim() !== "") {
    var newRow = ticketsTable.insertRow();
    newRow.innerHTML = `
        <td>${type}</td>
        <td>${description}</td>
        <td><span style="background-color: ${getPriorityColor(
          priority
        )};">${priority}</span></td>
      `;

    var confirmDialog = confirm("¿Desea agregar este ticket?");
    if (confirmDialog) {
      document.body.appendChild(ticket);
    }
  } else {
    alert("Por favor, ingrese una descripción para el ticket.");
  }
}

function getPriorityColor(priority) {
  switch (priority.toLowerCase()) {
    case "urgente":
      return "red";
    case "media":
      return "yellow";
    case "baja":
      return "green";
    default:
      return "";
  }
}

window.customElements.define("tickets-component", Tickets);
