var katzDeliLine = []

function takeANumber(katzDeliLine, customer) {
  katzDeliLine.push(customer)
  return `Welcome, ${customer}. You are number ${katzDeliLine.length} in line.`
}

/*function currentLine(line) {
  var numbers = []
  for (var i = 0; i < line.length; i++) {
    numbers.push(i)
  }
  if(line.length > 0) {
    console.log(`The line is currently: ${} `)
  } else {
    return "The line is currently empty."
  }
}*/

function nowServing(){
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine[0]}`
    katzDeliLine.shift()
  } else {
    return "There is nobody waiting to be served!"
  }
}
