.header-menu-container {
  height: 10vh;
  width: 100%;
  background: transparent;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}

.header-menu-container .header-menu {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
  -ms-flex-pack: distribute;
      justify-content: space-around;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  height: 10vh;
}

.header-menu-container .header-menu li {
  height: 10vh;
  width: 20%;
}

.header-menu-container .header-menu li a {
  display: block;
  line-height: 10vh;
  text-align: center;
  color: #ddd;
  cursor: pointer;
  pointer-events: all;
  -webkit-transition: color 0.5s;
  transition: color 0.5s;
}

.header-menu-container .header-menu li a.color-default:hover {
  color: #673ab7;
}

.header-menu-container .header-menu li a.color-not-default {
  color: #e43f5a;
}

.header-menu-container .header-menu li a.color-not-default:hover {
  color: #162447;
}

.header-menu-container .hamburger-background {
  width: 6vh;
  height: 6vh;
  background: transparent;
  cursor: pointer;
  pointer-events: all;
  z-index: 10;
  display: none;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -ms-flex-pack: distribute;
      justify-content: space-around;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  padding: 2px;
}

.header-menu-container .line {
  background: white;
  height: 3px;
  width: 95%;
  z-index: 10;
  -webkit-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}

.click.header-menu-container {
  top: 1rem;
}

.click.hamburger-background .line1 {
  -webkit-transform: rotate(45deg) translateX(2px);
          transform: rotate(45deg) translateX(2px);
  -webkit-transform-origin: 0 0;
          transform-origin: 0 0;
}

.click.hamburger-background .line2 {
  opacity: 0;
}

.click.hamburger-background .line3 {
  -webkit-transform: rotate(-45deg) translateX(-2px);
          transform: rotate(-45deg) translateX(-2px);
  -webkit-transform-origin: 0 0;
          transform-origin: 0 0;
}

#scroll.header-menu-container {
  top: -10vh;
}

@media screen and (max-width: 768px) {
  .header-menu-container {
    top: -10vh;
  }
  .header-menu-container .header-menu {
    width: 95%;
  }
  .header-menu-container .hamburger-background {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
}

@media screen and (max-width: 568px) {
  .header-menu-container .header-menu li:nth-child(4) {
    display: none;
    pointer-events: none;
  }
}

.top-container {
  position: relative;
  overflow-x: hidden;
  background: linear-gradient(153deg, #162447, #673ab7);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  height: 100vh;
}

.top-container .hover-card {
  width: 100%;
  height: 50%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  height: 65vh;
}

.top-container .hover-card h1 {
  display: inline-block;
  color: #eee;
  -webkit-animation-name: text-up;
          animation-name: text-up;
  -webkit-animation-duration: 2s;
          animation-duration: 2s;
  font-weight: bold;
}

.top-container .hover-card small {
  color: #eee;
  -webkit-animation-name: text-zoom;
          animation-name: text-zoom;
  -webkit-animation-duration: 1.5s;
          animation-duration: 1.5s;
  -webkit-animation-delay: 0.5s;
          animation-delay: 0.5s;
}

.top-container svg {
  display: inline-block;
  position: absolute;
  bottom: 0;
  left: 0;
}

.top-container i.fa-arrow-down {
  color: #eee;
  font-size: 2.5rem;
  position: absolute;
  bottom: 2rem;
  -webkit-animation: upDown 1s linear infinite;
          animation: upDown 1s linear infinite;
  cursor: pointer;
  pointer-events: all;
}

@-webkit-keyframes text-up {
  from {
    -webkit-transform: translate(0, 30px);
            transform: translate(0, 30px);
    opacity: 0.1;
  }
  to {
    -webkit-transform: translate(0, 0);
            transform: translate(0, 0);
    opacity: 1;
  }
}

@keyframes text-up {
  from {
    -webkit-transform: translate(0, 30px);
            transform: translate(0, 30px);
    opacity: 0.1;
  }
  to {
    -webkit-transform: translate(0, 0);
            transform: translate(0, 0);
    opacity: 1;
  }
}

@-webkit-keyframes text-zoom {
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    -webkit-transform: scale(1.25);
            transform: scale(1.25);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}

@keyframes text-zoom {
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    -webkit-transform: scale(1.25);
            transform: scale(1.25);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}

@-webkit-keyframes upDown {
  0% {
    -webkit-transform: translate(0, 0);
            transform: translate(0, 0);
  }
  50% {
    -webkit-transform: translate(0, 1rem);
            transform: translate(0, 1rem);
  }
  85% {
    -webkit-transform: translate(0, -1rem);
            transform: translate(0, -1rem);
  }
}

@keyframes upDown {
  0% {
    -webkit-transform: translate(0, 0);
            transform: translate(0, 0);
  }
  50% {
    -webkit-transform: translate(0, 1rem);
            transform: translate(0, 1rem);
  }
  85% {
    -webkit-transform: translate(0, -1rem);
            transform: translate(0, -1rem);
  }
}

.about-me-container {
  width: 60vw;
  padding: 4rem 2rem;
  margin: 0 auto;
}

.about-me-container .my-skills-container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  height: auto;
  width: 100%;
  margin: 2rem 0 0 0;
  height: 30vh;
}

.about-me-container .my-skills-container h4 {
  margin-top: 2rem;
}

.about-me-container .my-skills-container .my-skills {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
  -ms-flex-pack: distribute;
      justify-content: space-around;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  height: 20vh;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  width: 100%;
  height: 100%;
}

.about-me-container .my-skills-container .my-skills li {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  height: 6rem;
  min-width: 3rem;
  height: 80%;
}

.about-me-container .my-skills-container .my-skills li:hover i {
  -webkit-transform: rotate(360deg) scale(1.25);
          transform: rotate(360deg) scale(1.25);
}

.about-me-container .my-skills-container .my-skills li i {
  font-size: 4.5rem;
  color: #e43f5a;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.about-me-container .my-skills-container .my-skills li h4 {
  margin-top: 0;
}

.my-projects #grid-box {
  min-height: 10rem;
  display: -ms-grid;
  display: grid;
  grid-template: "... .... ... .... ... .... ..." "... pro1 ... pro2 ... pro3 ..." 2fr "... .... ... .... ... .... ..."/2rem minmax(4rem, 1fr) auto minmax(4rem, 1fr) auto minmax(4rem, 1fr) 2rem;
}

