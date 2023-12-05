globalThis.globalScope = 'globalScope';
const moduleScope = 'moduleScope';

function externe() {
  const closureScope = 'closureScope';
  function interne() {
    const localScope = 'localScope';
    if (true) {
      const blockScope = 'blockScope';
      console.log(blockScope);
      console.log(localScope);
      console.log(closureScope);
      console.log(moduleScope);
      console.log(globalScope);
    }
  }
  interne();
}
externe();
