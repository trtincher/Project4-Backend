const mongoose = require('../db/connection');

const characterSchema = new mongoose.Schema({
	name: { type: String, required: true },
	gender: { type: String, required: true },
	race: { type: String, required: true },
	class: { type: String, required: true },
	level: { type: Number, required: true },
	baseStats: { type: Object, required: true },
	saving_throws: { type: Array, required: true },
	hp: { type: Object, required: true },
	movement: { type: Number, required: true },
	armorClass: { type: Number, required: true },
	conditions: { type: Object, required: true },
	defenses: { type: Array, required: true },
	languages: { type: Object, required: true },
	actions: { type: Array, required: true },
	spells: { type: Array, required: true },
	equipment: { type: Array, required: true },
	featuresTraits: { type: Object, required: true },
	description: { type: Object, required: true },
	proficiencies: { type: Object, required: true }
});

const Character = mongoose.model('Character', characterSchema);

module.exports = Character;
