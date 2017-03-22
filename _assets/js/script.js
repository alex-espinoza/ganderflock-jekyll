// Functions from David Walsh: http://davidwalsh.name/css-animation-callback
function whichTransitionEndEvent(){
  var t,
      el = document.createElement("fakeelement");

  var transitions = {
    "transition"      : "transitionend",
    "OTransition"     : "oTransitionEnd",
    "MozTransition"   : "transitionend",
    "WebkitTransition": "webkitTransitionEnd"
  }

  for (t in transitions){
    if (el.style[t] !== undefined){
      return transitions[t];
    }
  }
}

function whichAnimationEndEvent(){
  var t,
      el = document.createElement("fakeelement");

  var animations = {
    "animation"      : "animationend",
    "OAnimation"     : "oAnimationEnd",
    "MozAnimation"   : "animationend",
    "WebkitAnimation": "webkitAnimationEnd"
  }

  for (t in animations){
    if (el.style[t] !== undefined){
      return animations[t];
    }
  }
}

var bodyElement = document.querySelector("body");
var blockContainer = document.querySelector("#block-container");
var topLeftBlock = document.querySelector("#block-container .block.top-left");
var topRightBlock = document.querySelector("#block-container .block.top-right");
var bottomLeftBlock = document.querySelector("#block-container .block.bottom-left");
var bottomRightBlock = document.querySelector("#block-container .block.bottom-right");
var logoContainer = document.querySelector("#logo-container");
var webDesignSection = document.querySelector("#web-design-section");
var creativeSection = document.querySelector("#creative-section");
var socialMediaSection = document.querySelector("#social-media-section");
var teamSection = document.querySelector("#team-section");
var goBackLogoElements = Array.from(document.querySelectorAll(".go-back-logo"));
var transitionEndEvent = whichTransitionEndEvent();
var animationEndEvent = whichAnimationEndEvent();

topLeftBlock.addEventListener("click", function() {
  blockContainer.classList.add("section-transition-top-left");
  webDesignSection.classList.add("active");
});

topRightBlock.addEventListener("click", function() {
  blockContainer.classList.add("section-transition-top-right");
  creativeSection.classList.add("active");
});

bottomLeftBlock.addEventListener("click", function() {
  blockContainer.classList.add("section-transition-bottom-left");
  socialMediaSection.classList.add("active");
});

bottomRightBlock.addEventListener("click", function() {
  blockContainer.classList.add("section-transition-bottom-right");
  teamSection.classList.add("active");
});

goBackLogoElements.forEach(function(logoElement) {
  logoElement.addEventListener("click", function() {
    webDesignSection.classList.remove("active");
    creativeSection.classList.remove("active");
    socialMediaSection.classList.remove("active");
    teamSection.classList.remove("active");
    blockContainer.classList.remove("section-transition-top-right");
    blockContainer.classList.remove("section-transition-top-left");
    blockContainer.classList.remove("section-transition-bottom-left");
    blockContainer.classList.remove("section-transition-bottom-right");
  });
});

// ScrollMagic

var webDesignSectionHeroVideoElement = document.querySelector("#web-design-section .hero-video");
var webDesignSectionImageOneElement = document.querySelector("#web-design-section .images-container .image.one");
var webDesignSectionImageTwoElement = document.querySelector("#web-design-section .images-container .image.two");
var webDesignSectionImageThreeElement = document.querySelector("#web-design-section .images-container .image.three");
var webDesignSectionImageFourElement = document.querySelector("#web-design-section .images-container .image.four");

var creativeSectionHeroVideoElement = document.querySelector("#creative-section .hero-video");
var creativeSectionImageOneElement = document.querySelector("#creative-section .images-container .image.one");
var creativeSectionImageTwoElement = document.querySelector("#creative-section .images-container .image.two");
var creativeSectionImageThreeElement = document.querySelector("#creative-section .images-container .image.three");
var creativeSectionImageFourElement = document.querySelector("#creative-section .images-container .image.four");

var socialMediaSectionHeroVideoElement = document.querySelector("#social-media-section .hero-video");
var socialMediaSectionImageOneElement = document.querySelector("#social-media-section .images-container .image.one");
var socialMediaSectionImageTwoElement = document.querySelector("#social-media-section .images-container .image.two");
var socialMediaSectionImageThreeElement = document.querySelector("#social-media-section .images-container .image.three");
var socialMediaSectionImageFourElement = document.querySelector("#social-media-section .images-container .image.four");

