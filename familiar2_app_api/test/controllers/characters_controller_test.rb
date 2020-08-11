require 'test_helper'

class CharactersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @character = characters(:one)
  end

  test "should get index" do
    get characters_url, as: :json
    assert_response :success
  end

  test "should create character" do
    assert_difference('Character.count') do
      post characters_url, params: { character: { actions: @character.actions, armor_class: @character.armor_class, armor_prof: @character.armor_prof, base_stats: @character.base_stats, class: @character.class, conditions: @character.conditions, defenses: @character.defenses, equipment: @character.equipment, features_traits: @character.features_traits, gender: @character.gender, hp: @character.hp, initiative: @character.initiative, languages: @character.languages, level: @character.level, movement: @character.movement, name: @character.name, prof_bonus: @character.prof_bonus, race: @character.race, save_prof: @character.save_prof, saving_throws: @character.saving_throws, skill_prof: @character.skill_prof, spells: @character.spells, tool_prof: @character.tool_prof, weapon_prof: @character.weapon_prof } }, as: :json
    end

    assert_response 201
  end

  test "should show character" do
    get character_url(@character), as: :json
    assert_response :success
  end

  test "should update character" do
    patch character_url(@character), params: { character: { actions: @character.actions, armor_class: @character.armor_class, armor_prof: @character.armor_prof, base_stats: @character.base_stats, class: @character.class, conditions: @character.conditions, defenses: @character.defenses, equipment: @character.equipment, features_traits: @character.features_traits, gender: @character.gender, hp: @character.hp, initiative: @character.initiative, languages: @character.languages, level: @character.level, movement: @character.movement, name: @character.name, prof_bonus: @character.prof_bonus, race: @character.race, save_prof: @character.save_prof, saving_throws: @character.saving_throws, skill_prof: @character.skill_prof, spells: @character.spells, tool_prof: @character.tool_prof, weapon_prof: @character.weapon_prof } }, as: :json
    assert_response 200
  end

  test "should destroy character" do
    assert_difference('Character.count', -1) do
      delete character_url(@character), as: :json
    end

    assert_response 204
  end
end
