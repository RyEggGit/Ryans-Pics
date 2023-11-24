import { storage } from "../firebase/config";
import { getDownloadURL } from "firebase/compat/storage";

export class artwork {
  constructor(src, name, artist, price) {
    this.src = src;
    this.name = name;
    this.artist = artist;
    this.price = price;
  }
  getSrc() {
    return this.src;
  }

  getName() {
    return this.name;
  }
  getArtist() {
    return this.artist;
  }
  getPriceInt() {
    return this.price;
  }
  getPriceString() {
    return "$" + this.price;
  }
}

export const setImg = (src, name) => {
  if (src != "") {
    console.log(src, name);
    storage
      .ref()
      .child(src)
      .getDownloadURL()
      .then((url) => {
        document.getElementById(name).src = url;
      });
  }
};
