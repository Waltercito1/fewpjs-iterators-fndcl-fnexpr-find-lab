
// const record = [
//     {year: "2018", result: "L"},
//     {year: "2017", result: "W"},
//     {year: "2016", result: "N/A"}
//     //...
//   ] 

superbowlWin = (arrayOfObjects) => {
    let result = arrayOfObjects.find(record => record.result === "W")
    return !!result ? result.year : undefined
}
