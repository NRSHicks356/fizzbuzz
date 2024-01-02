let p = document.querySelector("p");
for (let i = 1; i <= 100; i++) {
    if (i % 5 == 0 && i % 3 == 0) {
        p.innerHTML += `<span> fizzbuzz </span>`;
    } else if (i % 3 == 0) {
        p.innerHTML += `<span> fizz </span>`;
    } else if (i % 5 == 0) {
        p.innerHTML += `<span> buzz </span>`;
    } else {
        p.innerHTML += `<span> ${i} </span>`;
    }
}