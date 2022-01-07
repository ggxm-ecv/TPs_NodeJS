// exo 1

const testString20Char = (myString) => {
  return new Promise((resolve, failure) => {
    if (myString.length <= 20) {
      resolve(true);
    } else {
      failure();
    }
  });
}

// exo 2

const test2int = (nb1, nb2) => {
  return new Promise((resolve, failure) => {
    if (nb1 > nb2) {
      resolve(nb1 - nb2);
    } else {
      failure();
    }
  });
}

// exo 3

const testMajor = (dateOdBirth) => {
  return new Promise((resolve, failure) => {
    let dateNow = new Date();
    let dateDiff = dateNow - dateOdBirth;
    if (dateDiff >= 18) {
      resolve(true);
    } else {
      failure();
    }
  });
}

// exo 4

function execute1() {
  try {
    let myString = 'Test my string';
    testString20Char(myString).then(res => console.log(res));
  } catch(e) {
    console.log(e);
  }
}
execute1();

function execute2() {
  try {
    let nb1 = 2;
    let nb2 = 4;
    test2int(nb1, nb2).then(res => console.log(res));
  } catch(e) {
    console.log(e);
  }
}
execute2();

function execute3() {
  try {
    let dateOdBirth = new Date(1996, 7, 5);
    testMajor(dateOdBirth).then(res => console.log(res));
  } catch(e) {
    console.log(e);
  }
}
execute3();

// exo 5

async function execute1() {
  try {
    let myString = 'Test my string';
    await testString20Char(myString).then(res => console.log(res));
  } catch(e) {
    console.log(e);
  }
}
execute1();

async function execute2() {
  try {
    let nb1 = 2;
    let nb2 = 4;
    await test2int(nb1, nb2).then(res => console.log(res));
  } catch(e) {
    console.log(e);
  }
}
execute2();

async function execute3() {
  try {
    let dateOdBirth = new Date(1996, 7, 5);
    await testMajor(dateOdBirth).then(res => console.log(res));
  } catch(e) {
    console.log(e);
  }
}
execute3();