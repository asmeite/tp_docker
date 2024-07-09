document.getElementById('complimentBtn').addEventListener('click', function() {
    fetch('/compliment')
        .then(response => response.json())
        .then(data => document.getElementById('message').innerText = data.message);
});

document.getElementById('roastBtn').addEventListener('click', function() {
    fetch('/roast')
        .then(response => response.json())
        .then(data => document.getElementById('message').innerText = data.message);
});
