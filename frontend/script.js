document.getElementById('fetchData').addEventListener('click', () => {
    fetch('http://your_application_server_ip:3000/api/data')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('dataContainer');
            container.innerHTML = JSON.stringify(data, null, 2);
        })
        .catch(error => console.error('Error fetching data:', error));
});
