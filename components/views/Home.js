import html from "html-literal";

export default () => html`
<div class="webBody">
            <div class="webLeft">
                <div id="username">User: </div>
                <div class="profileCard">
                    <div class="profilePicture"><img id="profileImage"></div>
                </div>
                <div class="profileLevel">Followers: # Subs: #</div>
            </div>
            
            <div class="webRight">
                <div id="chat-box">
                    <ul id="messagesList">
                        <li>Twitch Chat:</li>
                        
                    </ul>
                </div>
                <ul class="downloadPreview" id="testID">
                <li id="videoField">TopClips</li>
                </ul>

            </div>
        </div>`