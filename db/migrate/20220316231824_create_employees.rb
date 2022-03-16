class CreateEmployees < ActiveRecord::Migration[6.1]
  def change
    create_table :employees do |t|
      t.text :name
      t.decimal :annual_salary
      t.decimal :monthly_income_tax

      t.timestamps
    end
  end
end
