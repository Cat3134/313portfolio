import "./style.css";
import data from "./data/data";
import { createThreeScene } from "./threeScene";

const cads = [
  "./cadavrePDFS/cad01.png",
  "./cadavrePDFS/cad02.png",
  "./cadavrePDFS/cad03.png",
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
          </a>
          </div>
        <div id="images-description">
          <div id="images">
          <a href="https://313portfolio-bay.vercel.app/cadavrePDFS/cad01.png" target="_blank">
            <img src="./cadavrePDFS/cad01.png" alt="cad01" />
          </a>
          <a href="https://313portfolio-bay.vercel.app/cadavrePDFS/cad02.png" target="_blank">
            <img src="./cadavrePDFS/cad02.png" alt="cad02" />
          </a>
          <a href="https://313portfolio-bay.vercel.app/cadavrePDFS/cad03.png" target="_blank">
            <img src="./cadavrePDFS/cad03.png" alt="cad03" />
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
          <a href="https://313portfolio-bay.vercel.app/interPDFS/interop1.png" target="_blank">
            <img src="./interPDFS/interop1.png" alt="interop1" />
          </a>
          <a href="https://313portfolio-bay.vercel.app/interPDFS/interop2.png" target="_blank">
            <img src="./interPDFS/interop2.png" alt="interop2" />
          </a>
          <a href="https://313portfolio-bay.vercel.app/interPDFS/interop3.png" target="_blank">
            <img src="./interPDFS/interop3.png" alt="interop3" />
          </a>
          <a href="https://313portfolio-bay.vercel.app/interPDFS/interop4.png" target="_blank">
            <img src="./interPDFS/interop4.png" alt="interop4" />
          </a>
          </div>
          <a href="https://313portfolio-bay.vercel.app/interPDFS/interop5.png" target="_blank">
            <img src="./interPDFS/interop5.png" alt="interop5" />
          </a>
          <a href="https://313portfolio-bay.vercel.app/interPDFS/interop6.png" target="_blank">
            <img src="./interPDFS/interop6.png" alt="interop6" />
          </a>
          <a href="https://313portfolio-bay.vercel.app/interPDFS/interop7.png" target="_blank">
            <img src="./interPDFS/interop7.png" alt="interop7" />
          </a>
          <a href="https://313portfolio-bay.vercel.app/interPDFS/interop8.png" target="_blank">
            <img src="./interPDFS/interop8.png" alt="interop8" />
          </a>
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
          <a href="https://313portfolio-bay.vercel.app/eyePDFS/Eye1.png" target="_blank">
            <img src="./eyePDFS/Eye1.png" alt="Eye1" />
          </a>
          <a href="https://313portfolio-bay.vercel.app/eyePDFS/Eye2.png" target="_blank">
            <img src="./eyePDFS/Eye2.png" alt="Eye2" />
          </a>
          <a href="https://313portfolio-bay.vercel.app/eyePDFS/Eye3.png" target="_blank">
            <img src="./eyePDFS/Eye3.png" alt="Eye3" />
          </a>
          <a href="https://313portfolio-bay.vercel.app/eyePDFS/Eye4.png" target="_blank">
            <img src="./eyePDFS/Eye4.png" alt="Eye4" />
          </a>
          </div>
          <a href="https://313portfolio-bay.vercel.app/eyePDFS/Eye5.png" target="_blank">
            <img src="./eyePDFS/Eye5.png" alt="Eye5" />
          </a>
          <a href="https://313portfolio-bay.vercel.app/eyePDFS/Eye6.png" target="_blank">
            <img src="./eyePDFS/Eye6.png" alt="Eye6" />
          </a>
          <a href="https://313portfolio-bay.vercel.app/eyePDFS/Eye7.png" target="_blank">
            <img src="./eyePDFS/Eye7.png" alt="Eye7" />
          </a>
          </div>
          <h4 id="description">Project 01's Cadavre aimed to tackle the question of “What does it mean to be human?”  Using this, the created object aimed to include aspects of human history, while incorporating an “all-seeing and all-knowing” eye. The Eye of Civilization is an ancient artifact containing all knowledge, even knowledge that has been lost to time.</h4>
        </div>
      </div>

      <div id="project-row">
      Placemaking: Project 04
        <div class="three-model">
          <a href="https://313portfolio-bay.vercel.app/placePNGS/placegood.png" target="_blank">
            <img src="./placePNGS/placegood.png" id="model1" alt="Model 1 Image">
          </a>
          </div>
        <div id="images-description">
          <div id="images">
          <a href="https://313portfolio-bay.vercel.app/placePNGS/place1.png" target="_blank">
            <img src="./placePNGS/place1.png" alt="place1" />
          </a>
          <a href="https://313portfolio-bay.vercel.app/placePNGS/place2.png" target="_blank">
            <img src="./placePNGS/place2.png" alt="place2" />
          </a>
          <a href="https://313portfolio-bay.vercel.app/placePNGS/place3.png" target="_blank">
            <img src="./placePNGS/place3.png" alt="place3" />
          </a>
          <a href="https://313portfolio-bay.vercel.app/placePNGS/place4.png" target="_blank">
            <img src="./placePNGS/place4.png" alt="place4" />
          </a>
          <a href="https://313portfolio-bay.vercel.app/placePNGS/place5.png" target="_blank">
            <img src="./placePNGS/place5.png" alt="place5" />
          </a>
          </div>
          <a href="https://313portfolio-bay.vercel.app/placePNGS/place6.png" target="_blank">
            <img src="./placePNGS/place6.png" alt="place6" />
          </a>
          <a href="https://313portfolio-bay.vercel.app/placePNGS/place7.png" target="_blank">
            <img src="./placePNGS/place7.png" alt="place7" />
          </a>
          <a href="https://313portfolio-bay.vercel.app/placePNGS/place8.png" target="_blank">
            <img src="./placePNGS/place8.png" alt="place8" />
          </a>
          <a href="https://313portfolio-bay.vercel.app/placePNGS/place9.png" target="_blank">
            <img src="./placePNGS/place9.png" alt="place9" />
          </a>
          <a href="https://313portfolio-bay.vercel.app/placePNGS/place10.png" target="_blank">
            <img src="./placePNGS/place10.png" alt="place10" />
          </a>
          </div>
          <h4 id="description">Derived from Julia’s Project 01 Cadavre, the form takes influence from the art deco period where it emphasizes the underlying light within the brutality within the world. Pulling elements from the exquisite corpse such as the stained glass and geometrical symmetry, allowed us to interconnect the art deco style with current design trends to create our inspired temple.</h4>
        </div>
      </div>

      <div id="project-row">
      Metaverse Creation: Project 05
        <div class="three-model">
          <a href="https://313portfolio-bay.vercel.app/gamePNGS/gamegood.png" target="_blank">
            <img src="./gamePNGS/gamegood.png" id="model1" alt="Model 1 Image">
          </a>
          </div>
        <div id="images-description">
          <div id="images">
          <a href="https://313portfolio-bay.vercel.app/gamePNGS/game1.png" target="_blank">
            <img src="./gamePNGS/game1.png" alt="game1" />
          </a>
          <a href="https://313portfolio-bay.vercel.app/gamePNGS/game2.png" target="_blank">
            <img src="./gamePNGS/game2.png" alt="game2" />
          </a>
          <a href="https://313portfolio-bay.vercel.app/gamePNGS/game3.png" target="_blank">
            <img src="./gamePNGS/game3.png" alt="game3" />
          </a>
          <a href="https://313portfolio-bay.vercel.app/gamePNGS/game4.png" target="_blank">
            <img src="./gamePNGS/game4.png" alt="game4" />
          </a>
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