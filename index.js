// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]


function superbowlWin(record) {
  let winningYear = record.find(year => {
    if (year.result === "W") {
      return true
    }
    else if (year.result !== "W") {
      return false
    }
  })
  if (winningYear) return winningYear.year
}

 
