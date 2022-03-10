function guessGifts(presentsArr, wishlistArr) {
    let possibleGifts = [];
    for (let i = 0; i < presentsArr.length; i++) {
        for (let j = 0; j < wishlistArr.length; j++) {
            if (presentsArr[i].size === wishlistArr[j].size
                && presentsArr[i].clatters === wishlistArr[j].clatters
                && presentsArr[i].weight === wishlistArr[j].weight) {
                possibleGifts.push(wishlistArr[j].name);
            };
        };
    };
    return possibleGifts;
};

var wishlist = [
    {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
    {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
    {name: "Card Game", size: "small", clatters: "no", weight: "light"}
];

var presents = [
    {size: "medium", clatters: "a bit", weight: "medium"},
    {size: "small", clatters: "yes", weight: "light"},
    {size: "small", clatters: "yes", weight: "light"}
];

console.log(guessGifts(presents, wishlist));