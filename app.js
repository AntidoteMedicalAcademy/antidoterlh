function saveUser(){

  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let blood = document.getElementById('blood').value;
  let division = document.getElementById('division').value;
  let district = document.getElementById('district').value;
  let thana = document.getElementById('thana').value;
  let date = document.getElementById('date').value;
  let status = document.getElementById('status').value;

  let donor = {
    name,
    email,
    blood,
    division,
    district,
    thana,
    date,
    status
  };

  localStorage.setItem(
    'donor',
    JSON.stringify(donor)
  );

  alert('Account Created Successfully');

  window.location = 'dashboard.html';
}


let donorList = document.getElementById('donorList');

if(donorList){

  let donor = JSON.parse(
    localStorage.getItem('donor')
  );

  if(donor){

    let today = new Date();
    let donateDate = new Date(donor.date);

    let diffTime = today - donateDate;

    let diffDays = Math.floor(
      diffTime / (1000 * 60 * 60 * 24)
    );

    let countdown = '';

    if(donor.status === 'available'){
      countdown = diffDays + 1 + ' Days Active';
    }
    else{
      countdown = 120 - diffDays + ' Days Remaining';
    }

    donorList.innerHTML = `

    <div class="card">

      <h2>${donor.name}</h2>

      <p>📧 ${donor.email}</p>

      <p>🩸 ${donor.blood}</p>

      <p>📍 ${donor.division}, ${donor.district}, ${donor.thana}</p>

      <p>🗓️ Donated ${diffDays} days ago</p>

      <p class="${donor.status}">
        ${donor.status.toUpperCase()}
      </p>

      <p>⏳ ${countdown}</p>

    </div>

    `;
  }
}
