export class Adventurer {
    name = "";
    race = "";
    profession;
    passions = {
        positive: "",
        negative: "",
    };
    stamina;
    luck;
    courage;
    talents = [null, null];
    height = null;
    hairColor = null;
    bodyBuild = null;
    hairType = null;
    skin = null;
    hairstyle = null;
    facialHair = null;
    misfortune = null;
    keepsake = null;
    whereFrom = null;
    travelReasonOptions = [];
    travelReason = null;
    howWeMetOptions = [];
    howWeMet = null;
    darkSecretOptions = [];
    darkSecret = null;
    farewell = null;
    whoYouKnow = null;
    passionPositive = null;
    passionNegative = null;
    initialSkills = [];
    skills = [];

    constructor(skills) {
        this.initialSkills = skills;
    }

    getSkillValue(name) {
        const skill = this.skills.find((el) => el.name == name);

        return skill ? skill.value : 0;
    }

    getInitialSkillValue(name) {
        const skill = this.initialSkills.find((el) => el.name == name);

        return skill ? skill.value : 0;
    }

    setInitialSkillValue(name, value) {
        const skill = this.initialSkills.find((el) => el.name == name);
        if (skill) {
            skill.value = value;
            return;
        }

        console.log(`Invalid skill ${name}`);
    }

    setSkillsBasedOnProfession(profession) {
        this.skills = this.initialSkills.map((skill) => ({ ...skill }));

        Object.entries(profession.skills).forEach(([skillName, value]) => {
            let skill = this.skills.find((el) => el.name == skillName);
            skill.value = value;
        });
        this.profession = profession;
    }
}
