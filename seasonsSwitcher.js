let seasonsmallimageElement = document.getElementById("seasonSmallImage");
//console.log(seasonsmallimageElement);
let seasonmediumimageElement = document.getElementById("seasonMediumImage");
//console.log(seasonmediumimageElement);

let springSmallimage = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-xs-img.png";
//console.log(seasonSmallimage);
let springMediumImage = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-md-img.png";
let summerSmallimage ="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-xs-img.png";
let summerMediumimage = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-md-img.png";
let autumnSmallimage = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-xs-img.png";
let autumnMediumimage = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-md-img.png";
let winterSmallimage = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-xs-img.png";
let winterMediumimage = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-md-img.png";

function springImage() {
    seasonsmallimageElement.src = springSmallimage;
    seasonmediumimageElement.src = springMediumImage;
}
function summerImage() {
    seasonsmallimageElement.src = summerSmallimage;
    seasonmediumimageElement.src = summerMediumimage;
}
function autumnImage() {
    seasonsmallimageElement.src = autumnSmallimage;
    seasonmediumimageElement.src = autumnMediumimage;
}
function winterImage() {
    seasonsmallimageElement.src =winterSmallimage;
    seasonmediumimageElement.src = winterMediumimage;
}