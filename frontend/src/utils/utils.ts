export const activeLandingHeaderMenu = () => {
  const menus: NodeListOf<Element> =
    document.querySelectorAll("#navMenu_____ a");
  const path: String = window.location.pathname;
  menus.forEach((menu: any) => {
    if (!menu.href.includes("#")) {
      if (path === menu.pathname) {
        menu.classList.add("text-primary");
        menu.parentElement.parentElement
          .getElementsByClassName("dropdown-toggle")[0]
          .classList.add("text-primary");
        // if (menu.pathname === "/price" || menu.pathname === "/app") {
        //   menu.classList.add("text-primary");
        // } else {
        //   menu.classList.add("text-primary");
        //   menu.parentElement.parentElement
        //     .getElementsByClassName("dropdown-toggle")[0]
        //     .classList.add("text-primary");
        // }
      }
    }
  });
};

export const copyText = () => {
  const value: string = "https://www.tendex.io/join/12345";
  navigator.clipboard.writeText(value);
  alert("Copied the text: " + value);
};

export const dashboardMenuActive = () => {
  const menus: NodeListOf<Element> =
    document.querySelectorAll("#d_menu ul li a");
  menus.forEach((menu: any) => {
    if (menu.pathname.includes(window.location.pathname)) {
      menu.classList.add("active");
    }
  });
};

export const settingMenuActive = (name?: string) => {
  const settingMenus = document.querySelectorAll("#settings_menus______ a");
  settingMenus.forEach((setting) => {
    if (setting.textContent == name) {
      setting.classList.add("active");
    }
  });
  document.querySelector("#settings__mainMenu")?.classList.add("active");
};
