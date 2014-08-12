class CreateContacts < ActiveRecord::Migration

  def change
    create_table :contacts do |t|
      t.column :firstname, :string
      t.column :lastname, :string
      t.column :email, :string
      t.timestamps
    end
  end

end