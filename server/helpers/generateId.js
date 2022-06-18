function generateId(first, second) {
  let id = first + second + Math.random().toString(16).slice(8);

  return id;
}

module.exports = { generateId };
