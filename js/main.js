// HTML SECTIONS TO ADD
const temp = [
  "nav",
  "aboutus",
  "services",
  "design",
  "wedo",
  "ourteam",
  "someofwork",
  "peoplesay",
  "latestblog",
  "footer",
];

// ----- RESPONSIVE DEBUG -------
// DELETE AFTER -----------------
const sections = [];
const debugginSection = 9;
const start = debugginSection;
const stop = start + 1;

for (let i = start; i < stop; i++) {
  sections.push(temp[i]);
}
// DELETE AFTER -----------------

// JS FILES TO INCLUDE
const files = ["navDropDown", "whatwedo", "slider1", "slider2", "socialPicker"];

function include(files) {
  files.forEach((file) => {
    const script = document.createElement("script");
    //script.src = `https://github.com/bartasd/MoGo/js/_${file}.js`;
    script.src = `./js/_${file}.js`;
    script.type = "text/javascript";
    script.defer = true;
    document.getElementsByTagName("head").item(0).appendChild(script);
  });
}

async function getHTMLcontent(contents) {
  try {
    const htmlPromises = contents.map((content) => {
      //const file = `https://github.com/bartasd/MoGo/html/_${content}.html`;
      const file = `http://127.0.0.1:8080/html/_${content}.html`;
      return fetch(file)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.text();
        })
        .catch((error) => {
          console.error("There was a problem with the fetch operation:", error);
        });
    });

    const htmlContents = await Promise.all(htmlPromises);

    htmlContents.forEach((html) => {
      document.body.innerHTML += html;
    });

    include(files);
  } catch (error) {
    console.error("Error fetching HTML content:", error);
  }
}

getHTMLcontent(sections);
