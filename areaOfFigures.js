function areaOfFigures(input) {
    let type = input[0];
    let area = 0;

    if (type === "square") {
        let a = Number(input[1]);
        let area = a * a;
        console.log(area.toFixed(3));
    } else if (type === "rectangle") {
        let a = Number(input[1]);
        let b = Number(input[2]);
        let area = a * b;
        console.log(area.toFixed(3));
    } else if (type === "circle") {
        let r = Number(input[1]);
        let area = Math.PI * Math.pow(r,2);
        console.log(area.toFixed(3));
    } else if (type === "triangle") {
        let a = Number(input[1]);
        let h = Number(input[2]);
        let area = (a * h) / 2;
        console.log(area.toFixed(3));
    }
}
areaOfFigures(["rectangle", "7", "2.5"]);