const mongoose = require('../db/connection');

const characterSchema = new mongoose.Schema({
	name: { type: String, required: true },
	gender: { type: String, required: true },
	avatar: { type: String },
	race: { type: String, required: true },
	class: { type: String, required: true },
	level: { type: Number },
	arcaneTradition: { type: String },
	baseStats: { type: Object },
	saving_throws: { type: Array },
	hp: { type: Object },
	movement: { type: Number },
	armorClass: { type: Number },
	conditions: { type: Object },
	defenses: { type: Array },
	languages: { type: Array },
	actions: { type: Array },
	spells: { type: Array },
	nonSpellattacks: { type: Array },
	spellSlots: { type: Object },
	equipment: { type: Array },
	featuresTraits: { type: Object },
	description: { type: Object },
	proficiencies: { type: Object }
});

const Character = mongoose.model('Character', characterSchema);

module.exports = Character;
