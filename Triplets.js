const path = require("path");

const logFile = [
    ['/', 'user_1'],
    ['/about', 'user_1'],
    ['/', 'user_3'],
    ['/features', 'user_1'],
    ['/about', 'user_2'],
    ['/purchase', 'user_2'],
    ['/purchase', 'user_1'],
    ['/thank-you', 'user_1'],
    ['/about', 'user_3'],
    ['/thank-you', 'user_2'],
    ['/purchase', 'user_3'],
    ['/thank-you', 'user_3'],
];

//Group user paths by using user id as key, and array of user path as the value
const result = logFile.reduce((r, a) => {
    r[a[1]] = r[a[1]] || [];
    r[a[1]].push(a[0]);
    return r;
}, {})


//Extract triplet and push them to an array
const tripletStore = []
for (const key in result) {
    let endReached = false
    while(!endReached) {
        const paths = result[key];
        if(paths.length < 3){
            endReached = true;
            break;
        }
        for(let index = 0 ; index < paths.length; index++) {
            if(index + 3 > paths.length) {
                endReached = true;
                break
            }
            tripletStore.push(paths.slice(index, index+3))
        }
    }
}

// convert array to string for easy comparison
const stringTripletStore = tripletStore.map(triplet => triplet.join(","));

const occurence = {}

//Get occurence by using the path as key and occurence as value
stringTripletStore.forEach((triplet, i) => {
    const string = stringTripletStore[i];
    if (occurence[string]) {
        occurence[string]++;
        return
    }
    occurence[string] = 1;
  
})

//Sort object based on value in descending order
const sortable = Object.entries(occurence)
    .sort(([, a], [, b]) => b - a)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

//Return first 10 keys in the right order 
console.log(Object.keys(sortable).map(path => path.split(",")).slice(0,10))
