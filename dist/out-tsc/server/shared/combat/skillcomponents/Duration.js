"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Duration = function (duration) {
    return function (skill, caster, combat) {
        if (!skill.targets || skill.targets.length === 0 || !skill.targetEffects) {
            throw new Error("Skill " + JSON.stringify(skill) + " is trying to Duration but has no targets. Combat: " + JSON.stringify(combat));
        }
        Object.keys(skill.targetEffects).forEach(function (characterId) {
            skill.targetEffects[characterId].forEach(function (effect) {
                effect.turnsEffectLasts = duration;
                if (duration instanceof Function) {
                    effect.turnsEffectLasts = duration(caster, combat.characters[characterId], combat);
                }
            });
        });
        return skill;
    };
};
//# sourceMappingURL=Duration.js.map