.my-projects #grid-box .pro1-container {
  grid-area: pro1;
  text-align: center;
  padding: 0 1rem;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  position: relative;
}

.my-projects #grid-box .pro1-container:hover {
  -webkit-transform: scale(1.01);
          transform: scale(1.01);
}

.my-projects #grid-box .pro1-container:hover img {
  opacity: 0.55;
}

.my-projects #grid-box .pro1-container img {
  width: 90%;
  height: auto;
  border-radius: 20px;
}

.my-projects #grid-box .pro1-container:hover .show-more {
  opacity: 1;
}

.my-projects #grid-box .pro1-container .show-more {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  opacity: 0;
  color: #382e2e;
  font-family: "Kosugi Maru", sans-serif;
  font-weight: bolder;
}

.my-projects #grid-box .pro2-container {
  grid-area: pro2;
  text-align: center;
  padding: 0 1rem;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}

.my-projects #grid-box .pro2-container:hover {
  -webkit-transform: scale(1.01);
          transform: scale(1.01);
}

.my-projects #grid-box .pro2-container:hover img {
  opacity: 0.55;
}

.my-projects #grid-box .pro2-container img {
  width: 90%;
  height: auto;
  border-radius: 20px;
}

.my-projects #grid-box .pro2-container:hover .show-more {
  opacity: 1;
}

.my-projects #grid-box .pro2-container .show-more {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  opacity: 0;
  color: #382e2e;
  font-family: "Kosugi Maru", sans-serif;
  font-weight: bolder;
}

.my-projects #grid-box .pro3-container {
  grid-area: pro3;
  text-align: center;
  padding: 0 1rem;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}

.my-projects #grid-box .pro3-container:hover {
  -webkit-transform: scale(1.01);
          transform: scale(1.01);
}

.my-projects #grid-box .pro3-container:hover img {
  opacity: 0.55;
}

.my-projects #grid-box .pro3-container img {
  width: 90%;
  height: auto;
  border-radius: 20px;
}

.my-projects #grid-box .pro3-container:hover .show-more {
  opacity: 1;
}

.my-projects #grid-box .pro3-container .show-more {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  opacity: 0;
  color: #382e2e;
  font-family: "Kosugi Maru", sans-serif;
  font-weight: bolder;
}

.correspondence-contents {
  width: 94vw;
  margin: 0 auto;
}

.correspondence-contents img {
  display: inline-block;
  width: 45vw;
  border-radius: 10px;
}

.correspondence-contents img:hover {
  opacity: 0.3;
}

.correspondence-contents .element {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  height: auto;
}

.correspondence-contents .element .element-inside-container {
  position: relative;
}

.correspondence-contents .element .element-inside-container h2 {
  font-size: 2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  left: 50%;
  color: #e43f5a;
  white-space: pre;
}

