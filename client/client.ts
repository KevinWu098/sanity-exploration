// client.ts
import {createClient} from '@sanity/client'

export default createClient({
  projectId: 'r7hg8752',
  dataset: 'production',
  useCdn: true, // `false` if you want to ensure fresh data
})
