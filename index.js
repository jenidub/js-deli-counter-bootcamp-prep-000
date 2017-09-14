var katzDeliLine = []

function takeANumber(katzDeliLine, customer) {
  katzDeliLine.push(customer)
  return `Welcome, ${customer}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(){
  if (katzDeliLine.length > 0) {
    var person = katzDeliLine[0]
    katzDeliLine.unshift()
    return person
  } else {
    return "There is nobody waiting to be served!"
  }
}
