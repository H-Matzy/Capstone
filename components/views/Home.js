import html from "html-literal";

export default () => html`
<div class="webBody">
            <div class="webLeft">
                <div id="username">User: </div>
                <div class="profileCard">
                    <div class="profilePicture"><img id="profileImage"></div>
                </div>
                <div class="profileLevel">
                <div id="Followers">Followers:</div>
                <div id="Subs">Subs:</div></div>
            </div>
            
            <div class="webRight">
                <div id="chat-box">
                Twitch Chat
                    <ul id="messagesList">
                                                
                    </ul>
                </div>
                <ul class="downloadPreview" id="testID">
                <li id="videoField">TopClips</li>
                </ul>

            </div>
        </div>`