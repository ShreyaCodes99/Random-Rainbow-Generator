let rainbow;

function setup() {
  createCanvas(512, 512);
  createButton('Generate Rainbow').mousePressed(generateRainbow);
}

function generateRainbow() {
  // httpPost(path, [datatype], [data], [callback], [errorCallback])
  const z = [];
  for (let i = 0; i < 512; i++) {
    z[i] = random(-1, 1);
  }
  const path = 'http://localhost:8000/query';
  const data = {
    z: z,
    truncation: 0.8
  };
  httpPost(path, 'json', data, gotImage, gotError);
}

function gotError(error) {
  console.error(error);
}

function gotImage(result) {
  rainbow = createImg(result.image);
  rainbow.hide();
}

function draw() {
  background(220);
  if (rainbow) {
    image(rainbow, 0, 0);
  }
}