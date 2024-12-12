function exportToExcel() {
    // Collect form data
    const fname = document.getElementById("firstName").value;
    const lname = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const msg = document.getElementById("message").value;
    // Create Excel content
    const data = `
    <table>
       <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Message</th>
       </tr>
       <tr>
          <td>${fname}</td>
          <td>${lname}</td>
          <td>${email}</td>
          <td>${msg}</td>
       </tr>
    </table>
    `;
    // Create a Blob with Excel MIME type
    const blob = new Blob([data], { type: "application/vnd.ms-excel" });
    const url = URL.createObjectURL(blob);
    // Create a link to download the file
    const a = document.createElement("a");
    a.href = url;
    a.download = "form_data.xls";
    a.click();
    // Show success message
    const successMessage = document.getElementById("success-message");
    successMessage.textContent = "Form submitted successfully! The file has been downloaded.";
    successMessage.style.display = "block";
    // Cleanup
    URL.revokeObjectURL(url);
    }