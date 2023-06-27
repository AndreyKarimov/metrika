import * as data from "../js/data.js";

class Order {
  constructor() {
    this.spaceArea = 44;
    this.planingSolutions = 1;
    this.draftOptions = 1;
    this.visualizationOptions = 1;
    data.buldingType.forEach((type) => {
      if (type.default === true) {
        this.buldingType = type.type;
      }
    });
    data.buldingType.forEach((elem) => {
      if (this.buldingType === elem.type) {
        this.price = elem.price;
      }
    });
  }
  // set buldingType(type) {
  //   this._buldingType = type;
  //   data.buldingType.forEach((elem) => {
  //     if (elem.type === type) {
  //       this.price = elem.price;
  //     }
  //   });
  // }
}

export default Order;

// class Movie {
//   constructor(title, year, category, country) {
//     this.title = title;
//     this.year = year;
//     this.category = category;
//     this.country = country;
//     this.watched = false;
//   }

//   watchTogle() {
//     this.watched = this.watched === true ? false : true;
//   }
// }

// export default Movie;
