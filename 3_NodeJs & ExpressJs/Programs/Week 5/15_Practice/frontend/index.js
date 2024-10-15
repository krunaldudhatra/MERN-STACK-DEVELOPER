let empList = [];
const htmlList = document.getElementById("objectList");

const renderData = async () => {
  try {
    // Fetch employee data from the backend API
    const res = await fetch("http://localhost:4000/api/v1/emp");

    // Check if the response is ok
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    // Parse the JSON data
    empList = await res.json();

    // Clear existing list to avoid duplicates
    htmlList.innerHTML = '';

    // Loop through the list and create list items
    empList.forEach((obj) => {
      const listItem = document.createElement("li");
      listItem.innerText = `ID: ${obj.emp_id}, Name: ${obj.name}, Company: ${obj.company}`;
      htmlList.appendChild(listItem);
    });

  } catch (error) {
    // Log any errors and display a user-friendly message
    console.error("Error fetching employee data:", error);
    htmlList.innerHTML = '<li>Error loading employee data</li>';
  }
};

// Call the function to render employee data on page load
renderData();
