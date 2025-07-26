const students = [
  {
    id: "CERT001",
    name: "Ali Khan",
    course: "NEBOSH IGC",
    date: "2025-06-15",
    certificateNumber: "CERT001",
    certificateImage: "C:\Users\user\Desktop\certificate-verification-site/cert1.jpg"
  }
];

function verifyCertificate() {
  const input = document.getElementById("searchInput").value.trim();
  const resultSection = document.getElementById("result");
  const errorSection = document.getElementById("error");
  const dataContainer = document.getElementById("certificateData");
  const imageContainer = document.getElementById("certificateImage");

  const matchedStudent = students.find(
    (s) => s.id === input || s.certificateNumber === input
  );

  if (matchedStudent) {
    dataContainer.innerHTML = `
      <p><strong>Name:</strong> ${matchedStudent.name}</p>
      <p><strong>Course:</strong> ${matchedStudent.course}</p>
      <p><strong>Issue Date:</strong> ${matchedStudent.date}</p>
      <p><strong>Certificate Number:</strong> ${matchedStudent.certificateNumber}</p>
    `;

    imageContainer.src = matchedStudent.certificateImage;
    imageContainer.style.display = "block";

    resultSection.classList.remove("hidden");
    errorSection.classList.add("hidden");
  } else {
    resultSection.classList.add("hidden");
    errorSection.classList.remove("hidden");
  }
}
