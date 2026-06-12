const sortedSkills = (skills, t) => {
    return [...skills].sort((left, right) => {
        const leftLabel = t(`skill.${left.name}`);
        const rightLabel = t(`skill.${right.name}`);

        return leftLabel.localeCompare(rightLabel, "pl");
    });
};

const timeoutScrollToElement = (selector) => {
    setTimeout(() => {
        const element = document.querySelector(selector);

        if (!element) {
            return;
        }

        element.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
};

export { sortedSkills, timeoutScrollToElement };
