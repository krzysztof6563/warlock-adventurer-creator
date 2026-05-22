const roll = (roll) => {
    let sum = 0;
    let parts = roll.split("+");
    parts.forEach((part) => {
        if (part.includes("k")) {
            let rollParts = part.trim().toLowerCase().split("k");
            let rollSum = 0;

            for (let i = 0; i < rollParts[0]; i++) {
                rollSum += Math.floor(Math.random() * (parseInt(rollParts[1]) - 1 + 1) + 1);
            }
            sum += rollSum;
        } else {
            sum += parseInt(part.trim());
        }
    });

    return sum;
};

const rollTable = (times, singleSize, table) => {
    let values = [];
    for (let i = 0; i < times; i++) {
        let roll = Math.randomBetween(1, singleSize);
        let index = i * singleSize + (roll - 1);
        values.push(table[index]);
    }

    return values;
};

const rollRangeTable = (table, rollValue) => {
    return table?.entries?.find((item) => rollValue >= item.min && rollValue <= item.max) ?? null;
};

export { roll, rollTable, rollRangeTable };
