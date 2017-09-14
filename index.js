var katzDeliLine = []

function takeANumber(katzDeliLine, customer) {
  katzDeliLine.push(customer)
  return `Welcome, ${customer}. You are number ${katzDeliLine.length} in line.`
}

function currentLine(line) {
  if(line.length > 0) {
    
  } else {
    return "The line is currently empty."
  }
}

function nowServing(){
  if (katzDeliLine.length > 0) {
    var person = katzDeliLine[0]
    katzDeliLine.unshift()
    return `Currently serving ${person}`
  } else {
    return "There is nobody waiting to be served!"
  }
}
