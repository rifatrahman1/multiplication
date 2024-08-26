function generateTable() {
    const number = document.getElementById('number').value;
    const container = document.getElementById('table-container');
    container.innerHTML = ''; 

    if (number) {
        const table = document.createElement('table');
        for (let i = 1; i <= 10; i++) {
            const row = table.insertRow();
            const cell1 = row.insertCell();
            const cell2 = row.insertCell();
            const cell3 = row.insertCell();
            cell1.textContent = number;
            cell2.textContent = 'x';
            cell3.textContent = i;
            const cell4 = row.insertCell();
            cell4.textContent = '=';
            const cell5 = row.insertCell();
            cell5.textContent = number * i;
             number.value=''
        }
        container.appendChild(table);
       
    } else {
        alert('Please enter a number');
    }
}
