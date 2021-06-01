export class House {
  constructor({ price, bedrooms, bathrooms, imgUrl }) {
    this.price = price
    this.bedrooms = bedrooms
    this.bathrooms = bathrooms
    this.imgUrl = imgUrl
  }
  get Template() {
    return /*html*/ `
    <div class="col-4-lg ">
    <div class="card">
      <img src="${this.imgUrl}" height="250"/>
    <div class="card-body">
      <p>
        <b>${this.price}</b>
      </p>
      <p>
        <b>${this.bedrooms} Bed, ${this.bathrooms} Bath</b>
      </p>
    </div>
    </div>
    </div>
    `
  }
}





