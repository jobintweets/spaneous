  if (localStorage.getItem("employees") == null) {
      localStorage.setItem("employees", JSON.stringify([]));
  }

  function getDataFromLocalStorage() {
      var employee = JSON.parse(localStorage.getItem("employees"));
      return employee;
  }

  function updateLocalStorageData(updateEmployee) {
      localStorage.setItem("employees", JSON.stringify(updateEmployee));
  }

  function addEmployee(employee) {
      var employees = getDataFromLocalStorage();
      employees.push(employee);
      updateLocalStorageData(employees);
      return getDataFromLocalStorage();
  }
