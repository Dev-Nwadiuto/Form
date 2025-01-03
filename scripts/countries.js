

document.addEventListener('DOMContentLoaded',() => {
  
  const selectCountry = document.getElementById('country');
  
  fetch('https://restcountries.com/v3.1/all').then(res => {
    return res.json();
  }).then( data => {
    
    let output = "";
    
    data.forEach(country => {
      output = `<option value="Nigerian" selected> Nigerian</option>
                <option>${country.name}</option`;
      
      selectCountry.innerHTML = output;
    })
  })
}).catch(err => {
  console.log(err)
}) 