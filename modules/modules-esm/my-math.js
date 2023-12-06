export function sum(a, b, ...nbs ) {
  let result = a + b;

  for (const nb of nbs) {
    result += nb;
  }

  return result;
}

export function multiply(a, b, c, d, e) {
  return a * b * c * d * e;
}

