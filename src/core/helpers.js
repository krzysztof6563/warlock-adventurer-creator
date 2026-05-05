const sortedSkills = (skills, t) => {
    return [...skills].sort((left, right) => {
        const leftLabel = t(`skill.${left.name}`);
        const rightLabel = t(`skill.${right.name}`);

        return leftLabel.localeCompare(rightLabel, "pl");
    });
}

export { sortedSkills }
