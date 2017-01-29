//----enable fs to read and write to .txt files----
var fs = require("fs");

//----enable twitter, spotify, request node packages----
var twitter = require('twitter');
var spotify = require('spotify');
var request = require('request');


//----store location of required file in variable----
var keyFile = require('./keys.js');

//----store location of twitter keys----
var tKeys = keyFiles.twitterKeys;

//----var for request----
var userRequest;

