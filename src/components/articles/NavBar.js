import React,{Component} from 'react'
import {
    Collapse,
    Navbar, 
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
//     NavLink,
    Container
} from 'reactstrap'
import{Link, withRouter, NavLink} from 'react-router-dom'


class NavBars extends Component {
     constructor(props) {
     console.log(props)
     super(props)
     this.state = {
          isOpen :  false
     }
     }

toggle = () => {
    this.setState({
         isOpen : !this.state.isOpen
    })
}
     render() { 
          return ( 
                   <Navbar color='dark' dark expand='sm' className='mb'>
                         <Container>
                              
                      <NavbarBrand>
                          <NavLink to='/'style={colorStyle} >
                          Article Project
                            </NavLink>
                          </NavbarBrand>
                           <NavbarToggler onClick={this.toggle} />
                           <Collapse isOpen={this.state.isOpen} navbar>
                              <Nav navbar className='ml-auto'>
                                   <NavItem className='mr-5'>
                                        <NavLink to="/articlelist" style={colorStyle}>Articles</NavLink>
                                   </NavItem>
                                   
                                   <NavItem className='mr-5'>
                                        <NavLink to="/about" style={colorStyle}>About</NavLink>
                                </NavItem>

                                <NavItem className='mr-5'>
                                        <NavLink to="/newarticle" style={colorStyle}>Create</NavLink>
                                </NavItem>
                                </Nav>
                           </Collapse>
                      </Container>
                   </Navbar>
             
           );
     }
}
  const   colorStyle = {
       color: '#fff',
       textDecoration: 'none'
}
 
export default withRouter(NavBars)