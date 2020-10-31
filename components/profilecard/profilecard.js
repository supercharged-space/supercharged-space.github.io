class Profilecard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <style> 
    * {
      padding: 0px;
      margin: 0px;
      font-family: "Ubuntu", sans-serif;
      text-decoration: none;
    }
    .profilecard {
      position: absolute;
      top: 5%;
      left: 20%;
    }
    .cardborder {
      width: 682px;
      height: 770px;
      background: rgba(255, 255, 255, 1);
      opacity: 1;
      position: absolute;
      top: 0px;
      left: 0px;
      border: 1px solid rgba(215, 209, 255, 1);
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      overflow: hidden;
    }
    .givetitle {
      width: 177px;
      color: rgba(163, 148, 252, 1);
      position: absolute;
      top: 672px;
      left: 246px;
      font-weight: Bold;
      font-size: 20px;
      text-align: left;
    }
    .givetext {
      width: 490px;
      color: rgba(62, 60, 60, 1);
      position: absolute;
      top: 699px;
      left: 108px;
      font-weight: Regular;
      font-size: 15px;
      text-align: left;
      line-height: 20px;
    }
    .asktext {
      width: 506px;
      color: rgba(63, 60, 60, 1);
      position: absolute;
      top: 626px;
      left: 108px;
      font-weight: Regular;
      font-size: 15px;
      text-align: left;
      line-height: 20px;
    }
    .InterestsTitle {
      width: 92px;
      color: rgba(178, 175, 175, 1);
      position: absolute;
      top: 485px;
      left: 85px;
      font-weight: Bold;
      font-size: 20px;
      text-align: left;
    }
    .asktitle {
      width: 240px;
      color: rgba(163, 148, 252, 1);
      position: absolute;
      top: 597px;
      left: 221px;
      font-weight: Bold;
      font-size: 20px;
      text-align: left;
    }
    .IntroTitle {
      width: 51px;
      color: rgba(178, 175, 175, 1);
      position: absolute;
      top: 360px;
      left: 85px;
      font-weight: Bold;
      font-size: 20px;
      text-align: left;
    }
    .Headline {
      width: 240px;
      color: rgba(178, 175, 175, 1);
      position: absolute;
      top: 226px;
      left: 221px;
      font-weight: Medium;
      font-size: 22px;
      text-align: left;
    }
    .Name {
      width: 248px;
      color: rgba(0, 0, 0, 1);
      position: absolute;
      top: 187px;
      left: 287px;
      font-weight: Medium;
      font-size: 25px;
      text-align: left;
    }
    .socialmedia1 {
      width: 100px;
      height: 100px;
      position: absolute;
      top: 270px;
      left: 246px;
    }
    .socialmedia1 img {
      width: 50%;
      height: auto;
    }
    .socialmedia2 {
      width: 100px;
      height: 100px;
      position: absolute;
      top: 270px;
      left: 316px;
    }
    .socialmedia2 img {
      width: 50%;
      height: auto;
    }
    .socialmedia3 {
      width: 100px;
      height: 100px;
      position: absolute;
      top: 270px;
      left: 386px;
    }
    .socialmedia3 img {
      width: 50%;
      height: auto;
    }
    .bio {
      width: 477px;
      color: rgba(62, 60, 60, 1);
      position: absolute;
      top: 362px;
      left: 168px;
      font-weight: Regular;
      font-size: 15px;
      text-align: left;
      line-height: 20px;
    }
    .lightbluebox1 {
      width: 145px;
      height: 32px;
      background: rgba(175, 231, 255, 1);
      position: absolute;
      top: 485px;
      left: 210px;
      border-radius: 10px;
    }
    .tag1 {
      width: 140px;
      color: rgba(95, 141, 255, 1);
      position: absolute;
      top: 490px;
      left: 221px;
      font-weight: Bold;
      font-size: 18px;
      text-align: left;
    }
    .lightbluebox2 {
      width: 165px;
      height: 32px;
      background: rgba(175, 231, 255, 1);
      position: absolute;
      top: 485px;
      left: 384px;
      border-radius: 10px;
      overflow: hidden;
    }
    .tag2 {
      width: 164px;
      color: rgba(95, 141, 255, 1);
      position: absolute;
      top: 490px;
      left: 395px;
      font-weight: Bold;
      font-size: 18px;
      text-align: left;
    }
    .lightbluebox3 {
      width: 128px;
      height: 32px;
      background: rgba(175, 231, 255, 1);
      position: absolute;
      top: 532px;
      left: 210px;
      border-radius: 10px;
      overflow: hidden;
    }
    .tag3 {
      width: 122px;
      color: rgba(95, 141, 255, 1);
      position: absolute;
      top: 537px;
      left: 221px;
      font-weight: Bold;
      font-size: 18px;
      text-align: left;
    }
    .lightbluebox4 {
      width: 96px;
      height: 32px;
      background: rgba(175, 231, 255, 1);
      position: absolute;
      top: 532px;
      left: 366px;
      border-radius: 10px;
      overflow: hidden;
    }
    .tag4 {
      width: 83px;
      color: rgba(95, 141, 255, 1);
      position: absolute;
      top: 537px;
      left: 378px;
      font-weight: Bold;
      font-size: 18px;
      text-align: left;
    }
    .lightbluebox5 {
      width: 70px;
      height: 32px;
      background: rgba(175, 231, 255, 1);
      position: absolute;
      top: 532px;
      left: 482px;
      border-radius: 10px;
      overflow: hidden;
    }
    .tag5 {
      width: 54px;
      color: rgba(95, 141, 255, 1);
      position: absolute;
      top: 537px;
      left: 494px;
      font-weight: Bold;
      font-size: 18px;
      text-align: left;
    }
    .editcontainer {
      width: 50px;
      height: 50px;
      position: absolute;
      opacity: 1;
      top: 20px;
      left: 600px;
    }
    .editcontainer img {
      width: 70%;
      height: auto;
    }
    .editicon {
      filter: invert(55%) sepia(0%) saturate(0%) hue-rotate(204deg) brightness(92%)
        contrast(86%);
    }
    .profilecontainer2 {
      width: 135px;
      height: 135px;
      opacity: 1;
      position: absolute;
      top: 35px;
      left: 274px;
    }
    .profilecontainer2 img {
      width: 100%;
      height: auto;
    }
  </style>
  <div class="profilecard">
      <div class="cardborder"></div>
      <span class="givetitle">I can help you with </span
      ><span class="givetext"
        >As an endless ideator, I can help you brainstorm for your startup idea.
        User acquisition strategy, product, pitch, anything </span
      ><span class="asktext"
        >If anyone has expertise in growth marketing, I would love to
        connect!</span
      ><span class="InterestsTitle">Interests</span
      ><span class="asktitle">I would like some help on </span
      ><span class="IntroTitle">Intro</span
      ><span class="Headline">Product Designer, Coda</span
      ><span class="Name">Catie Lin </span>
      <div class="socialmedia1">
        <img src="images/linkedin.png" alt="linkedin"></i>
      </div>
      <div class="socialmedia2">
        <img src="images/dribbble.png" alt="dribbble"></i>
      </div>
      <div class="socialmedia3">
        <img src="images/behance.png" alt="behance"></i>
      </div>
      <div class="spacer-small"></div>
      <span class="bio"
        >I'm hipster try-hard woke slow-carb umami, typewriter plaid kombucha
        mustache kale chips you probably haven't heard of them celiac. Blue
        bottle art party echo park swag truffaut wayfarers coloring book.</span
      >
      <div class="lightbluebox1"></div>
      <span class="tag1">product design</span>
      <div class="lightbluebox2"></div>
      <span class="tag2">entrepreneurship</span>
      <div class="lightbluebox3"></div>
      <span class="tag3">UX/UI design</span>
      <div class="lightbluebox4"></div>
      <span class="tag4">blogging</span>
      <div class="lightbluebox5"></div>
      <span class="tag5">music</span>
      <div class="editcontainer">
        <span class="icon editicon"
          ><img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAB00lEQVRoQ+2ZsVHEMBBF/1UAHUAJ0AEdQAHExIRkQEgEOSENQAWUACVABRwRIcyfsRjweXclWSvpZqzoZk6W39vVypa1wpa31ZbzYxFoncFeM3AF4AvAjRWgHgUIfzmAX1gSlsA+gFsABwD4e077BHAE4FUZ5C986KZKaAIEfgGwO4d6uDYX3pTQBB4BHHcAr0poAh8Foh8T+QD4AODUCNjGdNIEvkeDWfVSIFmwJK4BsE5+W0sBgvyDGagkiQ149m8lEFabewBnE6kbS0zCtxIYL5WWhAjfQmBqnSeHJCFNsyY1IMEHGElCXRxq1YAFny1RQyAWPkioc36cDm8BV3jvInaH9xQoDc8XyvVUNXtMIQ/4ZwCHNQS84LkfmQx2yQx4wovTvZRAaXgCczPFyIfmlgEPeEJHvc6XyMD4RtqjP+Uh1Z1ACnx3GUiF70ogB74bgVz4LgS4OlEgt1Ur4lxA67pFICoCVhhn/B91/xIPshmM6qWLQFQEvMJf4l2IO6AdR8CUod+l84kan9dTQKW+TwBOUndkPODgaUrrLPATPfcFb6kC7E+Ju2GAvRKhTBiD04YBPJfgxW1awk2ad61xaOEquQi4hjdi8CUDEUFy7fIDQO2DMZAZR+gAAAAASUVORK5CYII"
            alt="editicon"
        /></span>
      </div>
      <div class="profilecontainer2">
        <img src="images/profile2.png" alt="profile2"
      </div>
    </div>    
    `;
  }
}

customElements.define("profilecard-component", Profilecard);
