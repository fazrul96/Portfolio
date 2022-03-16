class EmployeesController < ApplicationController
  before_action :set_employee, only: %i[ show edit update destroy ]
  before_action :authenticate_user!, except: [:index, :show]
  before_action :correct_user, only: [:edit, :update, :destroy]

  # GET /employees or /employees.json
  def index
    if params[:sort] != "name"
      @employees = Employee.order(params[:sort])
    elsif params[:sort] == "annual_salary"
      @employees = Employee.all.sort_by{|player| player.annual_salary}
    else
      @employees = Employee.all
    end
  end

  def search_employees
    if @employee = Employee.all.find{|employee| employee.name.include?(params[:search])}
      redirect_to employee_path(@employee)
    end
  end

  # GET /employees/1 or /employees/1.json
  def show
    @employee = Employee.find(params[:id])
    
    gross_monthly_income = total_monthly_income_tax = total_net_monthly_income = 0

		gross_monthly_income = @employee.annual_salary

		#  salary bracket
		salary_bracket_1 = 0;
		salary_bracket_2 = 20000;
		salary_bracket_3 = 40000;
		salary_bracket_4 = 80000;
		salary_bracket_5 = 180000;

		#  tax rates of each bracket
		tax_rate_1 = 0;
		tax_rate_2 = 10;
		tax_rate_3 = 20;
		tax_rate_4 = 30;
		tax_rate_5 = 40;

		tax_paid_0 = tax_paid_1 = tax_paid_2 = tax_paid_3 = tax_paid_4 = tax_paid_5 = 0;

    #  Check gross salary which tax need to apply
		if gross_monthly_income > salary_bracket_5
			tax_paid_5 = (gross_monthly_income - salary_bracket_5) * tax_rate_5/100
			gross_monthly_income = salary_bracket_5
		end

		if gross_monthly_income > salary_bracket_4 && gross_monthly_income <= salary_bracket_5
			tax_paid_4 = (gross_monthly_income - salary_bracket_4) * tax_rate_4/100
			gross_monthly_income = salary_bracket_4
		end
		
		if gross_monthly_income > salary_bracket_3 && gross_monthly_income <= salary_bracket_4
			tax_paid_3 = (gross_monthly_income - salary_bracket_3) * tax_rate_3/100
			gross_monthly_income = salary_bracket_3
		end
		
		if gross_monthly_income > salary_bracket_2 && gross_monthly_income <= salary_bracket_3
			tax_paid_2 = (gross_monthly_income - salary_bracket_2) * tax_rate_2/100
			gross_monthly_income = salary_bracket_2
		end

		if gross_monthly_income < salary_bracket_2
			tax_paid_2 = (gross_monthly_income - salary_bracket_1) * tax_rate_2/100
			gross_monthly_income = salary_bracket_1
		end

		tax_paid_0 = gross_monthly_income * tax_rate_1/100

		#  total montly income tax need to paid
		@total_monthly_income_tax = tax_paid_0 + tax_paid_1 + tax_paid_2 + tax_paid_3 + tax_paid_4 + tax_paid_5
		#  total net monthly income
		@total_net_monthly_income = @employee.annual_salary - @total_monthly_income_tax

    # returnArr = Array.new
		# returnArr['Timestamp:'] 			= date("Y-m-d H:i:s");
		# returnArr['Monthly Payslip for:'] 	= @employee.name;
		# returnArr['Employee Name:'] 		= employee_name;
		# returnArr['Gross Monthly Income:'] = number_format(@employee.annual_salary, 2);
		# returnArr['Monthly Income Tax:'] 	= number_format(total_monthly_income_tax, 2);
		# returnArr['Net Monthly Income:'] 	= number_format(total_net_monthly_income, 2);
    # returnArr = Array.new
    # returnArr = [
    #   "Timestamp":  DateTime.strptime("2014-01-20","%Y-%m-%d"),
    #   "Employee Name": @employee.name,
    #   "Gross Monthly Income": @employee.annual_salary,
    #   "Net Monthly Income": @total_net_monthly_income
    # ]

    # @returnArr = returnArr
  end

  # GET /employees/new
  def new
    # @employee = Employee.new
    @employee = current_user.employees.build
  end

  # GET /employees/1/edit
  def edit
  end

  # POST /employees or /employees.json
  def create
    # @employee = Employee.new(employee_params)
    @employee = current_user.employees.build(employee_params)

    respond_to do |format|
      if @employee.save
        format.html { redirect_to employee_url(@employee), notice: "Employee was successfully created." }
        format.json { render :show, status: :created, location: @employee }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @employee.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /employees/1 or /employees/1.json
  def update
    respond_to do |format|
      if @employee.update(employee_params)
        format.html { redirect_to employee_url(@employee), notice: "Employee was successfully updated." }
        format.json { render :show, status: :ok, location: @employee }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @employee.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /employees/1 or /employees/1.json
  def destroy
    @employee.destroy

    respond_to do |format|
      format.html { redirect_to employees_url, notice: "Employee was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  def correct_user
    @employee = current_user.employees.find_by(id: params[:id])
    redirect_to employees_path, notice: "Not Authenticated to Edit This Employee" if @employee.nil? 
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_employee
      @employee = Employee.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def employee_params
      params.require(:employee).permit(:name, :annual_salary, :monthly_income_tax, :user_id)
    end
end
