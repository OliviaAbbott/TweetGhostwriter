function writeTweet()
{
  var randIndex;
  var sentence;
  var intro = ["Don't worry about", "Life is about", "When life gets hard", "Sometimes all you need is"];
  var body = ["the rain", "your doubts", "powerful postitive thoughts", "the future", "a challenge"];
  var end = ["never give up", "when you fall, get back up"];
  randIndex = randomUpTo(intro.length - 1);
  sentence = intro[randIndex];
  randIndex = randomUpTo(body.length - 1);
  sentence = sentence + " " + body[randIndex];
  randIndex = randomUpTo(end.length - 1);
  sentence = sentence + " " + end[randIndex];
  document.getElementById("tweet").innerHTML = sentence;
}

//Generates a random whole number between 0 and max (inclusive)
function randomUpTo(max)
{
  return Math.floor(Math.random() * (max+1));
}
