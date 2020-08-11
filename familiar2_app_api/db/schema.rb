# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_08_11_125807) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "characters", force: :cascade do |t|
    t.string "name"
    t.string "gender"
    t.string "race"
    t.string "class"
    t.integer "level"
    t.text "base_stats", default: [], array: true
    t.text "saving_throws", default: [], array: true
    t.integer "hp"
    t.integer "movement"
    t.integer "armor_class"
    t.integer "initiative"
    t.text "conditions", default: [], array: true
    t.text "defenses", default: [], array: true
    t.text "languages", default: [], array: true
    t.text "actions", default: [], array: true
    t.text "spells", default: [], array: true
    t.text "equipment", default: [], array: true
    t.text "features_traits", default: [], array: true
    t.integer "prof_bonus"
    t.text "save_prof", default: [], array: true
    t.text "armor_prof", default: [], array: true
    t.text "weapon_prof", default: [], array: true
    t.text "tool_prof", default: [], array: true
    t.text "skill_prof", default: [], array: true
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "user_name"
    t.string "email"
    t.string "password"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
