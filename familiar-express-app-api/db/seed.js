const mongoose = require('./connection.js');
const db = mongoose.connection;
const User = require('../models/user');
const Character = require('../models/character');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
	await User.deleteMany({});

	await Character.deleteMany({});

	await User.insertMany([
		{
			name: 'trtincher',
			email: 'trtincher12@gmail.com',
			password: 'D&Discool100!',
			characters: []
		}
	]);

	await Character.insertMany([
		{
			name: 'Thomas the Wise',
			gender: 'Male',
			race: 'Half-Elf',
			class: 'Wizard',
			level: 6,
			baseStats: {
				strength: 8,
				dexterity: 13,
				constitution: 15,
				intelligence: 17,
				wisdom: 11,
				charisma: 14
			},
			saving_throws: [ 'str', 'dex', 'con', 'int', 'wis', 'cha' ],
			hp: {
				current: 38,
				max: 38,
				temp: 0
			},
			movement: 30,
			armor_class: 11,
			conditions: {
				blinded: false,
				charmed: false,
				deafened: false,
				frightened: false,
				grappled: false,
				incapacitated: false,
				invisible: false,
				paralyzed: false,
				petrified: false,
				poisoned: false,
				prone: false,
				restrained: false,
				stunned: false,
				unconcious: false,
				exhaustion: 0
			},
			defenses: {},
			languages: [ 'Common', 'Elvish', 'Riedran', 'Sylvan' ],
			actions: [
				'Attack',
				'Cast a Spell',
				'Disengage',
				'Dodge',
				'Grapple',
				'Help',
				'Hide',
				'Imporovise',
				'Ready',
				'Search',
				'Shove',
				'Use and Object'
			],
			spells: [ { spell_name: 'Spell', spell_discription: 'description here', prepared: true } ],
			equipment: [ { item_name: 'item', discription: 'item_description', equiped: true } ],
			features_traits: {
				wizard_features: { catigory: 'discriptions' },
				racialTraits: { catigory: 'discriptions' },
				feats: { catigory: 'discriptions' }
			},
			description: {
				catigory: { 'sub-catigory': 'discriptions' },
				catigory: { 'sub-catigory': 'discriptions' },
				catigory: { 'sub-catigory': 'discriptions' }
			},
			proficiencies: {
				save_prof: [ 'int', 'wis' ],
				armor_prof: [],
				weapon_prof: [ 'crossbow', 'dagger', 'dart', 'quarterstaff', 'sling' ],
				tool_prof: [],
				skill_prof: [ 'acrobatics', 'arcana', 'history', 'insight', 'investigation' ]
			}
		}
	]);

	// Add Thomas the Wise to Travis' characters
	await Character.findOne({ name: 'Thomas the Wise' }, (err, character) => {
		if (err) console.log(err);
		else {
			// let characterId = character._id;
			User.findOneAndUpdate(
				{ name: 'trtincher' },
				{
					$push: {
						characters: character
					}
				},
				{ new: true },
				(err, user) => {
					if (err) console.log(err);
					else {
						console.log(`Added ${character.name} to ${user.name}'s characters array.`);
					}
				}
			);
		}
	});
};

console.log('Created Characters and Students!');

const run = async () => {
	await main();
	db.close();
};

run();
