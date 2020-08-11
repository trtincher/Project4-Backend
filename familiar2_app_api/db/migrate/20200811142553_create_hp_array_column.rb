class CreateHpArrayColumn < ActiveRecord::Migration[6.0]
  def change
    add_column :characters, :hp, :text, array:true, default: []
  end
end
