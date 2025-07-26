// Simulated database
const certificates = [
  {
    id: "STD123",
    name: "Ali Khan",
    course: "NEBOSH IGC",
    date: "2025-06-15",
    certNumber: "CERT001",
    certificateImage: "https://via.placeholder.com/400x300.png?text=Certificate+Ali"
  },
  {
    id: "STD456",
    name: "Sara Ahmed",
    course: "IOSH Managing Safely",
    date: "2025-07-01",
    certNumber: "CERT002",
    certificateImage: "https://via.placeholder.com/400x300.png?text=Certificate+Sara"
  }
];

function verifyCertificate() {
  const input = document.getElementById("searchInput").value.trim();
  const resultDiv = document.getElementById("certificateData");
  const resultSection = document.getElementById("result");
  const errorSection = document.getElementById("error");

  const cert = certificates.find(c =>
    c.id.toLowerCase() === input.toLowerCase() ||
    c.certNumber.toLowerCase() === input.toLowerCase()
  );

  if (cert) {
    errorSection.classList.add("hidden");
    resultSection.classList.remove("hidden");

    resultDiv.innerHTML = `
      <h3>Certificate Found</h3>
      <p><strong>Name:</strong> ${cert.name}</p>
      <p><strong>Course:</strong> ${cert.course}</p>
      <p><strong>Issue Date:</strong> ${cert.date}</p>
      <p><strong>Certificate Number:</strong> ${cert.certNumber}</p>
      <img src="${cert.certificateImage}" alt="Certificate Image" width="400"/>
    `;
  } else {
    resultSection.classList.add("hidden");
    errorSection.classList.remove("hidden");
  }
}

// Dark/Light Mode Toggle
document.getElementById("toggleMode").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
