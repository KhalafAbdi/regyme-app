import axios from 'axios'
import { poster } from '../util/api'

export const useSignedUrl = () => {
  return async (payload) => {
    const mutation = {
      query:
        'mutation CreateS3Sign($filename: String!, $filetype: String!) { signS3(filename: $filename, filetype: $filetype) { signeRequest url }}',
      variables: payload,
    }

    const { data } = await poster(mutation)
    return data.signS3
  }
}

export const useUploadtoS3 = async (file, signedRequest) => {
  const options = {
    'content-Type': file.type,
    'x-amz-acl': 'public-read',
  }

  await axios.put(signedRequest, file, options)
}
