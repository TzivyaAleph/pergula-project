
module.exports = {numOfSpaceBetweenBeam, numOfBeam, lengthOfWood,heightOfPole,numOfSpaceBetweenPole,numOfPoles};

function numOfSpaceBetweenBeam(width, thickness) {
    let x = Math.floor(width / 75);
    let y = (x + 1) * thickness;
    let z = width - y;
    let result = z / x;
    while (result >= 75) {
        x = x + 1;
        y = (x + 1) * thickness;
        z = width - y;
        result = z / x;
    }
    return result;
}

function numOfBeam(width, thickness) {
    let x = Math.floor(width / 75);
    let y = (x + 1) * thickness;
    let z = width - y;
    let result = z / x;
    while (result >= 75) {
        x = x + 1;
        y = (x + 1) * thickness;
        z = width - y;
        result = z / x;
    }
    return x + 1;
}

/**
 * 
 * @param {*} length of area
 * @param {*} incline - its a percentage. when theres incline its a bit longer.
 * @param {*} output the length of beam that outside the area
 * @returns 
 */
function lengthOfWood(length, incline, output) {
    // Ensure inputs are numbers
    length = parseFloat(length);
    incline = parseFloat(incline);
    output = parseFloat(output);
    
    // Calculate the result with clear parentheses
    return length + output + ((incline / 100) * length);
}

function heightOfPole(height, incline, beamThickness, length) {
    return height - beamThickness - (incline / 100 * length);
}

function numOfSpaceBetweenPole(width, beamThickness) {
    if (beamThickness <= 7) {
        let x = Math.floor(width / 300);
        let y = (x + 1) * beamThickness;
        let z = width - y;
        let result = z / x;
        while (result > 300) {
            x = x + 1;
            y = (x + 1) * beamThickness;
            z = width - y;
            result = z / x;
        }
        return result;
    } else {
        let x = Math.floor(width / 400);
        let y = (x + 1) * beamThickness;
        let z = width - y;
        let result = z / x;
        while (result > 400) {
            x = x + 1;
            y = (x + 1) * beamThickness;
            z = width - y;
            result = z / x;
        }
        return result;
    }
}

function numOfPoles(width, beamThickness) {
    if (beamThickness <= 7) {
        let x = Math.floor(width / 300);
        let y = (x + 1) * beamThickness;
        let z = width - y;
        let result = z / x;
        while (result > 300) {
            x = x + 1;
            y = (x + 1) * beamThickness;
            z = width - y;
            result = z / x;
        }
        return x + 1;
    } else {
        let x = Math.floor(width / 400);
        let y = (x + 1) * beamThickness;
        let z = width - y;
        let result = z / x;
        while (result > 400) {
            x = x + 1;
            y = (x + 1) * beamThickness;
            z = width - y;
            result = z / x;
        }
        return x + 1;
    }
}
