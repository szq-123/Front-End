var g1 = 10 // global variable
g2 = 12
window.alert(window.g2)

function testOutput() {
    // JS doesn't hava any print functions
    // when trying to output a variable, it's automatically transformed to string.
    window.alert("hello") // pop-up
    document.write("hello") // write to a html
    document.getElementById("trifle").innerHTML = "hello" // write to an element

    console.log("hello debug") // you can debug your javascript code in browser.
}

function testDataTypes() {
    // local variables
    let a3; // undefined
    const a1 = 1, a2 = 1.23, a6 = 2e5; // number
    let a4 = "string", a5 = 'string' // string
    let a7 = true // boolean
    let a8 = null / null

    let a12 = new Date(2022, 1, 1, 8, 8, 8, 0)
    let a13 = new Date(1685634507913) // measured in ms.
    let a14 = new Date("2023-06-01 23:48:19")
    a14.getDate()

    window.alert(a3 == a8) // true
    window.alert(a3 === a8) // false
    window.alert(null == undefined) // true
    window.alert(null === undefined) // false
    window.alert(typeof a3) // undefined
    window.alert(typeof a8) // object
    window.alert(typeof NaN) // Number

    // datatype conversion
    s1 = String(4)
    s2 = String(4 + 5)
    s3 = String(new Date())
    i1 = Number("")
    i2 = Number("3.14")
    i3 = Number(new Date())


    var a9 = [] // new Array()
    a9[1] = "john"
    let a10 = ['hobby', 'bub']

    // Object
    var a11 = {
        p1: 'p1', p2: 'p2', // attributes
        f1: function () { // methods
            return this.p1 + this.p2
        }
    }
    a11.p1 = 'p11'
    a11['p1'] = 'p111'
    a11.p1 = a11.f1()


    let c = a1 * a2
    window.alert(typeof c) // print datatype
}

function testString() {
    // different ways to quote quotation marks in a string.
    var s1 = 'i am "good"', s2 = "i am 'good", s3 = 'i am \'good\''
    s4 = s1[2] // type of s4: string
    l1 = s1.length

    s5 = new String(" ") // type of s3: object
    window.alert(s4 === s5) // false. `===` will judge both the type and the value.

    s1.includes("am", 1)

    // string template
    a1 = 10
    s6 = `the commodity's price is ${a1 * 5}. it used to be ${a1}`

    // use template to create a dynamic webpage.
    let header = "";
    let tags = ["RUNOOB", "GOOGLE", "TAOBAO"];

    let html = `<h2>${header}</h2><ul>`;
    for (const x of tags) {
        html += `<li>${x}</li>`;
    }

    html += `</ul>`;
    document.getElementById('trifle').innerHTML = html
}

function testOperator() {
    // operators are similar with golang, python.
    // +, %, %=, ...

    a1 = 10
    s1 = "Hello your value is "
    window.alert(a1 + s1) // we can add string and number. number will be converted to a string.

    // comparison operators.
    // ===, means both the type and the value have to be same. !==, the opposite.

    // logical operators are the same as golang.
    // &&, ||, !
}

function testFlowControlStatement() {
    let a1 = 10
    if (a1 > 10) {
        window.alert(a1 - 10)
    } else if (a1 > 5) {
        window.alert(a1 - 5)
    } else {
        window.alert(a1)
    }

    switch (a1) {
        case 1:
            window.alert(1)
            break
        case 2:
            window.alert(2)
            break
        default:
            window.alert(a1)
    }

    for (i = 0; i < 10; i++) {
        if (i == 4) {
            continue
        }
        if (i == 9) {
            break
        }
        window.alert(i)
    }

    let pool = [1, 2, 3, 4]
    for (let v in pool) {
        window.alert(v) // 1, 2, 3, 4
    }
    let dict = {a: 'a', b: 'b', c: 'c'}
    for (let key in dict) {
        window.alert(dict[key])
    }

    let i
    t: while (i < 10) {
        if (i == 4) {
            continue t
        }
        if (i == 9) {
            break t
        }
        window.alert(i)
        i++
    }

    let j
    do {
        window.alert(j)
        j++
    } while (j < 10)
}

function testRegularExpression() {
    txt = "i am a good guy".replace(/good/i, "excellent")
    index = "i am a good boy".search(/boy/i)
}

function testException() {
    let x
    try {
        if (x == 0) {
            throw "input value can not be zero" // raise an exception
        }
    } catch (err) { // catch exception
        window.alert(err)
    } finally { // inevitably execute
        window.alert("logic has been executed")
    }
}

function testCreateVariable() {
    window.alert(y) // undefined
    var y = 10
}

function testStrict() {
    // strict mode
    "use strict"
    e = 3.12 // can not set value to a variable has not been declared.
}

function testDOM() {
    // visit form
    var x = document.forms["myForm"]["user_name"].value;
    if (x == null || x == "") {
        alert("please input your username");
        return false;
    }
}