import html from "html-literal";

export default st => html`
<div class="header">
            <div class="inner_header">
                <div class="logo_container">
                    <h1>Top<span>Kek</span>!</h1>
                </div>
                <div class="outer_navigation">
                    <button class="hamburger" id="hamburger">
                        <i class="fas fa-bars"></i>
                    </button>
                    <ul class="navigation">
                        <a id="nav-li" href="index.html">Home</a>
                        <a id="nav-li" href="https://haydenmatz.me/index.html">About</a>
                        <a id="nav-li" href="https://www.linkedin.com/in/hayden-matz-a90b70189/">Contact</a>
                    </ul>
                </div>
            </div>
        </div>
        <div id="searchBar">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

            <!-- The form -->
            <form class="example" action="action_page.php">
            <input type="text" id="inputText" placeholder="Search.." name="search">
            <button type="submit" id="searchButton"><i class="fa fa-search"></i></button>
            </form>
        </div>
        `