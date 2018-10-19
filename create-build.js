var sys = require('sys')

var exec = require('child_process').exec;

function puts(error, stdout, stderr) { sys.puts(stdout) }

exec("pwd", puts)
exec("ls -la", puts);


const axios = require('axios')

const repository = encodeURIComponent(process.env.GITHUB_REPOSITORY)

var headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Travis-API-Version': '3',
  'Authorization': `token ${process.env.TRAVIS_TOKEN}` 
}

var body = {
  "request": {
    "message": "This should be the commit message",
    "branch": "master"
  }
}

axios.post(`https://api.travis-ci.com/repo/${repository}/requests`, body, { headers: headers })
.then((res) => {
  console.log(`statusCode: ${res.statusCode}`)
  console.log(res)
  process.exit()
})
.catch((error) => {
  console.error(error)
  process.exit(1)
})
