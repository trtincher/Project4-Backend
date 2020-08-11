class CreateCharacters < ActiveRecord::Migration[6.0]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :gender
      t.string :race
      t.string :class
      t.integer :level
      t.text :base_stats, array:true, default: []
      t.text :saving_throws, array:true, default: []
      t.integer :hp
      t.integer :movement
      t.integer :armor_class
      t.integer :initiative
      t.text :conditions, array:true, default: []
      t.text :defenses, array:true, default: []
      t.text :languages, array:true, default: []
      t.text :actions, array:true, default: []
      t.text :spells, array:true, default: []
      t.text :equipment, array:true, default: []
      t.text :features_traits, array:true, default: []
      t.integer :prof_bonus
      t.text :save_prof, array:true, default: []
      t.text :armor_prof, array:true, default: []
      t.text :weapon_prof, array:true, default: []
      t.text :tool_prof, array:true, default: []
      t.text :skill_prof, array:true, default: []

      t.timestamps
    end
  end
end
