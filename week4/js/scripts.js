const getString = window.location.search;
console.log(getString);

const myInfo = new URLSearchParams(getString);
console.log(myInfo);

// console.log(myInfo.get('email'));

document.querySelector("#results").innerHTML = `
  <p>Appointment for ${myInfo.get('first')} ${myInfo.get('last')}</p>
  <p>Proxy ${myInfo.get('ordinance')} on ${myInfo.get('date')} in the ${myInfo.get('location')} Temple</p>
  <p>Your Phone: ${myInfo.get('phone')}</p>
  <p>Your email: ${myInfo.get('email')}</p>
`
