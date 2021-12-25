function twoSums (nums, target) {
    let output = [];

    // compare each element with another without repeating the same pair
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                output.push([i,j]);
            }
        }
    }

    // if no matches then return "No Matches", if there is more than 1 match then return an array of matches
    // otherwise, there is only 1 match so return the only match
    if (output.length === 0) {
        return "No Matches";
    } else if (output.length > 1) {
        return output;
    } else {
        return output[0];
    }
}



// examples
console.log(twoSums([2,7,11,15], 13)); // expected [0,2]
console.log(twoSums([3,2,4], 6));   // expected [1,2]
console.log(twoSums([3,3], 6)); // expected [0,1]

// additional test
console.log(twoSums([4,5,6,7,9,3,1], 10)); // expected [[0,2],[3,5],[4,6]]