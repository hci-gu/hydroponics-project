import styled from 'styled-components'
import { PageHeader, Button } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/router'

const HeaderRow = styled.div`
  background-color: white;
  padding-left: 10%;
  padding-right: 10%;
`

function Header() {
  const { pathname } = useRouter()

  return (
    <HeaderRow>
      {pathname === '/' ? (
        <PageHeader
          title="The hydroponics project"
          extra={[
            <Button key="1" type="primary">
              <Link href="/info">Om projektet</Link>
            </Button>,
          ]}
        ></PageHeader>
      ) : pathname === '/info' ? (
        <PageHeader
          ghost={false}
          onBack={() => window.history.back()}
          title="Om projektet"
        ></PageHeader>
      ) : (
        <PageHeader
          ghost={false}
          onBack={() => window.history.back()}
          title="Admin"
        ></PageHeader>
      )}
    </HeaderRow>
  )
}

export default Header
