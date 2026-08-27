const axios = require('axios')
const sleep = require('system-sleep')

const baseUrl = 'https://api.lens.dev/'
let newObject = {
  variables: {
    request: {
      handle: '',
    },
  },
  query:
    'query ($request: SingleProfileQueryRequest!) {\n  profile(request: $request) {\n    id\n    __typename\n  }\n}',
}

const config = {
  agent: 'false',
  method: 'POST',
  authority: 'api.lens.dev',
  path: '/',
  scheme: 'https',
  headers: {
    accept: '*/*',
    'accept-encoding': 'gzip, deflate, br',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
    'content-length': 170,
    'content-type': 'application/json',
    origin: 'https://claim.lens.xyz',
    referer: 'https://claim.lens.xyz/',
    'sec-ch-ua':
      '"Microsoft Edge";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': 'Windows',
    'sec-fetch-dest': 'document',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'cross-site',
    'user-agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 Edg/107.0.1418.52',
    'x-access-token':
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjB4MkQ1MDljZDFmYjQzMTI1MjM0RkFBMjZkNkJCMzg5ZTA5OTZEN0Q5MSIsInJvbGUiOiJub3JtYWwiLCJpYXQiOjE2NjkxMzc4MTEsImV4cCI6MTY2OTEzOTYxMX0.gLcxFiChy4yWegBu_NIfkdfbipyZi7JkuqNelfqV5Zg',
  },
}
const test = async (baseUrl, newObject, config) => {
  const res = await axios.post(baseUrl, newObject, config)
  // const handle = res.request.
  let handle = JSON.parse(res.config.data).variables.request.handle

  let data = res.data
  if (data.data.profile === null) {
    console.log('', handle)
  }
  return res
}

const main = async () => {
  for (let i = 11441; i <= 11444; i++) {
    let index = i.toString().padStart(5, '0')
    newObject.variables.request.handle = index + '.lens'
    sleep(100)
    // console.log('', newObject)
    setInterval(() => {
      test(baseUrl, newObject, config)
    })
  }
}

main()
