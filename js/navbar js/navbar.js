// varibles for search btns and conatier
const searchConatiner = document.querySelector(".app-navbar-left"),
  searchBtn = document.querySelector("#search-btn"),
  closeSearchBtn = document.querySelector(".search-box-close-btn"),
  // variables for dropdown btns
  dropdownBtns = document.querySelectorAll(".drop-down-btn"),
  // get active class to tab buttons
  tabButtons = document.querySelectorAll(".tab-box button"),
  // county Box Elems
  countyBoxs = document.querySelectorAll(".country-box"),
  // varible for navbar dots
  navbarDotsBtn = document.querySelector(".navbar-dots-box"),
  // varible for list menu item
  listItemsDropDownBtns = document.querySelectorAll(".list-item-drop-down-btn"),
  // varibles for open and close status btn
  statusBtn = document.querySelector(".server-status-icon"),
  closeStatusSideBarBtn = document.querySelector(".status-side-bar-close-btn");

// variable for navbar apex opttions and make instans
let optionsNavbarChart = {
  chart: {
    type: "area",
    zoom: {
      enabled: false,
    },
    height: 105,
  },
  colors: ["#ffa500"],
  tooltip: {
    enabled: false,
  },
  dataLabels: {
    enabled: false,
  },
  series: [
    {
      data: [23, 55, 33, 15, 55, 19, 54, 23, 42, 13],
    },
  ],
  yaxis: {
    labels: {
      show: false,
    },
  },

  grid: {
    show: false,
  },

  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },

    tooltip: {
      enabled: false,
    },

    crosshairs: {
      show: false,
    },

    axisTicks: {
      show: false,
    },
  },
};
let navbarChart = new ApexCharts(
  document.querySelector("#chart"),
  optionsNavbarChart
);

// variable for side bar apex opttions and make instans
let optionsStatusSideChart = {
  chart: {
    type: "area",
    zoom: {
      enabled: false,
    },
    height: 105,
  },
  colors: ["#3ac47d"],
  fill: {
    colors: ["transparent"],
    opacity: 1,
    type: "",
  },
  tooltip: {
    enabled: false,
  },
  dataLabels: {
    enabled: false,
  },
  series: [
    {
      data: [
        40, 300, 10, 400, 200, 5, 180, 320, 90, 90, 30, 60, 200, 90, 300, 90,
        150, 350,
      ],
    },
  ],
  yaxis: {
    labels: {
      show: false,
    },
  },

  grid: {
    show: false,
  },

  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },

    tooltip: {
      enabled: false,
    },

    crosshairs: {
      show: false,
    },

    axisTicks: {
      show: false,
    },
  },
};
let statusSideBarChart = new ApexCharts(
  document.querySelector("#status-side-bar-chart"),
  optionsStatusSideChart
);

// functions for show hidden search box
const showSearchBox = () => {
  const openListDrop = document.querySelector(".list-item-drop-down-menu.show");
  const listMenu = document.querySelector(".navbar-menu-parent");
  if (window.innerWidth > 992) {
    searchConatiner.classList.add("show");
    listMenu.style.display = "none";
  } else {
    searchConatiner.classList.add("show");
  }

  if (openListDrop) openListDrop.classList.remove("show");
};

// functions for hide search box
const hideSearchBox = () => {
  const listMenu = document.querySelector(".navbar-menu-parent");
  if (window.innerWidth > 992) {
    searchConatiner.classList.remove("show");

    setTimeout(() => {
      listMenu.style.display = "block";
    }, 300);
  } else {
    searchConatiner.classList.remove("show");
  }
};

// function for show hiddien drop down
const showDropdown = (e) => {
  const openListDrop = document.querySelector(".list-item-drop-down-menu.show");
  const dropDownBox = e.target.parentNode.nextElementSibling;
  const openedDropDown = document.querySelector(".drop-down-box.show");

  // if open dorp is Available close it and open the new drop
  if (openedDropDown) {
    openedDropDown.classList.remove("show");
    dropDownBox.classList.add("show");
  } else {
    dropDownBox.classList.add("show");
  }

  // if the opened drop equal to selected drop it close it
  if (dropDownBox === openedDropDown) {
    dropDownBox.classList.remove("show");
  }

  openListDrop ? openListDrop.classList.remove("show") : "";
};

// change the active tab
const changeActiveTab = (targetBtn) => {
  const allTabs = document.querySelectorAll(".tabs");

  for (let tab of allTabs) {
    tab.style.display = "none";
    tab.classList.remove("animation");
  }

  const tabBtns = [...tabButtons];

  const findBtnIndex = tabBtns.findIndex((item) => {
    return item === targetBtn;
  });

  allTabs[findBtnIndex].style.display = "block";
  allTabs[findBtnIndex].classList.add("animation");
};

// function for give active class to target button
const activeBtn = (e) => {
  let targetElem = e.target;

  if (e.target.nodeName === "SPAN") targetElem = e.target.parentNode;

  for (let btn of tabButtons) btn.className = "type-1 hover";

  targetElem.className = "type-1";

  changeActiveTab(targetElem);
};