.correspondence-contents .element .ccText {
  padding: 3rem 5rem 0 5rem;
}

.correspondence-contents .element .ccText a {
  margin-top: 1em;
  display: block;
  text-align: center;
  color: #673ab7;
  cursor: pointer;
  pointer-events: all;
}

.correspondence-contents .element .ccText a:hover {
  text-decoration: underline;
}

.correspondence-contents .second-element {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: reverse;
      -ms-flex-direction: row-reverse;
          flex-direction: row-reverse;
}

.payment {
  width: 80%;
  margin: 0 auto;
}

.payment .margin-box {
  margin-bottom: 2rem;
}

.payment table {
  width: 90%;
  height: auto;
  margin: 0 auto;
  border-spacing: 0px;
  border: 2px #673ab7 solid;
}

.payment h3 {
  color: #e43f5a;
}

/*----------------------------------
---------- Media Queries ------------
-----------------------------------*/
@media screen and (max-width: 768px) {
  .about-me-container {
    width: 70vw;
    padding: 4rem 0;
  }
  .about-me-container .my-skills-container .my-skills {
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
  }
  .about-me-container .my-skills-container .my-skills li i {
    font-size: 2.5rem;
  }
  .my-projects #grid-box {
    grid-template: "... .... ... .... ..." "... pro1 ... pro2 ..." 2fr "... .... ... .... ..." 1rem "... pro3 ... .... ..." 2fr "... .... ... .... ..."/2rem minmax(4rem, 1fr) auto minmax(4rem, 1fr) 2rem;
  }
  .correspondence-contents img {
    width: 85vw;
  }
  .correspondence-contents .element {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
  }
}

@media screen and (max-width: 568px) {
  .about-me-container .my-skills-container .my-skills li {
    height: 6em;
  }
  .about-me-container .my-skills-container .my-skills li h4 {
    margin-top: 0;
  }
  .my-projects #grid-box {
    grid-template: "... .... ..."
 "... pro1 ..." 2fr
 "... .... ..." 1rem
 "... pro2 ..." 2fr
 "... .... ..." 1rem
 "... pro3 ..." 2fr
 "... .... ..."
 / 1rem 1fr 1rem;
  }
  .payment {
    width: 95%;
  }
}

svg.second-svg {
  fill: #eee;
  background: transparent;
  position: absolute;
  z-index: 1;
  pointer-events: none;
}

svg.second-svg path {
  height: 100%;
}

.contact {
  width: 80%;
  margin: 0 auto;
  position: relative;
  background: linear-gradient(153deg, #162447, #673ab7);
  width: 100%;
  padding-top: 145px;
}

.contact h2 {
  color: #eee;
}

.contact .contact-means {
  width: 50vw;
  min-height: 30rem;
  height: auto;
  margin: 0 auto;
  padding-bottom: 2rem;
  display: -ms-grid;
  display: grid;
  grid-template: "... ..... ... ....... ..." "... means ... n-label ..." 0.75rem "... means ...  name   ..." 1.5rem "... means ... ....... ..." 1.5rem "... means ... e-label ..." 0.75rem "... means ...  email  ..." 1.5rem "... means ... ....... ..." 1.5rem "... means ... m-label ..." 0.75rem "... means ... message ..." 4rem "... means ... message ..." 4rem "... means ... message ..." 4rem "... means ... message ..." 4rem "... ..... ... ....... ..." 1.5rem "... ..... ...   btn   ..." 1.7rem "... ..... ... ....... ..."/1fr minmax(3rem, 7rem) 1rem 3fr 1fr;
}

.contact .contact-means ul {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -ms-flex-pack: distribute;
      justify-content: space-around;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  height: auto;
  grid-area: means;
  border-radius: 10px;
  background: #fff;
}

.contact .contact-means ul li i {
  font-size: 3rem;
}

.contact .contact-means ul li #github {
  color: #18181a;
}

.contact .contact-means ul li #facebook {
  color: #2727b1;
}

.contact .contact-means ul li #twitter {
  color: #177cdb;
}

.contact .contact-means label {
  font-size: 0.75rem;
}

.contact .contact-means .name-label {
  grid-area: n-label;
}

.contact .contact-means input.name {
  grid-area: name;
}

.contact .contact-means .email-label {
  grid-area: e-label;
}

.contact .contact-means input.email {
  grid-area: email;
}

.contact .contact-means .message-label {
  grid-area: m-label;
}

.contact .contact-means textarea.message {
  grid-area: message;
  padding-top: 0.3em;
  padding-bottom: 0.3em;
}

