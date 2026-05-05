export default (roll) => {
    let sum = 0;
    let parts = roll.split("+");
    parts.forEach(part => {
        if (part.includes('k')) {
            let rollParts = part.trim().toLowerCase().split("k");
            let rollSum = 0;

            for (let i = 0; i < rollParts[0]; i++) {
                rollSum += Math.floor(Math.random() * (parseInt(rollParts[1]) - 1 + 1) + 1)
            }
            sum += rollSum;
        } else {
            sum += parseInt(part.trim());
        }
    });

    return sum;
}