import React from 'react'
import {
  LiveProvider,
  LivePreview,
  LiveError
} from 'react-live'
import { ScopeConsumer } from 'react-scope-provider'

const transformCode = str => `<React.Fragment>${str}</React.Fragment>`

export default ({
  code,
  scope
}) => (
  <ScopeConsumer defaultScope={scope}>
    {scope => (
      <LiveProvider
        code={code}
        scope={scope}
        mountStylesheet={false}
        transformCode={transformCode}>
        <LivePreview />
        <LiveError />
      </LiveProvider>
    )}
  </ScopeConsumer>
)
