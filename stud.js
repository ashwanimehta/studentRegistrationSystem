function addStudent() {
  const name = document.getElementById('nameInput').value.trim();
  const id = document.getElementById('idInput').value.trim();
  const className = document.getElementById('classInput').value.trim();
  const roll = document.getElementById('rollInput').value.trim();

  if (!name || !id || !className || !roll) {
    alert('Please fill all fields');
    return;
  }

  const tbody = document.querySelector('#studentTable tbody');
  const newRow = tbody.insertRow();

  newRow.innerHTML = `
    <td>${name}</td>
    <td>${id}</td>
    <td>${className}</td>
    <td>${roll}</td>
    <td class="actions">
      <button onclick="resetRow(this)">Reset</button>
      <button onclick="deleteRow(this)">Delete</button>
    </td>
  `;

  document.getElementById('nameInput').value = '';
  document.getElementById('idInput').value = '';
  document.getElementById('classInput').value = '';
  document.getElementById('rollInput').value = '';
}

function resetRow(btn) {
  const row = btn.closest('tr');
  row.cells[0].textContent = '';
  row.cells[1].textContent = '';
  row.cells[2].textContent = '';
  row.cells[3].textContent = '';
}

function deleteRow(btn) {
  btn.closest('tr').remove();
}