// when the page loded
const lodadePage = () => {
  tabButtons[1].click();
};

// function for change image of country button
const changeCountyMainBtn = (target) => {
  const flagContry = target.querySelector(".country-flag");
  const mainBtnContry = document.querySelector(".drop-down-btn.country span");

  const flagContryClassName = flagContry.className.split(" ")[1];

  mainBtnContry.style.backgroundImage = `url('../../images/${flagContryClassName}.svg')`;
};

// function for give show class to clicked item
const changeActiveClass = (e) => {
  let targetElement = null;

  for (let box of countyBoxs) box.classList.remove("active");

  if (e.target.nodeName === "SPAN") {
    targetElement = e.target.parentNode;
  } else {
    targetElement = e.target;
  }

  targetElement.classList.add("active");

  changeCountyMainBtn(targetElement);
};

// function for showing app content box
const toggleNavbarApp = () => {
  const appNavElem = document.querySelector(".app-navbar-content");
  const openDropdown = document.querySelector(".drop-down-box.show");

  if (openDropdown) openDropdown.classList.remove("show");

  appNavElem.classList.toggle("show");
};

// function whene page resize is resized
const pageResize = () => {
  const openDropdown = document.querySelector(".drop-down-box.show");
  const appNavElem = document.querySelector(".app-navbar-content");
  const listMenu = document.querySelector(".navbar-menu-parent");
  if (window.innerWidth > 992) {
    appNavElem.style.transition = "unset";
    listMenu.style.display = "block";
    searchConatiner.classList.remove("show");
  } else {
    appNavElem.style.transition = "all 0.4s ease";
    listMenu.style.display = "none";
    openDropdown ? openDropdown.classList.remove("show") : "";
  }
};

// function for showing hidden list drop down
const showListDropDown = (e) => {
  const openDropBoxRight = document.querySelector(".drop-down-box.show");
  const openListDrop = document.querySelector(".list-item-drop-down-menu.show");
  let dropDownBox = null;

  if (e.target.nodeName === "I" || e.target.nodeName === "SPAN") {
    dropDownBox = e.target.parentNode.querySelector(
      ".list-item-drop-down-menu"
    );
  } else if (e.target.nodeName === "LI") {
    dropDownBox = e.target.querySelector(".list-item-drop-down-menu");
  } else {
    return;
  }

  // if open dorp is Available close it and open the new drop
  if (openListDrop) {
    openListDrop.classList.remove("show");
    dropDownBox.classList.add("show");
  } else {
    dropDownBox.classList.add("show");
  }

  // if the opened drop equal to selected drop it close it
  if (dropDownBox === openListDrop) {
    dropDownBox.classList.remove("show");
  }

  openDropBoxRight ? openDropBoxRight.classList.remove("show") : "";
};

// fucntion for whene user clicking in window
const clickingOnAllWindow = (e) => {
  if (e.target.classList.contains("status-side-bar-overlay")) {
    e.target.parentNode.classList.remove("show");
    document.body.style.overflow = "visible";
  }
};

// fucntion for show status side bar
const showStatusSideBar = () => {
  const statusContainer = document.querySelector(".status-side-bar");

  document.body.style.overflow = "hidden";

  statusContainer.classList.add("show");
};

// fucntion for clsoe status side bar
const closeStatusSideBar = () => {
  const statusContainer = document.querySelector(".status-side-bar");

  document.body.style.overflow = "visible";

  statusContainer.classList.remove("show");
};

// event for show and hide search box
searchBtn.addEventListener("click", showSearchBox);
closeSearchBtn.addEventListener("click", hideSearchBox);

// event for show hiddien drop down
dropdownBtns.forEach((dropdownBtn) => {
  dropdownBtn.addEventListener("click", showDropdown);
});

//change the active tab and button
tabButtons.forEach((tabButton) => {
  tabButton.addEventListener("click", activeBtn);
});

// when the page loaded js will click the first tab btn
window.addEventListener("load", lodadePage);
// window.addEventListener("click", closeDropDownByClickInWidnow);

// using swal 2 and it's confing
Swal.fire({
  title: "All caught up!",
  text: "There are no system errors!",
  icon: "success",
  target: document.querySelector(".tab-error"),
  backdrop: false,
  width: "100%",
  showConfirmButton: false,
});

// event for give show class to clicked item
countyBoxs.forEach((countyBox) => {
  countyBox.addEventListener("click", changeActiveClass);
});

// active navbar apex chart js
navbarChart.render();

// event for showing app content box
navbarDotsBtn.addEventListener("click", toggleNavbarApp);

// event whene page resize is resized
window.addEventListener("resize", pageResize);

// evebt for shwo drop down lits item
listItemsDropDownBtns.forEach((listItemsDropDownBtn) => {
  listItemsDropDownBtn.addEventListener("click", showListDropDown);
});

// status char for side bar
statusSideBarChart.render();

// click event for whene user click in widow
window.addEventListener("click", clickingOnAllWindow);

// click event for show status side bar
statusBtn.addEventListener("click", showStatusSideBar);

// click event for clsoe status side bar
closeStatusSideBarBtn.addEventListener("click", closeStatusSideBar);
