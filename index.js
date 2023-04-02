function submitData(name, email){
    const newObj = {
        userName: name,
        userEmail: email,
    }
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body:JSON.stringify(newObj),
    })
    .then(res => res.json())
    .then(data => render(data))
    .catch(function(error){
        let errorElement = document.createElement('p');
        errorElement = 'ERROOOOOOR';
        document.body.append(errorElement);
    })
}

function render(obj){
    let eID = document.createElement('p');
    let eName = document.createElement('p');
    let eEmail = document.createElement('p');
    eID.innerText = 'ID: ' + obj.id;
    eName.innerText = 'name: ' + obj.userName;
    eEmail.innerText = 'email: ' + obj.userEmail;
    document.body.append(eID);
    eID.append(eName);
    eID.append(eEmail);
}