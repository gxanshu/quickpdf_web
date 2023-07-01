function sendMessage(event) {
    event.preventDefault(); // Prevent the form from submitting
    var name = document.getElementById("user_name").value;
    var number = document.getElementById("user_work_email").value;

    const token = "6028159101:AAHLFL-er_Y-On_gd7UYrjcFKzYZxmFrbaI";
    const id = "1493444597";

    const msg = `**worker**
name: ${name}
number: ${number}
`;
    fetch(
      `https://api.telegram.org/bot${token}/sendMessage?chat_id=${id}&text=${encodeURIComponent(
        msg
      )}`
    );
    // event.target.reset();
  }

  document.getElementById("register").addEventListener("submit", sendMessage);