const addExpense = document.querySelector(".add-button");
const removeAllBtn = document.querySelector(".remove-all-button");
const totalDollars = document.querySelector(".expenses");
const totalCount = document.querySelector(".count");

let totalExpenses = [];
let expensesCount = [];

function addExpenseHandler() {
    let name = document.querySelector("#name").value;
    let date = document.querySelector("#date").value;
    let amount = document.querySelector("#amount").value;

    //select table, create new row
    let table = document.querySelector(".main-table");

    //loop through row to input cells. 
    for (let i = 0; i < 1; i++) {
        let row = document.createElement("tr");
            //declare amount of collums
            let col = document.createElement("td");
            let col2 = document.createElement("td");
            let col3 = document.createElement("td");
            let col4 = document.createElement("td");
              
            const btn = document.createElement("button");
            btn.className = "btn";
            //change inner HTML of value of field inputs
            col.innerHTML =  `${name}`;
            col2.innerHTML = `${date}`;
            col3.innerHTML = `$${amount}`;
            btn.innerHTML = "Delete";
            //append each collumn to row
            row.appendChild(col);
            row.appendChild(col2);
            row.appendChild(col3);
            row.appendChild(col4);
            col4.appendChild(btn);
            //push to total expense array.
            expensesCount.push(1); 
            totalExpenses.push(parseInt(`${amount}`)); 
            //sum array contents 
            let sum = totalExpenses.reduce(function(a,b) {
        return a + b
    }, 0);
            let count = expensesCount.reduce(function(a,b) {
                return a + b
            }, 0);
        totalDollars.innerHTML = `$${sum}`;
        totalCount.innerHTML = `${count}`;

     
        table.appendChild(row);



       btn.addEventListener("click", (e) => {
           //remove closest rows
            e.target.closest("tr").remove();
            //remove 1 from counting array
            expensesCount.pop();
            //recalculate acounting array after pop
            let updatedCount = expensesCount.reduce(function(a,b) {
                return a + b
            }, 0);
            totalCount.innerHTML = `${updatedCount}`
    })


    }   
};

function removeAllHandler() {
    //identify first row
    let rows = document.getElementsByTagName("tr");
    //loop through and remove all but top 2 rows
    for (let i = rows.length - 1; i > 1; i--) {
        rows[i].parentNode.removeChild(rows[i]);
    }
    //empty counting & expense arrays
    totalExpenses = [];
    expensesCount = [];
    //reset counter inner HTML
    totalDollars.innerHTML = "$0";
    totalCount.innerHTML = "0";
}



addExpense.addEventListener("click", addExpenseHandler);
removeAllBtn.addEventListener("click", removeAllHandler);

