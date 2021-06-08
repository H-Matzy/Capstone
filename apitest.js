let xhr = new XMLHttpRequest();
  
xhr.open('GET', 'https://api.twitch.tv/kraken', true);
  
xhr.setRequestHeader(`${process.env.TWITCH_ACCESS_TOKEN}`, '...');
  
xhr.onload = function(data){
  console.log(data);
};
  
xhr.onerror = function(error){
  console.log(error.target.status);
};
  
xhr.send();