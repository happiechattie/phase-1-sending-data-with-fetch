function submitData(n, e){
    const newObj = {
        name: n,
        email: e,
    }
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(newObj),
    })
    .then(res => res.json())
    .then(data => render(data))
    .catch(function(error){
        let errorElement = document.createElement('p');
        errorElement = 'Unauthorized Access';
        document.body.append(errorElement);
    })
}

function render(obj){
//    let eID = document.createElement('p');
//    let eName = document.createElement('p');
//    let eEmail = document.createElement('p');
//    eID.innerText = obj.id;
//    eName.innerText = 'name: ' + obj.userName;
//    eEmail.innerText = 'email: ' + obj.userEmail;
    document.body.append(obj.id);
//    eID.append(eName);
//    eID.append(eEmail);
}