const fetchEmployees = async (setData) => {
  const apiCall = (url) => {
    return fetch(url)
  }
  let employeeData = []
  try {
    const response = await apiCall('https://6164f6e709a29d0017c88ed9.mockapi.io/fetest/employees');
    employeeData = await response.json();
  }
  catch (error) {
    employeeData = null
  } finally {
    setData(employeeData)
  }

}

export { fetchEmployees }