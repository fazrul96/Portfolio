json.extract! employee, :id, :name, :annual_salary, :monthly_income_tax, :created_at, :updated_at
json.url employee_url(employee, format: :json)
