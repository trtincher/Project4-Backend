class DeleteInitiativeColumn < ActiveRecord::Migration[6.0]
  def change
    remove_column :characters, :initiative, :integer
  end
end
