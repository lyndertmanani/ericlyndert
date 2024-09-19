// data.ts
export const navLinks = [
    { path: "/", label: "Home" },
    { path: "/tickets", label: "Tickets" },
    { path: "/about", label: "Discover" },
    { path: "/Brands", label: "Brands" },
    { path: "/contact", label: "Who we are" },
  ];
  
  export const navButton = {
    loggedOut: {
      label: "Login",
      tooltip: "Login / Register",
      action: "login", // Or any other identifier you need for your logic
    },
  };
  
  export const userDropdownItems = [
      {
          key: "profile",
          label: "Signed in as",
          email: "zoey@example.com"
      },
      {
          key: "history",
          label: "history",
          path: "/history"
      },
      {
          key: "team_settings",
          label: "My Tickets",
          path: "/mytickets",
      },
      {
          key: "logout",
          label: "Log Out",
          color: "danger"
      },
  ];
  