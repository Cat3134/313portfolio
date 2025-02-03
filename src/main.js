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

const cubes = [
  "./interopPDFS/interop1.pdf",
  "./interopPDFS/interop2.pdf",
  "./interopPDFS/interop3.pdf",
  "./interopPDFS/interop4.pdf",
  "./interopPDFS/interop5.pdf",
  "./interopPDFS/interop6.pdf",
  "./interopPDFS/interop7.pdf",
  "./interopPDFS/interop8.pdf",
];

const trees = [
  "./treeDrawings/tree1.jpg",
  "./treeDrawings/tree2.jpg",
  "./treeDrawings/tree3.jpg",
  "./treeDrawings/tree4.jpg",
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
        <a href="https://313portfolio-bay.vercel.app/cadavrePDFS/cad.png" target="_blank">
          <img src="./cadavrePDFS/cad.png" id="model1" alt="Model 1 Image">
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
                (trees, index) =>
                  `<img src="${interops}" alt="inter${inter + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">A 3D tree model is a geometric representation of a tree, featuring a trunk, branches, and foliage. The trunk is typically cylindrical, with textured bark, while the branches extend outward to support leaves or a canopy. It may include roots or flowers for added detail.</h4>
        </div>
      </div>

      ${/* Model 3 commented out
      <div id="project-row">
      Model 3
        <div class="three-model">
          <div id="model3"></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${cubes
              .map(
                (cube, index) => `<img src="${cube}" alt="cube${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">A 3D house model is a geometric representation of a house, featuring walls, a roof, and windows. It often includes additional details such as doors, chimneys, and balconies, with textures like brick, wood, or stucco to enhance realism. The interior may also feature rooms, furniture, and lighting for a more detailed design.</h4>
        </div>
      </div>
      */""}
    </section>

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
createThreeScene("#model1", "/3DModels/project1/cube.obj");
createThreeScene("#model2", "/3DModels/project2/tree.obj");
createThreeScene("#model3", "/3DModels/project3/cottage.obj");