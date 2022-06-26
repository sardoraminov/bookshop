function generateConsumerId() {
  let id = Math.floor(Math.random() * (9000000 - 900000 + 1)) + 900000;

  return id
}

function generateBookId() {
  let id = Math.floor(Math.random() * 900000)

  return `book${id}`
}

function generateOrderId() {
  let id = Math.floor(Math.random() * 900000)

  return `order${id}`
}

module.exports = { generateConsumerId, generateBookId, generateOrderId };
