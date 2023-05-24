import paintings from './data.json';

export function getPainting(name) {
  return paintings.find(painting => painting.name === name);
}

export function getAllPaintings() {
  return paintings;
}
