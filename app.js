const axios = require('axios').default;

const videosList = document.getElementById('videosList')
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
let username = window.location.pathname
let endpoint1 = `https://api.twitch.tv/kraken/clips/top?channel=${username.substring(1)}&trending=true&limit=6`;
let endpoint2 = `https://api.twitch.tv/helix/users?login=${username.substring(1)}`;
function getClips () { 
  console.log("USER", username);
  axios.get(endpoint1, {
  headers: {
    Accept: 'application/vnd.twitchtv.v5+json',
    "Client-Id": `38kie46ro8k5h6crb314f7xylbncti`
  },
}).then((response) => {
  console.log("response", response)
  let result = response.data.clips;
  console.log("result", result);

  let docusername = document.getElementById("username");
  docusername.innerHTML += username.substring(1);
  let profpic = document.querySelector("#profileImage");
  profpic.setAttribute("src", response.data.clips[0].broadcaster.logo)


  result.forEach(element => {
    let counter = 0;
    console.log(element.url);
    let clipList = document.querySelector('#videoField')
    let newClip = document.createElement('iframe')
    // let videonode = document.createElement('video')
    // node = clipList.appendChild(newClip);
    newClip.setAttribute("src", `${response.data.clips[counter].embed_url}&parent=festive-dubinsky-21360a.netlify.app` )
    // completenode.setAttribute('download', element.url);
    document.querySelector(".downloadPreview").appendChild(clipList.appendChild(newClip));
    counter += 1;
  });
})};

// function getUserInfo () {
//   axios.get(endpoint2, {
//     headers: {
//       'Authorization': 'Bearer cfabdegwdoklmawdzdo98xt2fo512y',
//       'Client-Id': 'uo6dggojyb8d6soh92zknwmi5ej1q2'
//     },
//   }).then((response) => {
//     console.log("ENDPOINT2", response);
//   })
// }

// getUserInfo();
getClips();
