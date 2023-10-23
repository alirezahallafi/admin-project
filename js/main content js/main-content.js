const sidebarDropDownBtns = document.querySelectorAll(
    ".side-bar-drop-down-btn"
  ),
  openSidebarBtn = document.querySelector(".sidebar-open-btn"),
  sidebarBox = document.querySelector(".main-side-bar"),
  chartCardBoxes = document.querySelectorAll(".chart"),
  inputBox = document.querySelector("#search"),
  allFirstTdElems = document.querySelectorAll("table tr td.user-name"),
  tableBody = document.querySelector("table tbody");

let prevTablebody = tableBody.innerHTML;

let sidebarFlag = false;

// technical chart options array
const optionArray = [
  {
    chart: {
      type: "area",
      zoom: {
        enabled: false,
      },
      height: 137,
      animations: {
        speed: 350,
      },
    },
    colors: ["#3ac47d"],
    fill: {
      colors: ["#3ac47d"],
      opacity: 0.2,
      type: "gradient",
    },
    tooltip: {
      enabled: true,
      x: {
        show: false,
      },
      style: {
        fontSize: "14px",
        fontFamily: undefined,
      },
      marker: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    series: [
      {
        name: "",
        data: [
          27, 19, 92, 35, 41, 65, 47, 24, 37, 61, 53, 27, 45, 54, 39, 51, 46,
          56, 38, 43, 54, 62, 31, 35,
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
        show: true,

        stroke: {
          color: "#ccc",
          width: 1,
          dashArray: 0,
        },
      },

      axisTicks: {
        show: false,
      },
    },
  },
  {
    chart: {
      type: "area",
      zoom: {
        enabled: false,
      },
      height: 137,
      animations: {
        speed: 350,
      },
    },

    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
    },

    colors: ["#2955c8"],
    fill: {
      colors: ["#2955c8"],
      opacity: 0.2,
      type: "",
    },
    tooltip: {
      enabled: true,
      x: {
        show: false,
      },
      style: {
        fontSize: "14px",
        fontFamily: undefined,
      },
      marker: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    series: [
      {
        name: "",
        data: [
          37, 46, 43, 41, 39, 47, 24, 45, 35, 53, 56, 31, 19, 54, 62, 51, 54,
          38, 35, 65, 27, 27, 61, 93,
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
        show: true,

        stroke: {
          color: "#ccc",
          width: 1,
          dashArray: 0,
        },
      },

      axisTicks: {
        show: false,
      },
    },
  },
  {
    chart: {
      type: "area",
      zoom: {
        enabled: false,
      },
      height: 137,
      animations: {
        speed: 350,
      },
    },

    colors: ["#f7b924"],
    fill: {
      colors: ["#f7b924"],
      opacity: 0.2,
      type: "",
    },
    tooltip: {
      enabled: true,
      x: {
        show: false,
      },
      style: {
        fontSize: "14px",
        fontFamily: undefined,
      },
      marker: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    series: [
      {
        name: "",
        data: [
          35, 41, 45, 54, 27, 51, 46, 53, 37, 19, 38, 93, 47, 65, 27, 35, 54,
          61, 62, 24, 43, 39, 31, 56,
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
        show: true,

        stroke: {
          color: "#ccc",
          width: 1,
          dashArray: 0,
        },
      },

      axisTicks: {
        show: false,
      },
    },
  },
];

// chart for first slider
let chart_1 = new ApexCharts(
  document.querySelector(".techincal-chart-1"),
  optionArray[0]
);

// charts for rows
let chartCardBox_1 = new ApexCharts(
  document.querySelector(".chart-1"),
  optionArray[0]
);

let chartCardBox_2 = new ApexCharts(
  document.querySelector(".chart-2"),
  optionArray[1]
);

let chartCardBox_3 = new ApexCharts(
  document.querySelector(".chart-3"),
  optionArray[2]
);
let chartCardBox_4 = new ApexCharts(
  document.querySelector(".chart-4"),
  optionArray[0]
);

// let optionsTechnical_1 = {
//   chart: {
//     type: "area",
//     zoom: {
//       enabled: false,
//     },
//     height: 137,
//   },
//   colors: ["#3ac47d"],
//   fill: {
//     colors: ["#3ac47d"],
//     opacity: 0.2,
//     type: "gradient",
//   },
//   tooltip: {
//     enabled: true,
//     x: {
//       show: false,
//     },
//     style: {
//       fontSize: "14px",
//       fontFamily: undefined,
//     },
//     marker: {
//       show: false,
//     },
//   },
//   dataLabels: {
//     enabled: false,
//   },
//   series: [
//     {
//       name: "",
//       data: [
//         27, 19, 92, 35, 41, 65, 47, 24, 37, 61, 53, 27, 45, 54, 39, 51, 46, 56,
//         38, 43, 54, 62, 31, 35,
//       ],
//     },
//   ],
//   yaxis: {
//     labels: {
//       show: false,
//     },
//   },

//   grid: {
//     show: false,
//   },

//   xaxis: {
//     labels: {
//       show: false,
//     },
//     axisBorder: {
//       show: false,
//     },

//     tooltip: {
//       enabled: false,
//     },

//     crosshairs: {
//       show: true,

//       stroke: {
//         color: "#ccc",
//         width: 1,
//         dashArray: 0,
//       },
//     },

//     axisTicks: {
//       show: false,
//     },
//   },
// };
// let optionsTechnical_2 = {
//   chart: {
//     type: "area",
//     zoom: {
//       enabled: false,
//     },
//     height: 137,
//   },

//   stroke: {
//     show: true,
//     curve: "smooth",
//     lineCap: "butt",
//   },

//   colors: ["#2955c8"],
//   fill: {
//     colors: ["#2955c8"],
//     opacity: 0.2,
//     type: "",
//   },
//   tooltip: {
//     enabled: true,
//     x: {
//       show: false,
//     },
//     style: {
//       fontSize: "14px",
//       fontFamily: undefined,
//     },
//     marker: {
//       show: false,
//     },
//   },
//   dataLabels: {
//     enabled: false,
//   },
//   series: [
//     {
//       name: "",
//       data: [
//         37, 46, 43, 41, 39, 47, 24, 45, 35, 53, 56, 31, 19, 54, 62, 51, 54, 38,
//         35, 65, 27, 27, 61, 93,
//       ],
//     },
//   ],
//   yaxis: {
//     labels: {
//       show: false,
//     },
//   },

//   grid: {
//     show: false,
//   },

//   xaxis: {
//     labels: {
//       show: false,
//     },
//     axisBorder: {
//       show: false,
//     },

//     tooltip: {
//       enabled: false,
//     },

//     crosshairs: {
//       show: true,

//       stroke: {
//         color: "#ccc",
//         width: 1,
//         dashArray: 0,
//       },
//     },

//     axisTicks: {
//       show: false,
//     },
//   },
// };
// let optionsTechnical_3 = {
//   chart: {
//     type: "area",
//     zoom: {
//       enabled: false,
//     },
//     height: 137,
//   },

//   colors: ["#f7b924"],
//   fill: {
//     colors: ["#f7b924"],
//     opacity: 0.2,
//     type: "",
//   },
//   tooltip: {
//     enabled: true,
//     x: {
//       show: false,
//     },
//     style: {
//       fontSize: "14px",
//       fontFamily: undefined,
//     },
//     marker: {
//       show: false,
//     },
//   },
//   dataLabels: {
//     enabled: false,
//   },
//   series: [
//     {
//       name: "",
//       data: [
//         37, 46, 43, 41, 39, 47, 24, 45, 35, 53, 56, 31, 19, 54, 62, 51, 54, 38,
//         35, 65, 27, 27, 61, 93,
//       ],
//     },
//   ],
//   yaxis: {
//     labels: {
//       show: false,
//     },
//   },

//   grid: {
//     show: false,
//   },

//   xaxis: {
//     labels: {
//       show: false,
//     },
//     axisBorder: {
//       show: false,
//     },

//     tooltip: {
//       enabled: false,
//     },

//     crosshairs: {
//       show: true,

//       stroke: {
//         color: "#ccc",
//         width: 1,
//         dashArray: 0,
//       },
//     },

//     axisTicks: {
//       show: false,
//     },
//   },
// };
// let optionsTechnical_3 = {
//   chart: {
//     type: "area",
//     zoom: {
//       enabled: false,
//     },
//     height: 137,
//   },
//   colors: ["#3ac47d"],
//   fill: {
//     colors: ["#3ac47d"],
//     opacity: 0.4,
//     type: "",
//   },
//   tooltip: {
//     enabled: true,
//     x: {
//       show: false,
//     },
//     style: {
//       fontSize: "14px",
//       fontFamily: undefined,
//     },
//     marker: {
//       show: false,
//     },
//   },
//   dataLabels: {
//     enabled: false,
//   },
//   series: [
//     {
//       name: "",
//       data: [
//         27, 19, 92, 35, 41, 65, 47, 24, 37, 61, 53, 27, 45, 54, 39, 51, 46, 56,
//         38, 43, 54, 62, 31, 35,
//       ],
//     },
//   ],
//   yaxis: {
//     labels: {
//       show: false,
//     },
//   },

//   grid: {
//     show: false,
//   },

//   xaxis: {
//     labels: {
//       show: false,
//     },
//     axisBorder: {
//       show: false,
//     },

//     tooltip: {
//       enabled: false,
//     },

//     crosshairs: {
//       show: true,

//       stroke: {
//         color: "#ccc",
//         width: 1,
//         dashArray: 0,
//       },
//     },

//     axisTicks: {
//       show: false,
//     },
//   },
// };

// click event handlaer for when user click on the sidebar drop down btns
const showSidebarDropDown = (e) => {
  let targetElem =
    e.target.nodeName === "SPAN" || e.target.nodeName === "I"
      ? e.target.parentNode
      : e.target;

  const dropDownBox = targetElem.nextElementSibling;
  const activedBtn = document.querySelector(".side-bar-drop-down-btn.active");
  const openedDropDown = document.querySelector(
    ".side-bar-menu-item-drop-down.show"
  );

  if (dropDownBox.style.maxHeight) {
    dropDownBox.classList.remove("show");
    dropDownBox.style.maxHeight = null;
    targetElem.classList.remove("active");
  } else {
    dropDownBox.classList.add("show");
    targetElem.classList.add("active");
    dropDownBox.style.maxHeight = dropDownBox.scrollHeight + "px";
  }

  if (activedBtn && openedDropDown) {
    activedBtn.classList.remove("active");
    openedDropDown.classList.remove("show");
    openedDropDown.style.maxHeight = null;
  }
};

// open and colse sidebar fucntion
const opensideBarFunc = (e) => {
  const sidebarBox = document.querySelector(".main-side-bar");

  sidebarFlag = !sidebarFlag;

  e.target.className = sidebarFlag
    ? "ri ri-close-line sidebar-open-btn"
    : "ri ri-menu-fill sidebar-open-btn";

  sidebarBox.classList.toggle("show");
};

// fuction to  hide sidebar by mouse leave
const hideSidebar = () => {
  const activedBtn = document.querySelector(".side-bar-drop-down-btn.active");
  const openedDropDown = document.querySelector(
    ".side-bar-menu-item-drop-down.show"
  );

  if (openedDropDown && activedBtn) {
    console.log("delete");
    activedBtn.classList.remove("active");
    openedDropDown.classList.remove("show");
    openedDropDown.style.maxHeight = null;
  }
};

// fucntion to resize the web page
const resizePageFucn = () => {
  if (window.innerWidth > 992 && window.innerWidth < 1200) {
    // add mouse leave event to side bar in 1200 > window.innerWidth > 992
    sidebarBox.addEventListener("mouseleave", hideSidebar);
  } else {
    // remove mouse leave event to side bar in 1200 > window.innerWidth > 992
    sidebarBox.removeEventListener("mouseleave", hideSidebar);
  }
};

// fucntion for whene page loaded
const whenePageLoded = () => {
  resizePageFucn();
};

// function for filter users
const filterItems = (array, value) => {
  const filter = array.filter((item) => {
    return item.textContent.toLowerCase().includes(value);
  });

  return filter;
};

// make new Tr
const makeTdElem = (userNameElemarray) => {
  let tdParentElem = null;
  let userAgeValue = null;
  let userJobValue = null;

  let newTrElem = null;
  let newUserNameElem = null;
  let newUserAgeElem = null;
  let newUserJobElem = null;

  const mapArrray = userNameElemarray.map((userNameElem) => {
    tdParentElem = userNameElem.parentNode;
    userAgeValue = tdParentElem.querySelector(".user-age").textContent;
    userJobValue = tdParentElem.querySelector(".user-job").textContent;

    newTrElem = document.createElement("tr");
    newUserNameElem = newTrElem.appendChild(document.createElement("td"));
    newUserNameElem.textContent = userNameElem.textContent;

    newUserJobElem = newTrElem.appendChild(document.createElement("td"));
    newUserJobElem.textContent = userJobValue;

    newUserAgeElem = newTrElem.appendChild(document.createElement("td"));
    newUserAgeElem.textContent = userAgeValue;

    return newTrElem;
  });

  return mapArrray;
};

// when user type in search box elem
const filterTableItem = (e) => {
  const inputValue = e.target.value.toLowerCase();

  if (inputValue.length === 0 || inputValue === "") {
    tableBody.innerHTML = prevTablebody;
  } else {
    const TdElems = [...allFirstTdElems];

    const filterdArray = filterItems(TdElems, inputValue);

    if (filterdArray.length === 0) {
      const trElem = document.createElement("tr");
      const tdElem = trElem.appendChild(document.createElement("td"));

      tdElem.textContent = "Input Value Is Not Match With Users";

      tableBody.innerHTML = trElem.innerHTML;
    } else {
      tableBody.innerHTML = "";

      const finalArrayElem = makeTdElem(filterdArray);

      finalArrayElem.forEach((item) => (tableBody.innerHTML += item.innerHTML));
    }
  }
};

// click event for when user click on the sidebar drop down btns
sidebarDropDownBtns.forEach((sidebarDropDownBtn) => {
  sidebarDropDownBtn.addEventListener("click", showSidebarDropDown);
});

// open and colse sidebar event
openSidebarBtn.addEventListener("click", opensideBarFunc);

// event to resize the web page
window.addEventListener("resize", resizePageFucn);
// event whene page loaded
window.addEventListener("load", whenePageLoded);

// active owl carousel
const slickSlider = $(".slick-slider").slick({
  speed: 350,
  infinite: true,
  slidesToShow: 1,
  arrows: true,
  prevArrow:
    '<button type="button" class="slick-prev"><i class="ri ri-arrow-right-s-line"></i></button>',
  nextArrow:
    '<button type="button" class="slick-next"><i class="ri ri-arrow-right-s-line"></i></button>',
  dots: true,
  dotsClass: "dots-container",
});

// whene user click on the next or prve slick btns
slickSlider.on("afterChange", function (slick, curr) {
  const activeBtn = document.querySelector(".slick-active button");
  const allButtons = document.querySelectorAll(".dots-container li button");
  const allCharts = document.querySelectorAll(".chart-parent");
  const current = slickSlider.slick("slickCurrentSlide");
  const activeSlide = document.querySelector(".slick-active");
  const activeChart = activeSlide.querySelector(".chart-parent");

  for (let chartElem of allCharts) chartElem.innerHTML = "";

  for (let button of allButtons) button.disabled = false;

  const chart = new ApexCharts(activeChart, optionArray[current]);
  chart.render();

  activeBtn.disabled = true;
});

// active apex chart
chart_1.render();

// active apex chart
chartCardBox_1.render();
chartCardBox_2.render();
chartCardBox_3.render();
chartCardBox_4.render();

// event whene the user type in search box
inputBox.addEventListener("keyup", filterTableItem);
