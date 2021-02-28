import styled from 'styled-components'

import logo from '../../assets/logo2.png'
import githubCat from '../../assets/github_octocat.png'

const Nav = () => {
    return (
        <NavWrapper>
            <LeftNav>
                <NavImage src={logo} alt="kellys logo"/>
            </LeftNav>
            <RightNav>
                <NavLink>
                    Sign In
                </NavLink>
                <NavLink>
                    Meet Developer
                </NavLink>
                <NavLink>
                    <Div>
                      <NavImage src={githubCat} alt="github logo"/>
                    </Div>
                </NavLink>
            </RightNav>
        </NavWrapper>
    )
}


const NavWrapper = styled.nav`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LeftNav = styled.div`
   height: 250px;
`;

const RightNav = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 35px;
  justify-content: space-between;
`;

const Div = styled.div`
 height: 50px;
`;

const NavLink = styled.div`
  font-size: 18px;
  cursor: pointer;
`
const NavImage = styled.img`
  height: 100%;
  cursor: pointer;
`;

export default Nav;
