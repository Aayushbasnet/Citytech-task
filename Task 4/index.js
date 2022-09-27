let submitBtn = document.querySelector('#submitBtn');
let employeeForm = document.querySelector('#employeeForm');
employeeForm.addEventListener('submit', (e)=>{
    e.preventDefault();
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

    console.log(fname.value);
    console.log(lname.value);
    console.log(email.value);
    console.log(password.value);
    console.log(gender.value);
    console.log(phoneNumber.value);
    console.log(position.value);
    console.log(enrollmentDate.value);
    for(let i =0; i < interest.length; i++){
        if(interest[i].checked){
            console.log(interest[i].value);
        };
    };
    console.log(remark.value);
    alert("Successfully submitted");
    // let fname = document.querySelector()
});