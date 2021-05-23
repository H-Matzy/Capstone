console.log('hello');
const messagesList = document.getElementById('messagesList')
const messages = [];

ComfyJS.onChat = ( user, message, flags, self, extra ) => {
    updateMessages(message);
  }
ComfyJS.Init( 'hmatzy' );

const updateMessages = (text) => {
    messages.push(text);
    const node = document.createElement('li');
    const textnode = document.createTextNode(text);
    node.appendChild(textnode);
    document.getElementById("messagesList").appendChild(node);
}