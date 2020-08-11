# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create([{user_name: 'trtincher', email: 'trtincher12@gmail.com', password:'D&Disawesome100!'}, {user_name: 'coolGuy420', email: 'coolGuy420@gmail.com', password:'D&Disawesome420!'}])

Character.create([
    {
        name: 'Thomas the Wise',
        gender: 'Male',
        race: 'Half-Elf',
        class: 'Wizard',
        level: '6'
        base_stats: [
            {
                'strength': 8,
                'dexterity': 13,
                'constitution': 15,
                'intelligence': 17,
                'wisdom': 11,
                'charisma': 14
            }
        ],
        saving_throws: ['str', 'dex', 'con', 'int', 'wis', 'cha'],
        hp: [
            { 
                'current': 38,
                'max': 38,
                'temp': 0
            }
        ],
        movement: 30,
        armor_class: 11,
        conditions: [
            {
                'blinded': false,
                'charmed': false,
                'deafened': false,
                'frightened': false,
                'grappled': false,
                'incapacitated': false,
                'invisible': false,
                'paralyzed': false,
                'petrified': false,
                'poisoned': false,
                'prone': false,
                'restrained': false,
                'stunned': false,
                'unconcious': false,
                'exhaustion': 0
            }
        ],
        defenses: [],
        languages: ['Common', 'Elvish', 'Riedran', 'Sylvan'],
        actions: ['Attack', 'Cast a Spell', 'Disengage', 'Dodge', 'Grapple', 'Help', 'Hide', 'Imporovise', 'Ready', 'Search', 'Shove', 'Use and Object'],
        spells: [
            [{spell_name: 'Firebolt', 'spell_discription': 'bolt of fire'}, {'prepared': true}],
            [{spell_name: 'Light', 'spell_discription': 'light'}, {'prepared': true}],
            [{spell_name: 'Spell', 'spell_discription': 'description here'}, {'prepared': true}],
            [{spell_name: 'Spell', 'spell_discription': 'description here'}, {'prepared': false}],
            [{spell_name: 'Spell', 'spell_discription': 'description here'}, {'prepared': true}]
        ],
        equipment: [
            [{item_name: 'item', 'item_description'}. {'equiped', true}],
            [{item_name: 'item', 'item_description'}. {'equiped', true}],
            [{item_name: 'item', 'item_description'}. {'equiped', true}],
            [{item_name: 'item', 'item_description'}. {'equiped', true}],
            [{item_name: 'item', 'item_description'}. {'equiped', true}]
        ],
        features_traits: [
            {
                'wizard_features': {'catigory':'discriptions'}
                'racial_traits': {'catigory':'discriptions'}
                'feats': {'catigory':'discriptions'}
            }
        ],
        description:[
            {'catigory': {'sub-catigory':'discriptions'}},
            {'catigory': {'sub-catigory':'discriptions'}},
            {'catigory': {'sub-catigory':'discriptions'}}
        ]
        save_prof: ['int', 'wis'],
        armor_prof: [],
        weapon_prof: ['crossbow', 'dagger', 'dart','quarterstaff', 'sling'],
        tool_prof: [],
        skill_prof: ['acrobatics', 'arcana', 'history', 'insight', 'investigation'],
        user_id: 1,
    }
])