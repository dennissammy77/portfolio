document.getElementById('CONTACT_FORM').addEventListener('submit',((e)=>{
    e.preventDefault();
    const payload = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value,
        event_date: new Date()
    };

    if(!payload?.name || !payload?.phone || !payload?.email || !payload?.message ){
        return alert("Ensure all fields have been filled");
    }

    const requestOptions = { 
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }

    fetch('https://events.sendpulse.com/events/name/portfolio_reachout',requestOptions)
        .then(function(response) {
        return response.json();
    }).then(function(result) {
        if(result?.result === "true"){
            alert("thank you for reaching out")
        }else{
            alert("Something went wrong")
        }
    }).catch((err)=>{
        alert(`Something went wrong, ${err}`)
    });

}))