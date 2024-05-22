import { IMAGES } from "../configs/images";

const imagesLoading = {}

async function waitForImage(imageName) {
  const delay = 500;

  while (true) {
    if (imagesLoading[imageName]?.b64URL) {
      return imagesLoading[imageName].b64URL;
    }

    await new Promise((resolve) => setTimeout(resolve, delay));
  }
}

export async function loadImage(imageName) {
  if (imagesLoading[imageName]?.isLoading) {
    const b64Image = await waitForImage(imageName);
    return b64Image;
  }

  if (imagesLoading[imageName]?.b64URL) {
    return imagesLoading[imageName].b64URL;
  }

  imagesLoading[imageName] = {
    isLoading: true,
    b64URL: null
  }

  const image = IMAGES[imageName];

  try {

    const res = await fetch(image.url);

    if (!res.ok) {
      return;
    }

    const blob = await res.blob();
    const loadedSrc = URL.createObjectURL(blob);

    imagesLoading[imageName] = {
      isLoading: false,
      b64URL: loadedSrc
    }

    return loadedSrc;
  } catch (e) {
    console.error("Error loading image:", image.name, "\n", e);
    imagesLoading[imageName] = {
      isLoading: false,
      b64URL: loadedSrc
    }
    return image.loadingSrc;
  }
}
