const rot = require("../config/rot.json")
const { letterTrans } = require(`custom-translate`)

module.exports = {
    data: {
        name: "rot",
        description: "ROT13 encripting"
    },
    async execute(interaction) {
        let text = interaction.options.getString('text').toLowerCase();
        interaction.reply({ content: `${letterTrans(text, rot)}` })
    }
}