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
    const users = [{
            name: 'Tirion',
            children: [
                { name: 'Mira', birthday: '1983-03-23' },
            ],
        },
        { name: 'Bronn', children: [] },
        {
            name: 'Sam',
            children: [
                { name: 'Aria', birthday: '2012-11-03' },
                { name: 'Keit', birthday: '1933-05-14' },
            ],
        },
        {
            name: 'Rob',
            children: [
                { name: 'Tisha', birthday: '2012-11-03' },
            ],
        },
    ];

    getChildren(users);
    // [
    //   { name: 'Mira', birthday: '1983-03-23' },
    //   { name: 'Aria', birthday: '2012-11-03' },
    //   { name: 'Keit', birthday: '1933-05-14' },
    //   { name: 'Tisha', birthday: '2012-11-03' },
    // ];
}



const getChildren = (users) => {
    const result = [];
    for (const { children }
        of users) {
        result.push(children);
    }
    console.log(result);
}