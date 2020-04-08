"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const fake_profile_1 = require("./fake-profile");
const mrSGDaddyPerfect_1 = require("./mrSGDaddyPerfect");
const id = "S8399420G";
const name = fake_profile_1.ProfileArchetype.MR_SG_JOBLESS;
exports.mrSGJobless = {
    id,
    name,
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = mrSGDaddyPerfect_1.mrSGDaddyPerfect.generate(profileName);
        profile.occupation = {
            "lastupdated": null,
            "code": null,
            "source": null,
            "classification": null,
            "desc": null,
        };
        return profile;
    },
};
//# sourceMappingURL=mrSGJobless.js.map