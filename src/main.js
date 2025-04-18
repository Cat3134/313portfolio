import "./style.css";
import data from "./data/data";
import { createThreeScene } from "./threeScene";

const cads = [
  "./cadavrePDFS/cad1.png",
  "./cadavrePDFS/cad2.png",
  "./cadavrePDFS/cad3.png",
  "./cadavrePDFS/cad4.png",
  "./cadavrePDFS/cad5.png",
  "./cadavrePDFS/cad6.png",
];

const interops = [
  "./interPDFS/interop1.png",
  "./interPDFS/interop2.png",
  "./interPDFS/interop3.png",
  "./interPDFS/interop4.png",
  "./interPDFS/interop5.png",
  "./interPDFS/interop6.png",
  "./interPDFS/interop7.png",
  "./interPDFS/interop8.png",
];

const eyes = [
  "./eyePDFS/Eye1.png",
  "./eyePDFS/Eye2.png",
  "./eyePDFS/Eye3.png",
  "./eyePDFS/Eye4.png",
  "./eyePDFS/Eye5.png",
  "./eyePDFS/Eye6.png",
  "./eyePDFS/Eye7.png",
];

const places = [
  "./placePNGS/place1.png",
  "./placePNGS/place2.png",
  "./placePNGS/place3.png",
  "./placePNGS/place4.png",
  "./placePNGS/place5.png",
];

const places2 = [
  "./placePNGS/place6.png",
  "./placePNGS/place7.png",
  "./placePNGS/place8.png",
  "./placePNGS/place9.png",
  "./placePNGS/place10.png",
];


const games = [
  "./gamePNGS/game1.png",
  "./gamePNGS/game2.png",
  "./gamePNGS/game3.png",
  "./gamePNGS/game4.png",
];

document.querySelector("#app").innerHTML = `
  <main id="container">
    <section id="heading">
      <h1>${data.name}</h1>
      <p>${data.bio}</p>
    </section>

    <section id="projects">
      <div id="project-row">
      Cadavre Exquis: Project 1
        <div class="three-model">
        <a href="https://313portfolio-bay.vercel.app/cadavrePDFS/cadgood.png" target="_blank">
          <img src="./cadavrePDFS/cadgood.png" id="model1" alt="Model 1 Image">
        </div>
        <div id="images-description">
          <div id="images">
          <a href="https://313portfolio-bay.vercel.app/cadavrePDFS/cad1.png" target="_blank">
            <img src="./cadavrePDFS/cad1.png" alt="cad1" />
          </a>
          <a href="https://313portfolio-bay.vercel.app/cadavrePDFS/cad2.png" target="_blank">
            <img src="./cadavrePDFS/cad2.png" alt="cad2" />
          </a>
          <a href="https://313portfolio-bay.vercel.app/cadavrePDFS/cad3.png" target="_blank">
            <img src="./cadavrePDFS/cad3.png" alt="cad3" />
          </a>
          <a href="https://313portfolio-bay.vercel.app/cadavrePDFS/cad4.png" target="_blank">
            <img src="./cadavrePDFS/cad4.png" alt="cad4" />
          </a>
          <a href="https://313portfolio-bay.vercel.app/cadavrePDFS/cad5.png" target="_blank">
            <img src="./cadavrePDFS/cad5.png" alt="cad5" />
          </a>
          <a href="https://313portfolio-bay.vercel.app/cadavrePDFS/cad6.png" target="_blank">
            <img src="./cadavrePDFS/cad6.png" alt="cad6" />
          </a>
          </div>

          <h4 id="description">This Cadavre tackles the question of what it means to be a human. The collage highlights some of humanity's most significant creations, events, and scenes, aiming to represent what makes up a human. While each individual is a miracle of life themselves, the meaning of a human is to be everything we have ever seen, done, created, whether good or bad.</h4>
        </div>
      </div>

      <div id="project-row">
      Interoperability: Project 02
        <div class="three-model">
          <div id="model2"></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${interops
              .map(
                (interops, index) =>
                  `<img src="${interops}" alt="interop${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">Project 02, Interoperability, explores the interoperability between different 3D modeling softwares. The objective of this assignment is to analyze different geometry forms, and how they are affected when moved between softwares.</h4>
        </div>
      </div>

      
      <div id="project-row">
      Object Creation: Project 03
        <div class="three-model">
          <div id="model3"></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${eyes
              .map(
                (eyes, index) =>
                 `<img src="${eyes}" alt="eye${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">Project 01's Cadavre aimed to tackle the question of “What does it mean to be human?”  Using this, the created object aimed to include aspects of human history, while incorporating an “all-seeing and all-knowing” eye. The Eye of Civilization is an ancient artifact containing all knowledge, even knowledge that has been lost to time.
</h4>
        </div>
      </div>

      <div id="project-row">
      Placemaking: Project 04
        <div class="three-model">
          <img src="./placePNGS/placegood.png" id="model1" alt="Model 1 Image">
        </div>
        <div id="images-description">
          <div id="images">
            ${places
              .map(
                (places, index) =>
                 `<img src="${places}" alt="place${index + 1}" />`
              )
              .join("")}
          </div>
        </div>
      </div>

      <div id="project-row">
        <div class="three-model">
        </div>
        <div id="images-description">
          <div id="images">
            ${places2
              .map(
                (places2, index) =>
                 `<img src="${places2}" alt="place2${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">Derived from Julia’s Project 01 Cadavre, the form takes influence from the art deco period where it emphasizes the underlying light within the brutality within the world. Pulling elements from the exquisite corpse such as the stained glass and geometrical symmetry, allowed us to interconnect the art deco style with current design trends to create our inspired temple.</h4>
        </div>
      </div>

      <div id="project-row">
      Metaverse Creation: Project 05
        <div class="three-model">
          <img src="./gamePNGS/gamegood.png" id="model1" alt="Model 1 Image">
        </div>
        <div id="images-description">
          <div id="images">
            ${games
              .map(
                (games, index) =>
                 `<img src="${games}" alt="game${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">Inspired by the Cadavre from Project 01, "Civigaze" is a metaverse showcasing the semester's projects. The metaverse is made up of 5 islands floating in space, connected by bridges made of eyes. Each island contains one exhibit, showing projects 01 through 05, along with our final studio outcome.</h4>
        </div>
      </div>

    <ul id="footer-items">
      <li>Email: ${data.contact.email}</li>
      <li>Phone: ${data.contact.phone}</li>
      <li>LinkedIn: <a href="${data.contact.linkedin}">${
  data.contact.linkedin
}</a></li>
      <li>GitHub: <a href="${data.contact.github}">${
  data.contact.github
}</a></li>
    </ul>
  </main>
`;

// Create three.js scenes for each
createThreeScene("#model1", "/3DModels/project1/place.obj");
createThreeScene("#model2", "/3DModels/project2/objects.obj");
createThreeScene("#model3", "/3DModels/project3/eye good.obj");