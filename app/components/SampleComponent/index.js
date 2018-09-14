import React from 'react'
import { pure } from 'recompose'

import styled from 'styled-components'

const SampleContainer = styled.div`
  display: flex;
  justify-content: center;
`

const SampleItem = styled.div`
  color: #aaf;
  padding: 16px;
`

const SampleComponent = () => (
  <SampleContainer>
    <SampleItem>index</SampleItem>
    <SampleItem>bar</SampleItem>
  </SampleContainer>
)

export default pure(SampleComponent)
