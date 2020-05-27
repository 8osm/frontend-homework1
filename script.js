const fetchImages = async (count) => {
  let images = [];
  for (let index = 0; index < count; index++) {
    let currentImage = await (
      await fetch("https://aws.random.cat/meow")
    ).json();
    images.push(currentImage.file);
  }
  return images;
};

const addImagesToPage = async () => {
  let imageContainer = document.getElementById("image-container");
  imageContainer.innerHTML = "";
  let images = await (await fetchImages(24)).map((value) => {
    let wrapper = document.createElement("div");
    wrapper.className = "image-wrapper";
    wrapper.style.backgroundImage = `url(${value})`;
    // let image = document.createElement("img");
    // image.src = value;
    // wrapper.appendChild(image);
    return wrapper;
  });

  images.forEach((value) => {
    imageContainer.appendChild(value);
  });
};

let button = document.getElementById("more");
button.addEventListener("click", addImagesToPage);

addImagesToPage();
