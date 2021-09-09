import React from 'react'
import styled from 'styled-components'
import Plant from '../src/components/Plant'
import Link from 'next/link'
import { usePlants } from '../src/hooks'
import Header from '../src/components/Header'

const Root = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
  border: 20px;
  padding-bottom: 100px;
`

const PlantsContainer = styled.div`
  justify-items: center;
  margin-top: 80px;
  display: grid;
  grid-gap: 80px;
  grid-template-columns: auto;

  @media only screen and (min-width: 1500px) {
    grid-template-columns: auto auto;
    justify-items: center;
    grid-gap: 80px;
  }
`

function Home() {
  const plants = usePlants()

  return (
    <Root>
      <Header />
      <PlantsContainer>
        {plants.map((plant, i) => (
          <Plant plant={plant} key={`Plant_${i}`} />
        ))}
      </PlantsContainer>
    </Root>
  )
}

export default Home
