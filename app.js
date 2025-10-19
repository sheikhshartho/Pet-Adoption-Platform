const menuBar = document.querySelector(".bar__icon");
const menuClose = document.querySelector(".menu__close__btn");
const nevMenu = document.querySelector(".nav__menu_tow");

menuBar.addEventListener("click", () => {
  // nevMenu.style.display = 'block'
  nevMenu.classList.add("show");
});
menuClose.addEventListener("click", () => {
  // nevMenu.style.display = 'none'
  nevMenu.classList.remove("show");
});

const loadCatagories = async () => {
  try {
    const res = await fetch(
      "https://openapi.programming-hero.com/api/peddy/categories"
    );
    const data = await res.json();
    displayCatagoris(data.categories);
  } catch (error) {
    console.log(error);
  }
};

const displayCatagoris = async (catagory) => {
  const catagoryContainer = document.querySelector(".category__btn__container");
  // console.log(catagoryContainer)
  catagory.forEach((item) => {
    // console.log(item);

    const buttonContainer = document.createElement("div");
    // console.log(buttonContainer)
    buttonContainer.innerHTML = `
      <div class="cantagory__button">
      <img src="${item.category_icon}" alt="">
      <p>${item.category}</p>
    </div>
    `;
    catagoryContainer.append(buttonContainer);
  });
};

const bannerButton = document.querySelector(".banner__button");
const bannerSection = document.querySelector(".adopt__secton");
bannerButton.addEventListener("click", () => {
  bannerSection.scrollIntoView({ behavior: "smooth" });
});

const catagoryCard = async (cardId) => {
  try {
    const res = await fetch(
      "https://openapi.programming-hero.com/api/peddy/pets"
    );
    const data = await res.json();
    displayCard(data.pets);
  } catch (error) {
    console.error(error);
  }
};

