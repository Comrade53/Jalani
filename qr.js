document.getElementById("btn").addEventListener("click", (event) => {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let n1 = "Name : ";
  let br = document.getElementById("br");
  let n2 = "Number : ";

  if (name && phone) {
    document.getElementById(
      "img"
    ).src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${n1}${name} ${n2}${phone}`;
    setTimeout(() => {
      document
        .getElementById("downloadBtn")
        .setAttribute("style", "display: block;");
    }, 2000);
  } else {
    alert("Please enter both name and phone number.");
  }
});

//download button script
document.getElementById("downloadBtn").addEventListener("click", () => {
  let hrf = document.getElementById("img").getAttribute("src");
  document.getElementById("downloadBtn").href = hrf;
});
