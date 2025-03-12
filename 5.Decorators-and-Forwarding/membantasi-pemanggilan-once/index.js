function once(func) {
  let called = false;
  return function (...args) {
    if (!called) {
      called = true;
      return func.apply(this, args);
    } else {
      console.log("Function sudah dipanggil sebelumnya!");
    }
  };
}

function startApp() {
  console.log("Aplikasi dimulai!");
}

const init = once(startApp);
init(); // Output: Aplikasi dimulai!
init(); // Output: Function sudah dipanggil sebelumnya!
