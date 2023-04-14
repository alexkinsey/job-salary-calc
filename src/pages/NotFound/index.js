import React from 'react'
import { Title } from '../../components/Text/Title'
import { Text } from '../../components/Text/Text'
import { PageBody } from '../../common/styles/PageBody'
import { Link } from '../../components/Link'

export const NotFound = () => {
  return (
    <PageBody>
      <Text>Error code 404 - Page not found</Text>
      <Title>Oops... looks like that page doesn't exist</Title>
      <Text>Sorry, we couldn't find the page you were looking for.</Text>
      <Text>Try using the navigation bar above to find what you're looking for.</Text>
      <Text>Or click <Link href="/" inline>here</Link> to go back to the home page</Text>
    </PageBody>
  )
}