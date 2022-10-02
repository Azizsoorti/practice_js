var counter = document.getElementById("counterValue");
counter.style.color = "green";

function Increment() {
    var pre =  counter.textContent;
    var up = parseInt(pre)  + 1;
    counter.textContent = up;
};

function Decrement() {
    var pre =  counter.textContent;
    var up = parseInt(pre) - 1;
    counter.textContent = up;
};

function Reset () {
    counter.textContent = 0;
}


