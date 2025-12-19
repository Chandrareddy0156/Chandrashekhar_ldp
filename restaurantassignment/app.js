// table search
const tableSearchInput = document.querySelector(".tables .search");
const tableCards = document.querySelectorAll(".table-card");

tableSearchInput.addEventListener("keyup", function () {
  const value = this.value.toLowerCase();
  tableCards.forEach(card => {
    const name = card.querySelector("h3").innerText.toLowerCase();
    card.style.display = name.includes(value) ? "block" : "none";
  });
});


// menu search
const menuSearchInput = document.getElementById("menuSearch");
const menuItems = document.querySelectorAll(".menu-item");

menuSearchInput.addEventListener("keyup", function () {
  const value = this.value.toLowerCase();

  menuItems.forEach(item => {
    const name = item.querySelector("h3").innerText.toLowerCase();
    const category = item.dataset.category.toLowerCase();

    item.style.display =
      name.includes(value) || category.includes(value)
        ? "flex"
        : "none";
  });
});


// data storage
let tableOrders = JSON.parse(localStorage.getItem("tableOrders")) || {
  "Table-1": [],
  "Table-2": [],
  "Table-3": [],
  "Table-4": [],
  "Table-5": [],
  "Table-6": []
};

function saveData() {
  localStorage.setItem("tableOrders", JSON.stringify(tableOrders));
}

// drag and drop
let draggedItem = null;

menuItems.forEach(item => {
  item.addEventListener("dragstart", function () {
    draggedItem = this;
  });
});

tableCards.forEach(table => {
  table.addEventListener("dragover", e => e.preventDefault());

  table.addEventListener("drop", function () {
    if (!draggedItem) return;

    const tableName = this.querySelector("h3").innerText;
    const itemName = draggedItem.querySelector("h3").innerText;
    const price = Number(draggedItem.dataset.price);

    const existing = tableOrders[tableName].find(i => i.name === itemName);

    if (existing) {
      existing.qty++;
    } else {
      tableOrders[tableName].push({ name: itemName, price, qty: 1 });
    }

    updateTableCard(tableName);
    saveData();
    draggedItem = null;
  });
});


// opens model
let currentTable = "";

tableCards.forEach(card => {
  card.addEventListener("click", () => {
    currentTable = card.querySelector("h3").innerText;
    document.getElementById("modalTitle").innerText =
      `${currentTable} Order Details`;
    renderOrders();
    document.getElementById("orderModal").style.display = "flex";
  });
});


// renders orders
function renderOrders() {
  const body = document.getElementById("orderBody");
  body.innerHTML = "";

  let total = 0;

  tableOrders[currentTable].forEach((item, index) => {
    total += item.price * item.qty;

    body.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td>
          <input type="number" min="1" value="${item.qty}"
            onchange="updateQty(${index}, this.value)">
        </td>
        <td>
          <button onclick="deleteItem(${index})">❌</button>
        </td>
      </tr>
    `;
  });

  document.getElementById("grandTotal").innerText = total;
}


//update quantity
function updateQty(index, value) {
  tableOrders[currentTable][index].qty = Number(value);
  saveData();
  renderOrders();
  updateTableCard(currentTable);
}

// delete item
function deleteItem(index) {
  tableOrders[currentTable].splice(index, 1);
  saveData();
  renderOrders();
  updateTableCard(currentTable);
}


// close model
function closeModal() {
  document.getElementById("orderModal").style.display = "none";
}


// generate bill
function generateBill() {
  const currentOrders = tableOrders[currentTable];

  if (!currentOrders || currentOrders.length === 0) {
    alert("No items in the table");
    return;
  }

  // Calculate total
  let total = 0;
  currentOrders.forEach(item => {
    total += item.price * item.qty;
  });

  alert(`Bill generated successfully!\nTotal: Rs.${total}`);

  // reset current table
  tableOrders[currentTable] = [];
  saveData();
  updateTableCard(currentTable);

  closeModal();
}


/*UPDATE TABLE CARD*/
function updateTableCard(tableName) {
  const table = [...tableCards].find(
    card => card.querySelector("h3").innerText === tableName
  );

  let total = 0;
  let items = 0;

  tableOrders[tableName].forEach(item => {
    total += item.price * item.qty;
    items += item.qty;
  });

  table.querySelector("p").innerText =
    `Rs.${total} | Total items: ${items}`;
}


Object.keys(tableOrders).forEach(updateTableCard);
