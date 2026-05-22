const sortedSkills = (skills, t) => {
    return [...skills].sort((left, right) => {
        const leftLabel = t(`skill.${left.name}`);
        const rightLabel = t(`skill.${right.name}`);

        return leftLabel.localeCompare(rightLabel, "pl");
    });
};

const timeoutScrollToBottom = () => {
    setTimeout(() => {
        window.scrollTo({ top: document.body.clientHeight, behavior: "smooth" });
    }, 100);
};

export { sortedSkills, timeoutScrollToBottom };
