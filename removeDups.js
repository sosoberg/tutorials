let a = [1, 2, 5, 2, 1, 8];

let b = []

let len = a.length;

for (let i = 0; i < len; i++) {
    // cant find index === -1
    if (b.indexOf(a[i]) === -1) {
        b.push(a[i]);
    }
}

console.log(b)