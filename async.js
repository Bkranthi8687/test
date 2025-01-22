// // // // !promise
// // // let p1=new Promise((resolve,reject)=>{});
// // // console.log(p1);

// // // let p2=new Promise((resolve,reject)=>{
// // //     resolve("sucess");

// // // });
// // // console.log(p2);
// // // p2.then((response)=>
// // // {
// // // console.log(response);
// // // }).catch((error)=>{
// // //     console.log(error);
// // // }).finally(()=>console.log("finallu printing for both"))
// // // let p3=new Promise((resolve,reject)=>{
// // //     reject("Failures");
// // // });
// // // console.log(p3);

// // function fetchUsers(){
// //     let x = fetch("https://jsonplaceholder.typcode.com/users");
// //     x
// //     .then((response)=>{
// //         return response.json().then(data=>{
// //             console.log(data);

// //         })
// //     })
// //     .catch(err=>console.log(err))
// //     }

// // fetchUsers();


// function fetchUsers() {
//     let x = fetch("https://jsonplaceholder.typicode.com/users"); // Corrected the URL
//     x
//     .then(response => response.json())
//     .then(data => {
//         return response.json().then(data=>{
//         console.log(data); // This will log the user data to the console
//         let store = document.getElementById("store");
//         data.map((users)=>{}
//     }
//     store.innerHTML +='
//     <tr>
//     <td>${user.id}</td>
//     <td>${user.name>
//     <td>${user.id}</td>
//     <td>${user.id}</td>

//     .catch(err => console.log(err)); // This will log any errors to the console
// }

// fetchUsers();

function fetchUsers() {
    let x = fetch("https://jsonplaceholder.typicode.com/users"); 
    x
    .then(response => response.json())
    .then(data => {
        console.log(data); // This will log the user data to the console
        let store = document.getElementById("store");
        data.map(user => {
            store.innerHTML += `
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.username}</td>
                <td>${user.email}</td>
            </tr>
            `;
        });
    })
    .catch(err => console.log(err)); // This will log any errors to the console
}

fetchUsers();

