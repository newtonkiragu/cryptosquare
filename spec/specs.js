describe('encrypt', function() {

  it('removes all punctuation from the string', function() {
    expect(encrypt("four!")).to.equal("fo\nur");
  });

  it('inserts one new line character for a four character string', function() {
    expect(encrypt("four")).to.equal("fo\nur");
  });

  it('inserts two new line characters for an eight character string', function() {
    expect(encrypt("hello you")).to.equal("hel\nloy\nou")
  });

  it('does it right', function() {
    expect(encrypt("don't compare yourself to others, compare yourself to the person you were yesterday")).
      to.equal("dontcompa\nreyoursel\nftoothers\ncompareyo\nurselftot\nhepersony\nouwereyes\nterday");
  });
});


// hello

// this is a string!@#$%^&*()_+=-'<>:

// he
// ll
// o

// hel
// llo
