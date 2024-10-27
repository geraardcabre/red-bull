
window.onload = function() {
  this.drivers = [];
  fetchData()
};

function fetchData() {
  const xhr = new XMLHttpRequest();
  const url = 'https://pitwall.redbullracing.com/api/stats/drivers/2023'; 
  const API_KEY = '7303c8ef-d91a-4964-a7e7-78c26ee17ec4';


  xhr.open('GET', url, true);

  xhr.setRequestHeader('x-api-key', API_KEY);
  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) { 
      if (xhr.status === 200) { 
        const data = JSON.parse(xhr.responseText);
        formatData(data);
        generateTable();
      }
    }
  };

  xhr.send();
}

function formatData(data) {
  let position = 1; 

  for (const driver of data) {
      this.drivers = this.drivers.concat(new Driver(driver.first_name + " " + driver.last_name, driver.season_points, position, driver.season_team_name, driver.driver_country_code));
      position++;
  }

  console.log(this.drivers);

}

function generateTable() {
  const tableContainer = document.querySelector('[data-attribute="drivers-info"]');
  


  this.drivers.forEach(driver => {
    const row = document.createElement('tr');
    const flagImage = document.createElement('img');
    flagImage.src = driver.flagUrl;

    row.innerHTML = `
        <td>${driver.position}</td>
        <td><div data-attribute="name" class="driver-name">${driver.name}</div></td>
        <td>${driver.constructorName}</td>
        <td>${driver.points}</td>
    `;

    row.querySelector('[data-attribute="name"]').prepend(flagImage); 

    tableContainer.appendChild(row);
  });

}