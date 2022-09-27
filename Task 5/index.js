let submitBtn = document.querySelector('#submitBtn');
let employeeForm = document.querySelector('#employeeForm');

// display data on table
let allData = JSON.parse(localStorage.getItem("All Data"));
// console.log("aagadi ko data: ", allData);
if(allData == null){
    allData = [];
};

// display data in table
var tableData = allData;
let tableBody = document.querySelector('#tableBody');
for(let i=0; i < tableData.length; i++){
    // console.log("column length", Object.keys(tableData[i]).length);
    let row = document.createElement("tr");
    for(let j=0; j < Object.keys(tableData[i]).length; j++){
        row.innerHTML = `
            <td>${i+1}</td>
            <td>${tableData[i].fname}</td>
            <td>${tableData[i].lname}</td>
            <td>${tableData[i].email}</td>
            <td>${tableData[i].gender}</td>
            <td>${tableData[i].phoneNumber}</td>
            <td>${tableData[i].position}</td>
            <td>${tableData[i].enrollmentDate}</td>
            <td>${tableData[i].interest}</td>
            <td>${tableData[i].remark}</td>
        `;
    };
    tableBody.appendChild(row);
};

// form submission
employeeForm.addEventListener('submit', (e)=>{
    // e.preventDefault();
    let fname = employeeForm.elements['first-name'];
    let lname = employeeForm.elements['last-name'];
    let email = employeeForm.elements['email'];
    let password = employeeForm.elements['password'];
    let gender = employeeForm.elements['gender'];
    let phoneNumber = employeeForm.elements['phone-number'];
    let position = employeeForm.elements['position'];
    let interest = employeeForm.elements['interest'];
    let enrollmentDate = employeeForm.elements['enrollment-date'];
    let remark = employeeForm.elements['remark'];
    // checkbox data 
    var interests=[];
    for(let i =0; i < interest.length; i++){
        if(interest[i].checked){
            interests.push(interest[i].value);
        };
    };

    // creating object literals from user data 
    var UserData = {
        "fname":fname.value,
        "lname":lname.value,
        "email":email.value,
        "password":password.value,
        "gender":gender.value,
        "phoneNumber":phoneNumber.value,
        "position":position.value,
        "enrollmentDate":enrollmentDate.value,
        "interest":interests,
        "remark":remark.value
    };

    // retrive old data from localstorage
    let allData = JSON.parse(localStorage.getItem("All Data"));
    if(allData == null){
        allData = [];
    };

    // storing data in localstorage
    localStorage.setItem("New Data", JSON.stringify(UserData)); // new user data
    allData.push(UserData);
    // console.log("All data :", allData);
    localStorage.setItem("All Data", JSON.stringify(allData));

    // alert success result
    alert("Successfully submitted");
});
