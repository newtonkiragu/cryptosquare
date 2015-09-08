var encrypt = function(message) {
  var cleanedMessage = message.match(/[A-Za-z0-9]/g);
  var msgLngth = cleanedMessage.length;
  // parseInt(Math.sqrt(msgLngth)) === Math.sqrt(msgLngth)
  var root = parseInt(Math.ceil(Math.sqrt(msgLngth)));

  var output = '';
  for (var i = 0; i < msgLngth; i++) {
    if (i % root == 0 && i !== 0) {
      output += '\n'
    }
    output += cleanedMessage[i]
  }
  return output;
}