var teamSectionHeroVideoElement = document.querySelector("#team-section .hero-video");
var teamSectionImageOneElement = document.querySelector("#team-section .images-container .image.one");
var teamSectionImageTwoElement = document.querySelector("#team-section .images-container .image.two");
var teamSectionImageThreeElement = document.querySelector("#team-section .images-container .image.three");
var teamSectionImageFourElement = document.querySelector("#team-section .images-container .image.four");

var webDesignSectionTweenTimeline = new TimelineMax();
webDesignSectionTweenTimeline.add([
  TweenMax.to(webDesignSectionImageOneElement, 1, {y:-200}),
  TweenMax.to(webDesignSectionImageTwoElement, 1, {y:-150}),
  TweenMax.to(webDesignSectionImageThreeElement, 1, {y:-200}),
  TweenMax.to(webDesignSectionImageFourElement, 1, {y:-150}),
]);

var creativeSectionTweenTimeline = new TimelineMax();
creativeSectionTweenTimeline.add([
  TweenMax.to(creativeSectionImageOneElement, 1, {y:-200}),
  TweenMax.to(creativeSectionImageTwoElement, 1, {y:-150}),
  TweenMax.to(creativeSectionImageThreeElement, 1, {y:-200}),
  TweenMax.to(creativeSectionImageFourElement, 1, {y:-150}),
]);

var socialMediaSectionTweenTimeline = new TimelineMax();
socialMediaSectionTweenTimeline.add([
  TweenMax.to(socialMediaSectionImageOneElement, 1, {y:-200}),
  TweenMax.to(socialMediaSectionImageTwoElement, 1, {y:-150}),
  TweenMax.to(socialMediaSectionImageThreeElement, 1, {y:-200}),
  TweenMax.to(socialMediaSectionImageFourElement, 1, {y:-150}),
]);

var teamSectionTweenTimeline = new TimelineMax();
teamSectionTweenTimeline.add([
  TweenMax.to(teamSectionImageOneElement, 1, {y:-200}),
  TweenMax.to(teamSectionImageTwoElement, 1, {y:-150}),
  TweenMax.to(teamSectionImageThreeElement, 1, {y:-200}),
  TweenMax.to(teamSectionImageFourElement, 1, {y:-150}),
]);

var controller = new ScrollMagic.Controller({
  globalSceneOptions: {
    triggerHook: 'onLeave'
  },
  addIndicators: false
});

new ScrollMagic.Scene({
  triggerElement: webDesignSectionHeroVideoElement,
  duration: 700
})
.setTween(webDesignSectionTweenTimeline)
// .addIndicators({name: "image parallax"})
.addTo(controller);

new ScrollMagic.Scene({
  triggerElement: creativeSectionHeroVideoElement,
  duration: 700
})
.setTween(creativeSectionTweenTimeline)
// .addIndicators({name: "image parallax"})
.addTo(controller);

new ScrollMagic.Scene({
  triggerElement: socialMediaSectionHeroVideoElement,
  duration: 700
})
.setTween(socialMediaSectionTweenTimeline)
// .addIndicators({name: "image parallax"})
.addTo(controller);

new ScrollMagic.Scene({
  triggerElement: teamSectionHeroVideoElement,
  duration: 700
})
.setTween(teamSectionTweenTimeline)
// .addIndicators({name: "image parallax"})
.addTo(controller);

// startButton.addEventListener("click", function() {
//   startButton.addEventListener(transitionEndEvent, function() {
//     startIntroduction();
//   }, {once: true});

//   startButton.className += " hide";
// });

// function startIntroduction() {
//   terminal.className += " show";

//   setTimeout(function() {
//     var firstTerminalLine = "Booting up: ";
//     var currentDateString = new Date().toString().split(" ").slice(0, -2).join(" ");
//     firstTerminalLine += currentDateString;
//     terminal.innerHTML += firstTerminalLine;
//   }, 1000);

//   setTimeout(function() {
//     setupStartupTerminalOutput();
//   }, 2200);
// }
