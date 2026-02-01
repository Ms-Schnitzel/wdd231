const getString = window.location.search;

const formInfo = new URLSearchParams(getString);
const timestamp = formInfo.get('timestamp');

document.querySelector("#results").innerHTML = `
  <p>${formInfo.get('first-name')} ${formInfo.get('last-name')}</p>
  <p>${formInfo.get('title')}</p>
  <p>Email Address: ${formInfo.get('email')}</p>
  <p>Phone Number: ${formInfo.get('phone')}</p>
  <hr>
  <p>Company Name: ${formInfo.get('business')}</p>
  <p>Business Description: ${formInfo.get('description')}</p>
  <p>Applying for ${formInfo.get('membership')}</p>
  <hr>
  <p>Applied on ${new Intl.DateTimeFormat(
  "en-US",
  {
    dateStyle: "medium"
  }
).format(lastMod)}
`



// ${new Intl.DateTimeFormat(
//   "en-US",
//   {
//     dateStyle: "medium"
//   }
// ).format(lastMod)}