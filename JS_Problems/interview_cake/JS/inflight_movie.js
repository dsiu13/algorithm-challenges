// Users on longer flights like to start a second movie right when their first one ends,
// but they complain that the plane usually lands before they can see the ending.
// So you're building a feature for choosing two movies whose total runtimes will equal the exact flight length.
//
// Write a method that takes an integer flightLength (in minutes) and an array of integers movieLengths (in minutes)
// and returns a boolean indicating whether there are two numbers in movieLengths whose sum equals flightLength.
//
// When building your method:
//
// Assume your users will watch exactly two movies
// Don't make your users watch the same movie twice
// Optimize for runtime over memory


let  inflightMoviePicker = (movieTimeArr, flightLength) => {
    let nums = []
    let prevNums = []

    for(let x in movieTimeArr){
        for(let y in movieTimeArr){
            if (movieTimeArr[x] + movieTimeArr[y] === flightLength){
                if(!!nums.length){
                    if (!prevNums.includes(movieTimeArr[x]) && !prevNums.includes(movieTimeArr[y])) {
                        prevNums.push(movieTimeArr[x])
                        nums.push([movieTimeArr[x], movieTimeArr[y]])
                        }
                } else {
                    nums.push([movieTimeArr[x], movieTimeArr[y]])
                    prevNums.push(movieTimeArr[x])
                }
            }
        }
    }
   return nums;
};
