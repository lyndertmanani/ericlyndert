import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    
    NavbarMenuItem,
    NavbarMenuToggle,
     
  } from "@nextui-org/react";
  import { useState } from "react";
 
  import { NavLink } from "react-router-dom";
  import Logo from "/icons/ericlyndert-new-webx.png";
  import { navLinks, } from "./data";
  
  
  
  export default function MainNav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
 
    return (
      <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="full" className="lg:px-10 bg-white">
        {/* <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-600 to-transparent h-px" /> */}
        <NavbarContent>
         
          <NavbarBrand className="px-4">
            <img src={Logo} className="lg:h-12 h-6 rounded-none" alt="Main-logo" />
          </NavbarBrand>
        </NavbarContent>
  
        <NavbarContent className="hidden sm:flex font-normal pl-92 text-black gap-4" justify="end">
          {navLinks.map((link, index) => (
            <NavbarItem key={index}>
              <NavLink className="hover:text-[#545454] duration-700" to={link.path}>
                {link.label}
              </NavLink>
            </NavbarItem>
          ))}
        </NavbarContent>
     
        <NavbarContent className="gap-12" justify="end">
          
            <NavbarItem>
            <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden text-black"
          />
            </NavbarItem>
         
        </NavbarContent>
  
        <NavbarMenu className="bg-black bg-opacity-100 text-slate-600 ">
          {navLinks.map((link, index) => (
            <NavbarMenuItem key={index}>
              <NavLink className="hover:text-[#545454] duration-700 " to={link.path}>
                {link.label}
              </NavLink>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
        {/* CartList Modal */}
       </Navbar>
    );
  }
  