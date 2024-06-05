import React from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Link } from '@nextui-org/react'

function Navigation() {
  return (
    <>
      <div className="w-full h-fit">
        <Navbar isBlurred={true} className="fixed bg-black/0 h-[80px]">
          <NavbarBrand justify="start">
            <p className="text-[#db1058] poppins-header text-poppins">
              Movie Manor
            </p>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-10" justify="center">
            <NavbarItem>
              <Link className="text-white" href="/">
                Home
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link className="text-white" href="/my-list">
                My-List
              </Link>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent className="hidden sm:flex gap-4" justify="end">
            <NavbarItem>
              <Button as={Link} color="primary" href="#" variant="flat">
                SignUp
              </Button>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
      </div>
    </>
  );
}

export default Navigation