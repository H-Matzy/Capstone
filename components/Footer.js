import html from "html-literal";
import images from "../images/Logo.png"

export default () => html`
<div class="outerFooter">
            <a href="https://www.twitch.tv/hmatzy"><img id="Logo" src="${images}"></a>
            <div class="footerThird">
                <a href="https://www.linkedin.com/in/hayden-matz-a90b70189/" class="contact">Contact Page</a>
            </div>
            <div class="footerThird">
                <a href="https://haydenmatz.me/index.html" class="about">About Me</a>
            </div>
            <div class="footerThird">
                © Hayden Matz 2021
            </div>`