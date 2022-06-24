const board = [
    ["X", "O", "X"],
    ["O", "O", "O"],
    ["O", "O", "O"],
];

const matches = [
    [1, 4, 7], //c
    [2, 5, 8], //c
    [3, 6, 9], //c
    [1, 2, 3], //r
    [4, 5, 6], //r
    [7, 8, 9], //r
    [1, 5, 9], //d
    [3, 5, 7], //d
];

const solver = (board, matches) => {
    // build map
    let counter = 1;
    const map = {};

    // convert array to object
    for (let row of board) {
        for (let char of row) {
            map[counter] = char; // map[1]=X,map[2]=O,map[3]=X
            counter++; // counter=1+1,2+1
        }
    }

    for (let match of matches) {
        // create a new array with the values
        const arr = [...map[match[0]], map[match[1]], map[match[2]]];
        // check for duplicates
        const arr2 = [...new Set(arr)].join("");
        // console log if length is 1
        if (arr2.length === 1) console.log(`match found at set: ${match}`);
    }
};

solver(board, matches);