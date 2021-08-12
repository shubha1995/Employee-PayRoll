function cancelHover() {
    document.getElementById("cancel").className = "cancelButtonOnHover";
  }
  function cancelHoverOut() {
    document.getElementById("cancel").className = "btn";
  }
  function submitHover() {
    document.getElementById("submitButton").className = "submitButtonOnHover";
  }
  function submitHoverOut() {
    document.getElementById("submitButton").className = "submitButton";
  }
  function resetHover() {
    document.getElementById("resetButton").className = "resetButtonOnHover";
  }
  function resetHoverOut() {
    document.getElementById("resetButton").className = "resetButton";
  }
  // Event listener to select salary
  const salary = document.querySelector('#salary');
  const output = document.querySelector('.salary-output');
  output.textContent = salary.value;
  salary.addEventListener('input', function () {
    output.textContent = salary.value;
  });
  // Save the data into a object
  var save = () => {
    try {
      createEmployeePayroll();
    } catch (e) {
      return;
    }
  };
  // Create the employee data object by getting their respective values
  var createEmployeePayroll = () => {
    let employeePayrollData = new EmployeePayrollData();
    try {
      employeePayrollData.name = getInputValueById("#name");
      employeePayrollData.profilePic = getSelectedValues("[name=profile]").pop();
      employeePayrollData.gender = getSelectedValues("[name=gender]").pop();
      employeePayrollData.department = getSelectedValues("[name=department]");
      employeePayrollData.salary = getInputValueById("#salary");
      employeePayrollData.note = getInputValueById("#notes");
      let date =
        getInputValueById("#day") +
        " " +
        getInputValueById("#month") +
        " " +
        getInputValueById("#year");
      employeePayrollData.startDate = new Date(Date.parse(date));
      alert(employeePayrollData.toString());
    } catch (e) {
      setTextValue(".text-error", e);
      throw e;
    }
    return employeePayrollData;
  };
  var getSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    let selectedItems = [];
    allItems.forEach((item) => {
      if (item.checked) {
        selectedItems.push(item.value);
      }
    });
    console.log(selectedItems);
    return selectedItems;
  };
  var getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
  };