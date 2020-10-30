class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <style>
    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Baumans&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /*font-family: "Poppins", sans-serif;*/
  font-family: "Ubuntu", sans-serif;
  text-decoration: none;
}
body {
  min-height: 100vh;
  background: #fff;
}
.navigation {
  position: fixed;
  width: 75px;
  height: 100%;
  background: #eee7ff;
  transition: 0.5s;
  overflow: hidden;
}
.navigation:hover,
.navigation.active {
  width: 300px;
}
.navigation ul {
  margin-top: 50px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
.navigation ul li {
  position: relative;
  width: 100%;
  list-style: none;
}
.navigation ul li:hover {
  background-size: 10px;
  background: #ccb5ff;
}
.navigation ul li a {
  position: relative;
  display: block;
  width: 100%;
  display: flex;
  text-decoration: none;
  color: #5a23f9;
}
.spacer {
  /* whitespacecontainer */
  width: 80px;
  height: 80px;
  top: 50%;
  left: 20%;
  margin-right: 10%;
  transform: translate(10%, 10%);
}
.spacer-small {
  /* whitespacecontainer */
  width: 80px;
  height: 20px;
  top: 50%;
  left: 20%;
  margin-right: 10%;
  transform: translate(10%, 10%);
}
.container {
  width: 80px;
  height: 50px;
  top: 50%;
  left: 20%;
  margin-right: 10%;
  transform: translate(10%, 10%);
}
.container img {
  width: 50%;
  height: auto;
  margin-top: 20px;
}
.navigation ul li a .icon {
  position: relative;
  display: block;
  min-width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
}
.networkicon {
  position: relative;
  display: block;
  max-width: 60px;
  height: auto;
  line-height: 60px;
  text-align: left;
  filter: invert(21%) sepia(96%) saturate(5369%) hue-rotate(255deg)
    brightness(93%) contrast(110%);
}
.profilecontainer {
  width: 60px;
  height: 60px;
  top: 50%;
  left: 20%;
  margin-right: 17%;
  transform: translate(10%, 10%);
}
.profilecontainer img {
  width: 90%;
  height: auto;
}
.profileicon {
  position: relative;
  display: block;
  max-width: 80px;
  height: auto;
  line-height: 60px;
  text-align: left;
}
.profiletitle {
  position: relative;
  display: block;
  padding: 0 10px;
  font-size: 14px;
  line-height: 60px;
  margin-top: 5px;
}

.navigation ul li a .title {
  position: relative;
  display: block;
  padding: 0 10px;
  height: 60px;
  line-height: 82px;
  text-align: start;
  white-space: nowrap;
  font-size: 14px;
}
.toggle {
  position: absolute;
  top: 0;
  right: 0;
  width: 60px;
  height: 60px;
  background: #eee7ff;
  cursor: pointer;
}
.toggle:active {
  background: #ccb5ff;
}
.toggle:before {
  content: "\f0c9";
  font-family: fontAwesome;
  position: absolute;
  width: 100%;
  height: 100%;
  line-height: 60px;
  text-align: center;
  font-size: 24px;
  color: #fff;
}
.toggle:active:before {
  content: "\f00d";
}
@media (max-width: 767px) {
  .navigation {
    left: -60px;
  }
  .navigation.active {
    left: 0px;
    width: 100%;
  }
}

/* LOGO */

.logocontainer {
  width: 60px;
  height: 60px;
  top: 50%;
  left: 25%;
  margin-right: 17%;
  margin-top: -35px;
  transform: translate(10%, 10%);
}
.logocontainer img {
  width: 80%;
  height: auto;
  margin-left: 7px;
}
.logoicon {
  position: relative;
  display: block;
  max-width: 80px;
  height: auto;
  line-height: 60px;
  text-align: left;
}
.logotitle {
  position: relative;
  display: block;
  padding: 0 10px;
  font-size: 16px;
  line-height: 14px;
  color: #fa295e;
  font-family: "Baumans", cursive;
  text-align: center;
  padding-right: -50px;
}

    </style>

    <div class="navigation">
      <ul>
        <a href="#">
          <div class="logocontainer">
              <span class="icon logoicon"><img src="images/logo.png" alt="logo"></i></span>
          </div>
          <span class="logotitle">Super</span>
          <span class="logotitle">Charged</span>
        </a>
        <div class="spacer"></div>
        <li>
          <a href="index.html">
            <div class="container">
                <span class="icon networkicon"><img src="images/home.png" alt="home"></i></span>
            </div>
            <span class="title">Home</span>
          </a>
        </li>
        <div class="spacer-small"></div>
        <li>
          <a href="#">
            <div class="container">
                <span class="icon networkicon"><img src="images/sessions.png" alt="sessions"></i></span>
            </div>
            <span class="title">Sessions</span>
          </a>
        </li>
        <div class="spacer-small"></div>
        <li>
          <a href="#">
            <div class="container">
                <span class="icon networkicon"><img src="images/message.png" alt="message"></i></span>
            </div>
            <span class="title">Chat</span>
          </a>
        </li>
        <div class="spacer-small"></div>
        <li>
          <a href="#">
            <div class="container">
                <span class="icon networkicon"><img src="images/calendar.png" alt="calendar"></i></span>
            </div>
            <span class="title">Discover</span>
          </a>
        </li>
        <div class="spacer-small"></div>
        <li>
          <a href="network.html">
            <div class="container">
                <span class="icon networkicon"><img src="images/network.png" alt="network"></i></span>
            </div>
            <span class="title">Network</span>
          </a>
        </li>
        <div class="spacer"></div>
        <li>
          <a href="#">
            <div class="profilecontainer">
                <span class="icon profileicon"><img src="images/profile.png" alt="profile"></i></span>
            </div>
            <span class="profiletitle">Profile</span>
          </a>
        </li>
      </ul>
    </div>
    `;
  }
}

customElements.define("navbar-component", Navbar);
