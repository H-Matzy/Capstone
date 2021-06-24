const axios = require('axios').default;
const clip_url = 'https://clips.twitch.tv/SeductiveArtsyShingleANELE-z3xpTO8yfxxzsx04';

let username = window.location.pathname
let endpoint1 = `https://api.twitch.tv/kraken/clips/top?channel=${username.substring(1)}&trending=true&limit=6`;
let endpoint2 = `https://api.twitch.tv/helix/users?login=${username.substring(1)}`;
const videosList = document.getElementById('videosList')
const messages = [];
const downloadLinks = [];


ComfyJS.onChat = ( user, message, flags, self, extra ) => {
    updateMessages(message);
    var scroll = document.getElementById('messagesList');
   scroll.scrollTop = scroll.scrollHeight;
   scroll.animate({scrollTop: scroll.scrollHeight});
  }
ComfyJS.Init( `${window.location.pathname.substring(1)}` );

const updateMessages = (text) => {
    messages.push(text);
    const node = document.createElement('li');
    const textnode = document.createTextNode(text);
    node.appendChild(textnode);
    document.getElementById("messagesList").appendChild(node);
}

function getClips () { 
  axios.get(endpoint1, {
  headers: {
    Accept: 'application/vnd.twitchtv.v5+json',
    "Client-Id": `38kie46ro8k5h6crb314f7xylbncti`
  },
}).then((response) => {//Full JSON Payload
  let result = response.data.clips; //Array of Clip Objects
  console.log("result", result);

  let docusername = document.getElementById("username");
  docusername.innerHTML += result[0].broadcaster.name

  let profpic = document.querySelector("#profileImage");
  profpic.setAttribute("src", result[0].broadcaster.logo)


  let counter = 0;
  result.forEach(element => {
    let thumbnail = result[counter].thumbnails.medium
    // replacing -preview-480x272.jpg with .mp4
    let thumbFormat = thumbnail.replace('-preview-480x272.jpg', '.mp4')
    downloadLinks.push(thumbFormat)
    let clipList = document.querySelector('#videoField')
    let newClip = document.createElement('iframe')
    newClip.setAttribute("src", `${result[counter].embed_url}&parent=festive-dubinsky-21360a.netlify.app` )
    document.querySelector(".downloadPreview").appendChild(clipList.appendChild(newClip));
    counter += 1;
  });
})};
getClips();

window.onload = function(){
  let button = document.querySelector('#downloadButton')
  button.addEventListener('click', downloadClips);
}
function downloadClips() {
  downloadLinks.forEach(link => {
    window.open(link);
  })
}