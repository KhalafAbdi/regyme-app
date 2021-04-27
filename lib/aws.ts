import aws from 'aws-sdk'
import dayjs from 'dayjs'

export const getS3SignedUrl = async (filename, filetype, userID) => {
  const s3 = new aws.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    signatureVersion: 'v4',
    region: 'eu-central-1',
  })

  const cleanFileName = `${userID}/${formatFileName(filename)}`

  const s3Params = {
    Bucket: 'regyme',
    Key: cleanFileName,
    Expires: 60,
    ContentType: filetype,
    ACL: 'public-read',
  }

  const signeRequest = await s3.getSignedUrl('putObject', s3Params)
  const url = `https://regyme.s3.eu-central-1.amazonaws.com/${cleanFileName}`

  return { signeRequest, url }
}

const formatFileName = (filename) => {
  const date = dayjs().format('DDMMYYYY')
  const randomString = Math.random().toString(36).substr(2, 7)
  const cleanFileName = filename.toLowerCase().replace(/[^a-z0-9]/g, '-')

  const newFileName = `${date}-${randomString}-${cleanFileName}`

  return newFileName.substring(0, 60)
}
