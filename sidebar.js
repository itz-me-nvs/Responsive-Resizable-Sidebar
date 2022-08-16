// Variables

let menuButton = document.querySelector("#menu-btn");
let sidebar = document.querySelector(".sidebar");
let list = document.querySelector(".list");
let listItem = document.querySelector(".list-item");
let listItemTitle = document.querySelector(".list-item-title");

const sidebarList = [
  {
    title: "Photos",
    url: "/main/dashboard",
    icon: `
              <path
                d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5-7l-3 3.72L9 13l-3 4h12l-4-5z"
              ></path>
           `,
    active: true,
    submenu: [
      {
        subTitle: "Home",
        url: "",
        subActive: true,
      },
      {
        subTitle: "Dashboard",
        url: "",
        subActive: true,
      },
    ],
  },
  {
    title: "Explore",
    url: "/main/dashboard",
    icon: `
      <path d="M20.49 19l-5.73-5.73C15.53 12.2 16 10.91 16 9.5A6.5 6.5 0 1 0 9.5 16c1.41 0 2.7-.47 3.77-1.24L19 20.49 20.49 19zM5 9.5C5 7.01 7.01 5 9.5 5S14 7.01 14 9.5 11.99 14 9.5 14 5 11.99 5 9.5z"></path>
      `,
    active: false,
    submenu: [
      {
        subTitle: "Home",
        url: "",
        subActive: false,
      },
    ],
  },
  {
    title: "Sharing",
    url: "/main/dashboard",
    icon: `
      <path d="M15 8c0-1.42-.5-2.73-1.33-3.76.42-.14.86-.24 1.33-.24 2.21 0 4 1.79 4 4s-1.79 4-4 4c-.43 0-.84-.09-1.23-.21-.03-.01-.06-.02-.1-.03A5.98 5.98 0 0 0 15 8zm1.66 5.13C18.03 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.58-3.47-6.34-3.87zM9 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 9c-2.7 0-5.8 1.29-6 2.01V18h12v-1c-.2-.71-3.3-2-6-2M9 4c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm0 9c2.67 0 8 1.34 8 4v3H1v-3c0-2.66 5.33-4 8-4z"></path>
`,
    active: false,
    submenu: [
      {
        subTitle: "Home",
        url: "",
        subActive: false,
      },
    ],
  },
  {
    title: "Favourites",
    url: "/main/dashboard",
    icon: `
      <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path>
`,
    active: false,
    submenu: [
      {
        subTitle: "Home",
        url: "",
        subActive: false,
      },
    ],
  },
  {
    title: "Albums",
    url: "/main/dashboard",
    icon: `
<path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H6V4h6v7l2.5-1.88L17 11V4h1v16zm-4.33-6L17 18H7l2.5-3.2 1.67 2.18 2.5-2.98z"></path>`,
    active: false,
    submenu: [
      {
        subTitle: "Home",
        url: "",
        subActive: false,
      },
    ],
  },
  {
    title: "Utilities",
    url: "/main/dashboard",
    icon: `
<path d="M20 4v12H8V4h12m0-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7.53 12L9 10.5l1.4-1.41 2.07 2.08L17.6 6 19 7.41 12.47 14zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z"></path>`,
    active: false,
    submenu: [
      {
        subTitle: "Home",
        url: "",
        subActive: false,
      },
    ],
  },

  {
    title: "Archive",
    url: "/main/dashboard",
    icon: `
<path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.83 1H5.42l.82-1zM5 19V8h14v11H5zm8-5.35V9.5h-2v4.15l-1.79-1.79-1.42 1.41L12 17.48l4.21-4.21-1.42-1.41z"></path>`,
    active: false,
    submenu: [
      {
        subTitle: "Home",
        url: "",
        subActive: false,
      },
    ],
  },

  {
    title: "Trash",
    url: "/main/dashboard",
    icon: `
<path d="M15 4V3H9v1H4v2h1v13c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6h1V4h-5zm2 15H7V6h10v13zM9 8h2v9H9zm4 0h2v9h-2z"></path>`,
    active: false,
    submenu: [
      {
        subTitle: "Home",
        url: "",
        subActive: false,
      },
    ],
  },
];

