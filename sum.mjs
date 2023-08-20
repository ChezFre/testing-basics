function sum(a, b) {
  if (typeof a !== "number" || typeof b !== "number")
    throw new Error("sum requires 2 parameters");
  return a + b;
}

export { sum };
