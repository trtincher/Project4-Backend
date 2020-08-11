class AddDescritionColumnTooCharacters < ActiveRecord::Migration[6.0]
  def change
    add_column :characters, :description, :text, array:true, default:  []
  end
end