GetPreviousSubmenuOpen = () => {
  list.childNodes.forEach(function (item, index) {
    if (item.lastElementChild.dataset.submenu === "true") {
      item.lastElementChild.style.maxHeight = "0px";
    } else {
      item.lastElementChild.style.maxHeight = `${item.lastElementChild.dataset.maxheight}px`;
    }
  });
};

const SIDEBAR_CLOSE_OFFSET = 50;
const SIDEBAR_INITIAL_WIDTH = 65;
const SIDEBAR_MAX_WIDTH = 230;
console.log(sidebarList);

menuButton.addEventListener("click", function (e) {
  console.log("clicked", e, sidebar, menuButton, list.children);

  if (sidebar.dataset.closed === "true") {
    sidebar.dataset.closed = "false";
    sidebar.style.width = `${SIDEBAR_MAX_WIDTH}px`;
    resizer.style.left = `${SIDEBAR_MAX_WIDTH}px`;

    GetPreviousSubmenuOpen();
  } else {
    sidebar.dataset.closed = "true";
    sidebar.style.width = `${SIDEBAR_INITIAL_WIDTH}px`;
    resizer.style.left = `${SIDEBAR_INITIAL_WIDTH}px`;

    list.childNodes.forEach(function (item, index) {
      item.lastElementChild.style.maxHeight = "0px";
    });
  }
});

window.addEventListener("load", function (e) {
  sidebarList.forEach((item, index) => {
    let listItemContainer = document.createElement("div");
    let subItemContainer = document.createElement("div");
    listItemContainer.classList.add("list-item-container");
    subItemContainer.classList.add("sub-item-container");
    subItemContainer.setAttribute("data-submenu", "true");
    subItemContainer.setAttribute("data-maxheight", "0");

    let listItem = document.createElement("div");
    listItem.classList.add("list-item");
    listItem.setAttribute("aria-label", item.title);
    listItem.setAttribute("title", item.title);
    listItem.dataset.index = index;
    item.active ? listItem.classList.add("active") : null;
    listItem.innerHTML = `

       <svg width="24px" height="24px" viewBox="0 0 24 24" style='fill: ${
         item.active
           ? "var(--BUTTON_PRIMARY);"
           : "var(--sidebar-secondary-color);"
       }'>
        ${item.icon}
       </svg>
            <span class="list-item-title"> ${item.title} </span>
    `;

    listItem.onclick = function (e) {
      console.log(e.target);
      // Active item Handler
      if (e.target.classList.value != "list-item active") {
        list.childNodes.forEach(function (item, index) {
          // console.log(item.children[0]);
          index != Number(e.target.dataset.index)
            ? (item.children[0].classList.remove("active"),
              (item.children[0].children[0].style.cssText =
                "fill: var(--sidebar-secondary-color);"))
            : (item.children[0].classList.add("active"),
              (item.children[0].children[0].style.cssText =
                "fill: var(--BUTTON_PRIMARY);"));
        });
      }

      // Submenu Handler
      if (sidebar.dataset.closed == "false") {
        if (e.target.nextSibling.dataset.submenu === "true") {
          e.target.nextSibling.dataset.submenu = "false";
          e.target.nextSibling.style.maxHeight = `${e.target.nextSibling.dataset.maxheight}px`;
          e.target.nextSibling.style.transition = `max-height 0.4s ease`;
        } else {
          e.target.nextSibling.dataset.submenu = "true";
          e.target.nextSibling.style.maxHeight = `0px`;
          e.target.nextSibling.style.transition = `max-height 0.5s ease`;
        }
      }

      list.childNodes.forEach(function (item, index) {
        index != Number(e.target.dataset.index)
          ? ((item.children[1].dataset.submenu = "true"),
            (item.children[1].style.maxHeight = "0px"))
          : null;
      });
    };

    for (const [index, value] of [
      "Home",
      "Dashboard",
      "Module Management",
      "Bachelor Admission",
      "Master Admission",
    ].entries()) {
      console.log(index);
      let subItem = document.createElement("a");
      subItem.classList.add("d-flex", "sub-item", index == 0 ? "active" : null);
      subItem.dataset.subMenuIndex = index.toString();
      let subItemTitle = document.createElement("span");
      subItemTitle.classList.add("submenu-list-item-title");
      subItemTitle.innerText = value;
      subItem.appendChild(subItemTitle);
      subItemContainer.appendChild(subItem);

      subItem.onclick = function (e) {
        let selectedElementIndex = e.target.dataset.subMenuIndex;
        console.log(
          selectedElementIndex,
          e.target.parentNode.children[1].dataset.subMenuIndex,
          e.target.parentNode.children.length
        );
        e.target.classList.add("active");
        for (let i = 0; i < e.target.parentNode.children.length; i++) {
          if (
            e.target.parentNode.children[i].dataset.subMenuIndex !=
            selectedElementIndex
          ) {
            e.target.parentNode.children[i].classList.remove("active");
          }
        }
      };
    }

    listItemContainer.appendChild(listItem);
    listItemContainer.appendChild(subItemContainer);
    list.appendChild(listItemContainer);

    subItemContainer.dataset.maxheight =
      subItemContainer.getBoundingClientRect().height;
    subItemContainer.style.maxHeight = "0px";
  });
});

