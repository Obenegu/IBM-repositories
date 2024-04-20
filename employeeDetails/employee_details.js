const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
    //... More employee records can be added here
  ];

  function displayEmployees() {
    const allEmployess = employees.map(employee => {
        return `<p>${employee.id} - ${employee.name} - ${employee.department} - ${employee.salary}</p>`
    }).join("");

    document.getElementById('employeesDetails').innerHTML = allEmployess;
  }

  function calculateTotalSalaries() {
    const totalSalary = employees.reduce((total, employee) => {
        return total + employee.salary
    },0);
     alert(`Total Salaries: ${totalSalary}`);
  }

  function displayHREmployees() {
    const department = employees.filter(employee => {
        if(employee.department == 'HR') {
            return employee;
        }
    });

    const displayDepartment = department.map((employee, index) => {
        return `<p>${employee.id} - ${employee.name} - ${employee.department} - ${employee.salary}</p>`
    }).join("");

    document.getElementById('employeesDetails').innerHTML = displayDepartment;
  }

  function findEmployeeById(employeeID) {
    const foundEmployee = employees.find(employee => employee.id === employeeID);
    if(foundEmployee) {
        document.getElementById('employeesDetails').innerHTML = `<p>${foundEmployee.id} - ${foundEmployee.name} - ${foundEmployee.department} - ${foundEmployee.salary}</p>`
    } else {
        document.getElementById('employeesDetails').innerHTML = `<p>No employee has been found with this ID</p>`
    }
  }