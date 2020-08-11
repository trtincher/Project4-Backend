class DeleteHpColumn < ActiveRecord::Migration[6.0]
  def change
    remove_column :characters, :hp, :integer
  end
end
