//recording all the possible values of units available
const singularUnits = ["second", "minute", "hour", "day"];
const pluralUnits = ["seconds", "minutes", "hours", "days"];
//array of values to be referred in case conversion has to be
//done upper to lower or lower to upper conversion.
const conversionArray = [60, 60, 24];
let value3 = 0,
    label3 = "";
//time adder function which adds time inputs provided to it.
const timeAdder = (value1, label1, value2, label2) => {

    if (validateValueAndLabel(value1, label1) && validateValueAndLabel(value2, label2)) {
        let labelPos1 = singularUnits.indexOf(label1) > -1 ? singularUnits.indexOf(label1) : pluralUnits.indexOf(label1);
        let labelPos2 = singularUnits.indexOf(label2) > -1 ? singularUnits.indexOf(label2) : pluralUnits.indexOf(label2);
        if (labelPos1 > labelPos2) {
            value1 = valueManipulatorToLowerValues(labelPos1, labelPos2, value1);
            label3 = label2;
        } else if (labelPos1 < labelPos2) {
            value2 = valueManipulatorToLowerValues(labelPos2, labelPos1, value2);
            label3 = label1;
        } else {
            label3 = label1;
        }
        value3 = value1 + value2;
        return valueManipulatorToUpperValues(value3, label3);
    } else {
        return false;
    }
}

/**converts time from one unit to other incase there is mismatch
 *in the units provided for example if days and seconds are provided
 *this function would help in converting one value to other.
 **/
const valueManipulatorToLowerValues = (pos1, pos2, value) => {
    while (pos1 != pos2) {
        pos1--;
        value *= conversionArray[pos1];
    }
    return value;
}

/**
 *function is used to convert time input given to it to 
 *a possible higher unit value .
 */
const valueManipulatorToUpperValues = (value, label) => {
    let pos = singularUnits.indexOf(label3) > -1 ? singularUnits.indexOf(label3) : pluralUnits.indexOf(label3);
    while (pos < 3 && value > 1) {
        const divisor = conversionArray[pos];
        const reminder = value % divisor;
        if (reminder === 0) {
            value = value / divisor;
            if (value > 1) {
                label = pluralUnits[++pos];
            } else {
                label = singularUnits[++pos];
            }
        } else {
            if (value > 1) {
                label = pluralUnits[pos];
            } else {
                label = singularUnits[pos];
            }
            break;
        }
    }
    return [value, label];
}

/**
 * The following function is used to validate given value
 * and corresponding label which is given as input.
 */
const validateValueAndLabel = (value, label) => {
    if (typeof (value) == 'number' && typeof (label) == 'string') {
        if (value <= 1) {
            switch (label) {
                case "second":
                case "minute":
                case "hour":
                case "day":
                    return true;
                default:
                    return false;
            }
        } else {
            switch (label) {
                case "seconds":
                case "minutes":
                case "hours":
                case "days":
                    return true;
                default:
                    return false;
            }
        }
    } else {
        return false;
    }
}

//recording all the possible values of units available
const singularUnits = ["second", "minute", "hour", "day"];
const pluralUnits = ["seconds", "minutes", "hours", "days"];
//array of values to be referred in case conversion has to be
//done upper to lower or lower to upper conversion.
const conversionArray = [60, 60, 24];
let value3 = 0,
    label3 = "";
//time adder function which adds time inputs provided to it.
const timeAdder = (value1, label1, value2, label2) => {

    if (validateValueAndLabel(value1, label1) && validateValueAndLabel(value2, label2)) {
        let labelPos1 = singularUnits.indexOf(label1) > -1 ? singularUnits.indexOf(label1) : pluralUnits.indexOf(label1);
        let labelPos2 = singularUnits.indexOf(label2) > -1 ? singularUnits.indexOf(label2) : pluralUnits.indexOf(label2);
        if (labelPos1 > labelPos2) {
            value1 = valueManipulatorToLowerValues(labelPos1, labelPos2, value1);
            label3 = label2;
        } else if (labelPos1 < labelPos2) {
            value2 = valueManipulatorToLowerValues(labelPos2, labelPos1, value2);
            label3 = label1;
        } else {
            label3 = label1;
        }
        value3 = value1 + value2;
        return valueManipulatorToUpperValues(value3, label3);
    } else {
        return false;
    }
}

/**converts time from one unit to other incase there is mismatch
 *in the units provided for example if days and seconds are provided
 *this function would help in converting one value to other.
 **/
const valueManipulatorToLowerValues = (pos1, pos2, value) => {
    while (pos1 != pos2) {
        pos1--;
        value *= conversionArray[pos1];
    }
    return value;
}

/**
 *function is used to convert time input given to it to 
 *a possible higher unit value .
 */
const valueManipulatorToUpperValues = (value, label) => {
    let pos = singularUnits.indexOf(label3) > -1 ? singularUnits.indexOf(label3) : pluralUnits.indexOf(label3);
    while (pos < 3 && value > 1) {
        const divisor = conversionArray[pos];
        const reminder = value % divisor;
        if (reminder === 0) {
            value = value / divisor;
            if (value > 1) {
                label = pluralUnits[++pos];
            } else {
                label = singularUnits[++pos];
            }
        } else {
            if (value > 1) {
                label = pluralUnits[pos];
            } else {
                label = singularUnits[pos];
            }
            break;
        }
    }
    return [value, label];
}

/**
 * The following function is used to validate given value
 * and corresponding label which is given as input.
 */
const validateValueAndLabel = (value, label) => {
    if (typeof (value) == 'number' && typeof (label) == 'string') {
        if (value <= 1) {
            switch (label) {
                case "second":
                case "minute":
                case "hour":
                case "day":
                    return true;
                default:
                    return false;
            }
        } else {
            switch (label) {
                case "seconds":
                case "minutes":
                case "hours":
                case "days":
                    return true;
                default:
                    return false;
            }
        }
    } else {
        return false;
    }
}
console.log(timeAdder(1, "hour", 1, "hour"));
console.log(timeAdder(1, "second", "1", "day"));
console.log(timeAdder(3600, "seconds", 23, "hours"));
console.log(timeAdder(1, "day", 60, "minutes"));
console.log(timeAdder(1, "hour", 1, "day"));
console.log(timeAdder(1800, "seconds", 30, "minutes"));
console.log(timeAdder(5, "hour", 5, "minutes"));
console.log(timeAdder(false, false, 5, "minutes"));
console.log(timeAdder({}, "days", 5, "minutes"));