// resize sidebar

// Query the element
const resizer = document.getElementById("dragMe");
console.log(resizer);
const leftSide = resizer.previousElementSibling;
const rightSide = resizer.nextElementSibling;
var previousClient = 0;

// The current position of mouse
let x = 0;
let y = 0;

// Width of left side
let leftWidth = 0;

// Handle the mousedown event
// that's triggered when user drags the resizer
const mouseDownHandler = function (e) {
  console.log("mousedown", e);
  // Get the current mouse position
  x = e.clientX;
  y = e.clientY;
  leftWidth = leftSide.getBoundingClientRect().width;
  console.log(leftWidth);

  // Attach the listeners to `document`
  document.addEventListener("mousemove", mouseMoveHandler);
  document.addEventListener("mouseup", mouseUpHandler);
};

// Attach the handler
resizer.addEventListener("mousedown", mouseDownHandler);

const mouseMoveHandler = function (e) {
  console.log("mousemove", e);

  document.body.style.cursor = "col-resize";

  leftSide.style.userSelect = "none";
  leftSide.style.pointerEvents = "none";

  rightSide.style.userSelect = "none";
  rightSide.style.pointerEvents = "none";

  // How far the mouse has been moved
  const dx = e.clientX - x;
  const dy = e.clientY - y;

  console.log(e.pageX);
  const newLeftWidth =
    ((leftWidth + dx) * 100) / resizer.parentNode.getBoundingClientRect().width;
  if (newLeftWidth < 50) {
    if (
      e.clientX < SIDEBAR_INITIAL_WIDTH + SIDEBAR_CLOSE_OFFSET &&
      previousClient > e.pageX
    ) {
      sidebar.dataset.closed = "true";
      leftSide.style.width = `65px`;
      resizer.style.left = `65px`;

      list.childNodes.forEach(function (item, index) {
        item.lastElementChild.style.maxHeight = "0px";
      });
      return;
    } else {
      GetPreviousSubmenuOpen();
    }
    leftSide.style.width = `${newLeftWidth}%`;
    resizer.style.left = `${newLeftWidth}%`;
    sidebar.style.transition = "none";
    sidebar.dataset.closed = "false";
  }

  previousClient = e.pageX;
};

const mouseUpHandler = function () {
  resizer.style.removeProperty("cursor");
  document.body.style.removeProperty("cursor");

  leftSide.style.removeProperty("user-select");
  leftSide.style.removeProperty("pointer-events");

  rightSide.style.removeProperty("user-select");
  rightSide.style.removeProperty("pointer-events");

  // Remove the handlers of `mousemove` and `mouseup`
  document.removeEventListener("mousemove", mouseMoveHandler);
  document.removeEventListener("mouseup", mouseUpHandler);
};