const displayCard = async (cards) => {
  cards.forEach((card) => {
    console.log(card);
    const cardBox = document.querySelector(".left__side__card__box");
    const theCard = document.createElement("div");
    theCard.innerHTML = `
    <div class="card__box">
        <div class="card__img__box">
            <img src="${card.image}" alt="" />
          </div>
          <div class="card__contant__main__box">
            <div class="card__contant__box">
              <h4>Mister Tartosh</h4>
              <div class="card__contant__details__box">
                <div class="card__contant__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M128 496L128 320C92.7 320 64 291.3 64 256C64 39.5 576 39.5 576 256C576 291.3 547.3 320 512 320L512 496C512 522.5 490.5 544 464 544L176 544C149.5 544 128 522.5 128 496z"/></svg>
                  
                </div>
                <div class="card__contant__text">
                  <p>breed: ${card.breed}</p>
                </div>
              </div>
              <div class="card__contant__details__box">
                <div class="card__contant__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M224 64C241.7 64 256 78.3 256 96L256 128L384 128L384 96C384 78.3 398.3 64 416 64C433.7 64 448 78.3 448 96L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 96C192 78.3 206.3 64 224 64zM160 304L160 336C160 344.8 167.2 352 176 352L208 352C216.8 352 224 344.8 224 336L224 304C224 295.2 216.8 288 208 288L176 288C167.2 288 160 295.2 160 304zM288 304L288 336C288 344.8 295.2 352 304 352L336 352C344.8 352 352 344.8 352 336L352 304C352 295.2 344.8 288 336 288L304 288C295.2 288 288 295.2 288 304zM432 288C423.2 288 416 295.2 416 304L416 336C416 344.8 423.2 352 432 352L464 352C472.8 352 480 344.8 480 336L480 304C480 295.2 472.8 288 464 288L432 288zM160 432L160 464C160 472.8 167.2 480 176 480L208 480C216.8 480 224 472.8 224 464L224 432C224 423.2 216.8 416 208 416L176 416C167.2 416 160 423.2 160 432zM304 416C295.2 416 288 423.2 288 432L288 464C288 472.8 295.2 480 304 480L336 480C344.8 480 352 472.8 352 464L352 432C352 423.2 344.8 416 336 416L304 416zM416 432L416 464C416 472.8 423.2 480 432 480L464 480C472.8 480 480 472.8 480 464L480 432C480 423.2 472.8 416 464 416L432 416C423.2 416 416 423.2 416 432z"/></svg>
                  
                </div>
                <div class="card__contant__text">
                  <p>Birth: ${card.date_of_birth}</p>
                </div>
              </div>
              <div class="card__contant__details__box">
                <div class="card__contant__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M480 0C462.3 0 448 14.3 448 32C448 49.7 462.3 64 480 64L530.7 64L474 120.7C447.7 105 416.9 96 384 96C348.6 96 315.6 106.5 288 124.5C260.4 106.5 227.4 96 192 96C94.8 96 16 174.8 16 272C16 358.3 78.1 430.1 160 445.1L160 480L128 480C110.3 480 96 494.3 96 512C96 529.7 110.3 544 128 544L160 544L160 576C160 593.7 174.3 608 192 608C209.7 608 224 593.7 224 576L224 544L256 544C273.7 544 288 529.7 288 512C288 494.3 273.7 480 256 480L224 480L224 445.1C247.3 440.8 268.9 432 288 419.5C315.6 437.5 348.6 448 384 448C481.2 448 560 369.2 560 272C560 230.9 545.9 193 522.2 163L576 109.3L576 160C576 177.7 590.3 192 608 192C625.7 192 640 177.7 640 160L640 32C640 14.3 625.7 0 608 0L480 0zM336 373.2C356.2 344.6 368 309.7 368 272C368 234.3 356.2 199.4 336 170.8C350.6 163.9 366.8 160 384 160C445.9 160 496 210.1 496 272C496 333.9 445.9 384 384 384C366.8 384 350.5 380.1 336 373.2zM288 214.3C298.2 231.2 304 250.9 304 272C304 293.1 298.2 312.9 288 329.7C277.8 312.8 272 293.1 272 272C272 250.9 277.8 231.1 288 214.3zM240 170.8C219.8 199.4 208 234.3 208 272C208 309.7 219.8 344.6 240 373.2C225.5 380.1 209.2 384 192 384C130.1 384 80 333.9 80 272C80 210.1 130.1 160 192 160C209.2 160 225.5 163.9 240 170.8z"/></svg>
                  
                </div>
                <div class="card__contant__text">
                  <p>Gender: ${card.gender}</p>
                </div>
              </div>
              <div class="card__contant__details__box">
                <div class="card__contant__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M296 88C296 74.7 306.7 64 320 64C333.3 64 344 74.7 344 88L344 128L400 128C417.7 128 432 142.3 432 160C432 177.7 417.7 192 400 192L285.1 192C260.2 192 240 212.2 240 237.1C240 259.6 256.5 278.6 278.7 281.8L370.3 294.9C424.1 302.6 464 348.6 464 402.9C464 463.2 415.1 512 354.9 512L344 512L344 552C344 565.3 333.3 576 320 576C306.7 576 296 565.3 296 552L296 512L224 512C206.3 512 192 497.7 192 480C192 462.3 206.3 448 224 448L354.9 448C379.8 448 400 427.8 400 402.9C400 380.4 383.5 361.4 361.3 358.2L269.7 345.1C215.9 337.5 176 291.4 176 237.1C176 176.9 224.9 128 285.1 128L296 128L296 88z"/></svg>
                  
                </div>
                <div class="card__contant__text">
                  <p>Price: ${card.price}</p>
                </div>
              </div>
            </div>
            <div class="card__button_box">
              <button class="like__button btn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M235.5 102.8C256.3 68 300.5 54 338 71.6L345.2 75.4C380 96.3 394 140.5 376.4 178L376.4 178L362.3 208L472 208L479.4 208.4C515.7 212.1 544 242.8 544 280C544 293.2 540.4 305.4 534.2 316C540.3 326.6 543.9 338.8 544 352C544 370.3 537.1 386.8 526 399.5C527.3 404.8 528 410.3 528 416C528 441.1 515.1 463 495.8 475.9C493.9 511.4 466.4 540.1 431.4 543.6L424 544L319.9 544C301.9 544 284 540.6 267.3 534.1L260.2 531.1L259.5 530.8L252.9 527.6L252.2 527.3L240 520.8C227.7 514.3 216.7 506.1 207.1 496.7C203 523.6 179.8 544.1 151.8 544.1L119.8 544.1C88.9 544.1 63.8 519 63.8 488.1L64 264C64 233.1 89.1 208 120 208L152 208C162.8 208 172.9 211.1 181.5 216.5L231.6 110L232.2 108.8L234.9 103.8L235.5 102.9zM120 256C115.6 256 112 259.6 112 264L112 488C112 492.4 115.6 496 120 496L152 496C156.4 496 160 492.4 160 488L160 264C160 259.6 156.4 256 152 256L120 256zM317.6 115C302.8 108.1 285.3 113.4 276.9 127L274.7 131L217.9 251.9C214.4 259.4 212.4 267.4 211.9 275.6L211.8 279.8L211.8 392.7L212 400.6C214.4 433.3 233.4 462.7 262.7 478.3L274.2 484.4L280.5 487.5C292.9 493.1 306.3 496 319.9 496L424 496L426.4 495.9C438.5 494.7 448 484.4 448 472L447.8 469.4C447.7 468.5 447.6 467.7 447.4 466.8C444.7 454.7 451.7 442.6 463.4 438.8C473.1 435.7 480 426.6 480 416C480 411.7 478.9 407.8 476.9 404.2C470.6 393.1 474.1 379 484.9 372.2C491.7 367.9 496.1 360.4 496.1 352C496.1 344.9 493 338.5 487.9 334C482.7 329.4 479.7 322.9 479.7 316C479.7 309.1 482.7 302.6 487.9 298C493 293.5 496.1 287.1 496.1 280L496 277.6C494.9 266.3 485.9 257.3 474.6 256.2L472.2 256.1L324.7 256.1C316.5 256.1 308.9 251.9 304.5 245C300.1 238.1 299.5 229.3 303 221.9L333 157.6C340 142.6 334.4 124.9 320.5 116.6L317.6 115z"/></svg>
              
              </button>
              <button class="adopt__button btn">Adopt</button>
              <button class="details__button btn">details</button>
            </div>
          </div>
      </div> 


    `;
    cardBox.append(theCard);
  });
};
// 1-15', price: 1200, …}
// breed
// :
// "Golden Retriever"
// category
// :
// "Dog"
// date_of_birth
// :
// "2023-01-15"
// gender
// :
// "Male"
// image
// :
// "https://i.ibb.co.com/p0w744T/pet-1.jpg"
// petId
// :
// 1
// pet_details
// :
// "This friendly male Golden Retriever is energetic and loyal, making him a perfect companion for families. Born on January 15, 2023, he enjoys playing outdoors and is especially great with children. Fully vaccinated, he's ready to join your family and bring endless joy. Priced at $1200, he offers love, loyalty, and a lively spirit for those seeking a playful yet gentle dog."
// pet_name
// :
// "Sunny"
// price
// :
// 1200
// vaccinated_status
// :
// "Fully"
// [[Prototype]]
// :
// Object

catagoryCard();
loadCatagories();
