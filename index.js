function addExpense(){
    let expense = document.getElementById('expense').value;
    let amount = document.getElementById('amount').value;
    let date = document.getElementById('date').value;
    let quantity = document.getElementById('number').value;
    let row = document.getElementById("row");
    row.innerHTML = `<td>${expense}</td><td>${amount}</td><td>${date}</td><td>${quantity}</td>`;
}