export class Adventurer {
    name = "";
    race = "human";
    profession;
    passions = {
        positive: "",
        negative: ""
    };
    stamina;
    luck;
    courage;
    initialSkills = [];
    skills = [];

    constructor(skills) {
        this.initialSkills = skills;
    }

    getSkillValue(name) {
        const skill = this.skills.find(el => el.name == name);

        return skill ? skill.value : 0;
    }

    getInitialSkillValue(name) {
        const skill = this.initialSkills.find(el => el.name == name);

        return skill ? skill.value : 0;
    }

    setInitialSkillValue(name, value) {
        const skill = this.initialSkills.find(el => el.name == name);
        if (skill) {
            skill.value = value;
            return;
        }

        console.log(`Invalid skill ${name}`);
    }

    setSkillsBasedOnProfession(profession) {
        this.skills = this.initialSkills.map((skill) => ({ ...skill }));

        Object.entries(profession.skills).forEach(([skillName, value]) => {
            let skill = this.skills.find(el => el.name == skillName);
            skill.value = value;
        });
        this.profession = profession;
    }
}
