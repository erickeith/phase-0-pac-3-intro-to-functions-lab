// REQUIRED LIBRARIES
global.expect = require("expect");

const babel = require("babel-core");
const jsdom = require("jsdom");
const path = require("path");

// FUNCTIONS
function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
  switch (string) {
    case string.toLowerCase():
      return "I can't hear you!"
    case string.toUpperCase():
      return "YES INDEED!"
    case "Let's have dinner together!":
      return "I would love to!"
  }
}
