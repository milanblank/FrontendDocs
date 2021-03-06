/**
 * Created by Milan.Stojiljkovic on 6/27/2017.
 */
var employeesList = [
    {
        firstName: 'John',
        lastName: 'King',
        phone: '3123456789',
        salary: 4500,
        salaryInEuro: 0
    },
    {
        firstName: 'Steven',
        lastName: 'Gerard',
        phone: '0123456789',
        salary: 4500,
        salaryInEuro: 0
    },
    {
        firstName: 'Diana',
        lastName: 'Ross',
        phone: '2123456789',
        salary: 4500,
        salaryInEuro: 0
    },
    {
        firstName: 'Mike',
        lastName: 'Bob',
        phone: '1123456789',
        salary: 4500,
        salaryInEuro: 0
    },
    {
        firstName: 'Emily',
        lastName: 'Hudson',
        phone: '0123456789',
        salary: 4500,
        salaryInEuro: 0
    }
];

function showList() {
    calculateSalaryInEuro();
    var myTable = '<table border="1" class="table table-hover">' +
        '<tr class="info">' +
            '<th>First Name</th>' +
            '<th>Last Name</th>' +
            '<th>Phone</th>' +
            '<th>Salary</th>' +
            '<th>Salary in Euro</th>' +
        '</tr>';
    for(var i in employeesList) {
        myTable +=
            '<tr>' +
                '<td>' +employeesList[i].firstName+'</td>' +
                '<td>' +employeesList[i].lastName+ '</td>' +
                '<td>' + employeesList[i].phone+ '</td>' +
                '<td>' +employeesList[i].salary+ '</td>' +
                '<td>' +employeesList[i].salaryInEuro+ '</td>' +
                '<td><button onclick="showRow('+i+')">'+"Show"+'</button></td>' +
                '<td><button onclick="deleteRow('+i+')">'+"Delete"+'</button></td>'
            '</tr>';
    }
    myTable +=
        '<tr>' +
            '<td>'+ mostCommonName() +'</td>' +
            '<td>'+ NumberOfUniqueNames() + '</td>' +
            '<td>'+ mostCommonDigitsInPhone() + '</td>' +
            '<td>'+ avarageSalary() + '</td>' +
        '</tr>';
    myTable += '</table>';
    var container = document.getElementById('listcontainer');
    container.innerHTML = myTable;
}

var Employee = function (firstName, lastName, phone, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.salary = salary;
}

function addEmployee() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var salary = Number(document.getElementById("salary").value);
    employeesList.push(new Employee(firstName, lastName, phone, salary));
    showList();
}

function calculateSalaryInEuro() {
    for (i in employeesList){
        employeesList[i].salaryInEuro = employeesList[i].salary / 4.5;
    }
}

function sumSalaries(){
    var sum = 0;
    for (i in employeesList){
        sum += employeesList[i].salary;
    }
    document.getElementById('salaryCal').innerHTML = "Total sum of salaries is " + sum + " RON.";
}

function deleteLastEmployee() {
    employeesList.splice(-1,1);
    showList();
}

function showRow(i) {
    alert("Name: " + employeesList[i].firstName +
        "\n"  + "Last name: "+employeesList[i].lastName +
        "\n" + "Phone number: " + employeesList[i].phone +
        "\n" + "Salary: " + employeesList[i].salary +
        "\n" + "Salary in Euro: " + employeesList[i].salaryInEuro);
}

function deleteRow(i) {
    employeesList.splice(i,1);
    showList();
}

function mostCommonName() {
    var max = 0;
    var name;
    for (i in employeesList){
        var counter = 0;
        for (j in employeesList){
            if(employeesList[i].firstName==employeesList[j].firstName)
                counter ++;
        }
        if(counter>max){
            max = counter;
            name = employeesList[i].firstName;
        }
    }
    return name;
}

function NumberOfUniqueNames() {
    var name;
    var uniqueCounter = 0;
    for (i in employeesList){
        var counter = 0;
        for (j in employeesList){
            if(employeesList[i].firstName==employeesList[j].firstName)
                counter ++;
        }
        if(counter==1){
            uniqueCounter++;
        }
    }
    return uniqueCounter;
}

function mostCommonDigitsInPhone() {
    var pos = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var counter = [0,0,0,0,0,0,0,0,0,0];
    for(i in employeesList){
        for(j = 0; j< 10; j++){
            counter[employeesList[i].phone[j]] ++;
        }
    }
    for(i = 0; i<10; i++)
        for(j = i; j<10; j++)
            if(counter[i]<counter[j])
            {
                var aux = counter[i];
                counter[i] = counter[j];
                counter[j] = aux;
                aux = pos[i];
                pos[i] = pos[j];
                pos[j] = aux;
            }
    var newPos = [pos[0], pos[1], pos[2], pos[3], pos[4]];
    return newPos;
}

function avarageSalary() {
    var sum = 0.0;
    var nrRows = 0;
    for (i in employeesList){
        var salary = employeesList[i].salary;
        sum += salary;
        nrRows++;
    }
    sum = sum / nrRows;
    return sum;
}

function sortBy() {
    var input = document.getElementById("sortBy").value;
    if (input == 1){
        for(i in employeesList){
            for (j = i; j < employeesList.length; j++){
                if(employeesList[i].firstName>employeesList[j].firstName){
                    var aux = employeesList[i];
                    employeesList[i] = employeesList[j];
                    employeesList[j] = aux;
                }
            }
        }
    }
    else if (input == 2) {
        for(i in employeesList){
            for (j = i; j < employeesList.length; j++){
                if(employeesList[i].lastName>employeesList[j].lastName){
                    var aux = employeesList[i];
                    employeesList[i] = employeesList[j];
                    employeesList[j] = aux;
                }
            }
        }
    } else if (input == 3) {
        for(i in employeesList){
            for (j = i; j < employeesList.length; j++){
                if(employeesList[i].phone>employeesList[j].phone){
                    var aux = employeesList[i];
                    employeesList[i] = employeesList[j];
                    employeesList[j] = aux;
                }
            }
        }
    } else if (input == 4) {
        for(i in employeesList){
            for (j = i; j < employeesList.length; j++){
                if(employeesList[i].salary>employeesList[j].salary){
                    var aux = employeesList[i];
                    employeesList[i] = employeesList[j];
                    employeesList[j] = aux;
                }
            }
        }
    }
    showList();
}

function filter() {
    var input = document.getElementById("filter").value;
    var i = 0;
    while (i < employeesList.length){
        var myBool = 0;
        if (employeesList[i].firstName == input){
            myBool = 1;
        } else if (employeesList[i].lastName == input){
            myBool = 1;
        } else if (employeesList[i].phone == input){
            myBool = 1;
        } else if (employeesList[i].salary == input){
            myBool = 1;
        }
        if (myBool == 0){
            deleteRow(i);
        } else
            i++;
    }
    showList();
}

function onMouseOver() {
    document.getElementById("chuck").style.visibility="visible";
    document.getElementById("chuck").style.position="absolute";
}