const axios = require('axios').default;

const videosList = document.getElementById('videosList')
const obj = {
  asma: 'AmazonianEncouragingLyrebirdAllenHuhu',
  url: window.location.pathname
}
const messages = [];

ComfyJS.onChat = ( user, message, flags, self, extra ) => {
    updateMessages(message);
  }
ComfyJS.Init( `${window.location.pathname.substring(1)}` );

const updateMessages = (text) => {
    messages.push(text);
    const node = document.createElement('li');
    const textnode = document.createTextNode(text);
    node.appendChild(textnode);
    document.getElementById("messagesList").appendChild(node);
}


function result () { 
  let username = window.location.pathname
  console.log("USER", username);
  axios.get(`https://api.twitch.tv/kraken/clips/top?channel=${username.substring(1)}&trending=true&limit=6`, {
  headers: {
    Accept: 'application/vnd.twitchtv.v5+json',
    "Client-Id": `38kie46ro8k5h6crb314f7xylbncti`
  },
}).then((response) => {
  console.log("response", response)
  let result = response.data.clips;
  console.log("result", result);


  result.forEach(element => {
    console.log(element.url);
    let node = document.createElement('a');
    let videonode = document.createElement('video')
    completenode = node.appendChild(videonode);
    completenode.setAttribute("src", element.url)
    completenode.setAttribute('download', element.url);
    document.querySelector(".downloadPreview").appendChild(completenode);
  });
})};

result();