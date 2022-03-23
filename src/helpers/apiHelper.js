const axios = require('axios')

const apiHelper = {
  attachRoom (roomId) {
    axios.get('https://api.switchats.com/room?roomId=' + roomId).then(room => {
      console.log('room attached')
    })
  },
  leaveRoom (roomId) {
    axios.get('https://api.switchats.com/leave-room?roomId=' + roomId).then(room => {
      console.log('leave room')
    })
  },
  message (uid, msg, roomId) {
    axios.get('https://api.switchats.com/message?uid=' + uid + '&m=' + encodeURI(msg) + '&roomId=' + roomId).then(msg_ => {
      console.log('message sent')
    })
  },
  report (roomId, reportType, reportText) {
    axios.get('https://api.switchats.com/report?type=' + reportType + '&text=' + reportText + '&' + 'roomId=' + roomId).then(msg_ => {
      console.log('user reported')
    })
  }
}

export default apiHelper
