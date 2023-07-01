function sendMessage(event) {
  event.preventDefault() // Prevent the form from submitting
  var name = document.getElementById('demo_f_name').value
  var number = document.getElementById('demo_email').value
  var paperName = document.getElementById('demo_job_title').value
  var type = document.getElementById('teamSize').value

  const token = '6028159101:AAHLFL-er_Y-On_gd7UYrjcFKzYZxmFrbaI'
  const id = '1493444597'

  const msg = `**client**
name: ${name}
number: ${number}
paperName: ${paperName}
type: ${type}
`

  fetch(
    `https://api.telegram.org/bot${token}/sendMessage?chat_id=${id}&text=${encodeURIComponent(msg)}`
  )
  // event.target.reset();
}

document.getElementById('contactUs').addEventListener('submit', sendMessage)
