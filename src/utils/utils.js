export const importAllImages = (i) => {
    let images = {};
    i.keys().forEach((item, index) => {
      images[item.replace("./", "")] = i(item);
    });
    return images;
}