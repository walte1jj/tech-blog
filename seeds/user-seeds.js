const { User } = require("../models");

const userData = [{
        username: "Jermaine",
        password: "jermaine"

    },
    {
        username: "Jessica",
        password: "jessica"
    },
    {
        username: "Julius",
        password: "julius"
    }
];
const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;