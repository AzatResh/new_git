const squareOfSum = (a, b) => {
    c = document.getElementById("testToJS").value;

    if (typeof c == "string") {
        switch (c) {
            case "1":
                alert("is one!");
                break;
            case "2":
                alert("is two");
                break;

            default:
                alert("it's another number.")
        }
    } else {
        alert("it is not value");
    }

}


const fromGetModule = () => {
    getMax([1, 10, 8]);
}

const getMax = (coll) => {
    let [max, ...rest] = coll;

    for (const item of rest) {
        (max <= item) ? max = item: max;
    }
    alert(max);
}