.contact .contact-means button {
  grid-area: btn;
}

.top-btn {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  width: 5vh;
  height: 5vh;
  border-radius: 50%;
  background: #e43f5a;
}

@media screen and (max-width: 768px) {
  .contact .contact-means {
    width: 50vw;
    grid-template: "... ..... ..... ..... ..."
 "... means means means ..." 4rem
 "... .....  ....   ... ..." 1rem
 "... ..... n-label ... ..." 0.75rem
 "... .....  ....   ... ..." 0.2rem
 "... .....  name   ... ..." 1.5rem
 "... .....  ....   ... ..." 1rem
 "... ..... e-label ... ..." 0.75rem
 "... .....  ....   ... ..." 0.2rem
 "... ..... email   ... ..." 1.5rem
 "... ..... .....   ... ..." 1rem
 "... ..... m-label ... ..." 0.75rem
 "... ..... .....   ... ..." 0.2rem
 "... ..... message ... ..." 15rem
 "... ..... ....... ... ..." 1rem
 "... .....  btn    ... ..." 1.7rem
 "... ..... ... ....... ..."
 / auto 1.5rem 1fr 1.5rem auto;
  }
  .contact .contact-means ul {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
  }
  .contact .contact-means ul li i {
    font-size: 2.25rem;
  }
}

@media screen and (max-width: 568px) {
  .contact .contact-means {
    width: 75vw;
    grid-template: "... ..... ..... ..... ..."
 "... means means means ..." 2.75rem
 "... .....  ....   ... ..." 1rem
 "... ..... n-label ... ..." 0.75rem
 "... .....  ....   ... ..." 0.2rem
 "... .....  name   ... ..." 1.5rem
 "... .....  ....   ... ..." 1rem
 "... ..... e-label ... ..." 0.75rem
 "... .....  ....   ... ..." 0.2rem
 "... ..... email   ... ..." 1.5rem
 "... ..... .....   ... ..." 1rem
 "... ..... m-label ... ..." 0.75rem
 "... ..... .....   ... ..." 0.2rem
 "... ..... message ... ..." 10rem
 "... ..... ....... ... ..." 1rem
 "... .....  btn    ... ..." 1.5rem
 "... ..... ... ....... ..."
 / auto 1.5rem 1fr 1.5rem auto;
  }
  .contact ul i {
    font-size: 1.75rem !important;
  }
}

* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}

html {
  scroll-behavior: smooth;
}

body {
  min-height: 100vh;
  max-width: 100vw;
  font-family: "Poppins", sans-serif;
  background: #eee;
}

h2 {
  font-size: 2rem;
  font-weight: 800;
}

p {
  color: #382e2e;
  font-family: "Kosugi Maru", sans-serif;
  text-align: center;
  font-size: 1.2rem;
}

h2,
h3,
h4 {
  text-align: center;
  color: #162447;
}

small {
  color: #162447;
  font-family: "Poppins", sans-serif;
  font-weight: 800;
}

hr {
  border-color: #673ab7;
  border-width: 1px 0 0 0;
  height: 1px;
  width: 40vw;
  margin: 3rem 30vw;
}

table,
th,
td {
  border: 1px solid #382e2e;
  border-collapse: collapse;
  text-align: center;
}

table {
  table-layout: fixed;
}

th,
td {
  padding: 1rem;
}

label {
  color: #fff;
  font-family: "Kosugi Maru", sans-serif;
}

input,
textarea {
  display: inline-block;
  border-radius: 7px;
  border: none;
  outline: none;
  padding: 0.2rem 0.3rem;
  color: #382e2e;
  font-family: "Kosugi Maru", sans-serif;
  resize: none;
}

input:valid,
textarea:valid {
  border: 2px solid #2eca19;
}

form {
  display: contents;
}

.big-text {
  text-align: center;
  color: #162447;
  margin: 2rem 0 1rem 0;
}

button {
  border-radius: 7px;
  color: #fff;
  background: #e43f5a;
  outline: none;
  border: none;
  font-family: "Kosugi Maru", sans-serif;
  cursor: pointer;
  pointer-events: all;
}

button:hover {
  background: #d43953;
}

.margin-box {
  margin: 1rem;
}

.japanese-big-text {
  font-size: 1.5rem;
}

.japanese-text {
  font-family: "Kosugi Maru", sans-serif;
}

.pointer-none {
  pointer-events: none;
}

@media screen and (max-width: 768px) {
  p {
    font-size: 1.1rem;
  }
}

@media screen and (max-width: 568px) {
  p {
    font-size: 1rem;
  }
}
/*# sourceMappingURL=style.css.map */
