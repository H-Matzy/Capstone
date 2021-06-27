import html from "html-literal";

export default () => html`
<div class="webBody">
        <div class="webLeft">
            <div id="userCard">
                <div id="username">User: </div>
                    <div class="profileCard">
                        <div class="profilePicture"><img id="profileImage"></div>
                </div>
                <div class="profileLevel">
                <div id="Followers">Followers:</div>
                <div id="Subs">Subs:</div></div>
            </div>
        </div>
            
            <div class="webRight">
                <div id="chat-box">
                Twitch Chat
                    <ul id="messagesList">
                                                
                    </ul>
                </div>
                <div id="downloadList">
                <ul class="downloadPreview" id="testID">TopClips
                <button id="downloadButton" class="btn"><i class="fa fa-download"></i> Download</button>
                <li id="videoField"></li>
                </ul></div>

            </div>
        </div>`