const NAV = [
  {
    label: "About Us",
    path: "/youngji_about-us/",
    children: [
      { label: "Mission and Vision", path: "/youngji_about-us/vision-and-mission/" },
      { label: "Founder’s message", path: "/youngji_about-us/principals-message/" },
      { label: "President Message", path: "/youngji_about-us/school-counseling/" },
      { label: "Faculty and staff", path: "/youngji_about-us/faculty-and-staff/" },
      { label: "History", path: "/youngji_about-us/history/" },
      { label: "School Calendar", path: "/youngji_about-us/school-administrator/" },
    ],
  },
  {
    label: "Admission",
    path: "/admission/",
    children: [
      { label: "Scholarship", path: "/admission/sub1/" },
      { label: "Admission Procedure", path: "/admission/sub2/" },
      { label: "Tuition Fees", path: "/admission/sub3/" },
      { label: "Application form", path: "/admission/sub4/" },
      { label: "Admissions Requirements", path: "/admission/sub5/" },
    ],
  },
  {
    label: "Basic Education",
    path: "/basic-education/",
    children: [
      { label: "Principal’s Message", path: "/basic-education/principals-message/" },
      { label: "Preschool", path: "/basic-education/preschool/" },
      { label: "Elementary", path: "/basic-education/elementary/" },
      { label: "Middle/Junior", path: "/basic-education/middle-junior/" },
      { label: "High/Senior", path: "/basic-education/high-senior/" },
    ],
  },
  {
    label: "e-Education",
    path: "/e-education/",
    children: [
      { label: "Director’s message", path: "/e-education/online-school/" },
      { label: "Extension YJIS", path: "/e-education/online-school-k-12/" },
      { label: "Accreditation", path: "/e-education/online-college/" },
      { label: "Online Examination", path: "/e-education/online-examination/" },
      { label: "Extension Class Coordinator", path: "/new-page-1/" },
      { label: "Extension Class Teacher", path: "/new-page-2/" },
    ],
  },
  {
    label: "Community",
    path: "/community/",
    children: [
      { label: "SCHOOL LIFE", path: "/community/news-2/" },
      { label: "News / Notification", path: "/community/notification/" },
      { label: "Contact Info", path: "/community/campus-life/" },
      { label: "Branch school of YJIS", path: "/community/extension-class-center/" },
      { label: "Contact Info & Search for student", path: "/community/search-for-student/" },
    ],
  },
];

function getBase(depth) {
  const safeDepth = Number.isFinite(depth) && depth > 0 ? depth : 0;
  return safeDepth === 0 ? "" : "../".repeat(safeDepth);
}

function toRelative(base, path) {
  if (!path || path === "/") {
    return base === "" ? "./" : base;
  }
  return `${base}${path.replace(/^\//, "")}`;
}

function findCurrentNav(path) {
  for (const section of NAV) {
    if (section.path === path) {
      return { section, page: section };
    }
    for (const child of section.children || []) {
      if (child.path === path) {
        return { section, page: child };
      }
    }
  }
  return { section: null, page: null };
}

function highlightActiveLink(link, isActive) {
  if (!link) return;
  if (isActive) {
    link.classList.add("text-sky-600", "font-semibold");
    link.setAttribute("aria-current", "page");
  } else {
    link.classList.remove("text-sky-600", "font-semibold");
    link.removeAttribute("aria-current");
  }
}

function buildTopNavigation(base, currentPath, activeSection) {
  const topNav = document.getElementById("top-nav");
  const mobileNav = document.getElementById("mobile-nav");
  if (!topNav || !mobileNav) return;

  topNav.innerHTML = "";
  mobileNav.innerHTML = "";

  NAV.forEach((item) => {
    const relative = toRelative(base, item.path);
    const anchor = document.createElement("a");
    anchor.href = relative;
    anchor.textContent = item.label;
    anchor.className =
      "block rounded-md px-3 py-2 transition hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500";
    highlightActiveLink(anchor, activeSection && activeSection.path === item.path);
    topNav.appendChild(anchor);

    const mobileWrapper = document.createElement("div");
    mobileWrapper.className = "py-2";
    const mobileLink = anchor.cloneNode(true);
    mobileWrapper.appendChild(mobileLink);

    if (item.children && item.children.length > 0) {
      const childList = document.createElement("div");
      childList.className = "ml-4 border-l border-slate-200 pl-3";
      item.children.forEach((child) => {
        const childLink = document.createElement("a");
        childLink.href = toRelative(base, child.path);
        childLink.textContent = child.label;
        childLink.className =
          "mt-1 block rounded-md px-2 py-1 text-sm text-slate-600 transition hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500";
        highlightActiveLink(childLink, currentPath === child.path);
        childList.appendChild(childLink);
      });
      mobileWrapper.appendChild(childList);
    }

    mobileNav.appendChild(mobileWrapper);
  });
}

function buildSidebar(base, section, currentPath) {
  const sidebar = document.getElementById("sidebar-nav");
  const sidebarContainer = document.getElementById("sidebar");
  if (!sidebar || !sidebarContainer) return;

  if (!section || !section.children || section.children.length === 0) {
    sidebarContainer.classList.add("hidden");
    return;
  }

  sidebarContainer.classList.remove("hidden");
  sidebar.innerHTML = "";
  section.children.forEach((child) => {
    const li = document.createElement("li");
    const link = document.createElement("a");
    link.href = toRelative(base, child.path);
    link.textContent = child.label;
    link.className =
      "block rounded-md px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500";
    if (currentPath === child.path) {
      link.classList.add("bg-slate-100", "text-sky-700", "font-semibold");
    }
    li.appendChild(link);
    sidebar.appendChild(li);
  });
}

function buildBreadcrumbs(base, section, page) {
  const breadcrumbNav = document.getElementById("breadcrumbs");
  if (!breadcrumbNav) return;

  const list = document.createElement("ul");
  list.className = "flex flex-wrap items-center gap-2 text-sm text-slate-600";

  const crumbs = [];
  crumbs.push({ label: "Home", path: "/" });
  if (section) {
    crumbs.push({ label: section.label, path: section.path });
    if (page && page.path !== section.path) {
      crumbs.push({ label: page.label, path: page.path });
    }
  }

  crumbs.forEach((crumb, index) => {
    const li = document.createElement("li");
    if (index !== crumbs.length - 1) {
      const link = document.createElement("a");
      link.href = toRelative(base, crumb.path);
      link.textContent = crumb.label;
      link.className = "text-sky-600 underline-offset-2 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500";
      li.appendChild(link);
      const separator = document.createElement("span");
      separator.textContent = ">";
      separator.className = "mx-2 text-slate-400";
      li.appendChild(separator);
    } else {
      const span = document.createElement("span");
      span.textContent = crumb.label;
      span.className = "font-semibold text-slate-700";
      li.appendChild(span);
    }
    list.appendChild(li);
  });

  breadcrumbNav.innerHTML = "";
  breadcrumbNav.appendChild(list);
}

function initFooterYear() {
  const el = document.getElementById("footer-year");
  if (el) {
    el.textContent = new Date().getFullYear();
  }
}

function initMobileToggle() {
  const toggle = document.getElementById("mobile-menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");
  if (!toggle || !mobileNav) return;

  toggle.addEventListener("click", () => {
    const isHidden = mobileNav.hasAttribute("hidden");
    if (isHidden) {
      mobileNav.removeAttribute("hidden");
      toggle.setAttribute("aria-expanded", "true");
    } else {
      mobileNav.setAttribute("hidden", "");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

const STUDENT_RECORDS = [
  { name: "Hana Kim", grade: "Grade 5", studentId: "YJ-1052" },
  { name: "Jinwoo Park", grade: "Grade 8", studentId: "YJ-2084" },
  { name: "Soyeon Choi", grade: "Grade 10", studentId: "YJ-3107" },
  { name: "Minho Lee", grade: "Grade 12", studentId: "YJ-4120" },
  { name: "Eunji Han", grade: "Grade 7", studentId: "YJ-2073" },
];

function initStudentSearch() {
  const searchInput = document.getElementById("student-search");
  const resultBody = document.getElementById("student-results");
  const resultCount = document.getElementById("student-count");

  if (!searchInput || !resultBody || !resultCount) return;

  const renderRows = (records) => {
    resultBody.innerHTML = "";
    if (records.length === 0) {
      const row = document.createElement("tr");
      const cell = document.createElement("td");
      cell.colSpan = 3;
      cell.textContent = "No matching students found.";
      cell.className = "px-4 py-3 text-center text-sm text-slate-500";
      row.appendChild(cell);
      resultBody.appendChild(row);
      return;
    }

    records.forEach((record) => {
      const row = document.createElement("tr");
      [record.name, record.grade, record.studentId].forEach((value) => {
        const cell = document.createElement("td");
        cell.textContent = value;
        cell.className = "px-4 py-3 text-sm text-slate-700";
        row.appendChild(cell);
      });
      resultBody.appendChild(row);
    });
  };

  const filterRecords = () => {
    const query = searchInput.value.trim().toLowerCase();
    const filtered = STUDENT_RECORDS.filter((record) => {
      return (
        record.name.toLowerCase().includes(query) ||
        record.grade.toLowerCase().includes(query) ||
        record.studentId.toLowerCase().includes(query)
      );
    });
    resultCount.textContent = `${filtered.length} result${filtered.length === 1 ? "" : "s"}`;
    renderRows(filtered);
  };

  searchInput.addEventListener("input", filterRecords);
  filterRecords();
}

async function initPage() {
  const body = document.body;
  const depth = Number.parseInt(body.dataset.depth || "0", 10);
  const currentPath = body.dataset.currentPath || "/";
  const base = getBase(depth);

  const headerPath = `${base}partials/header.html`;
  const footerPath = `${base}partials/footer.html`;

  await Promise.all([
    fetch(headerPath)
      .then((response) => response.text())
      .then((html) => {
        const headerContainer = document.getElementById("site-header");
        if (headerContainer) {
          headerContainer.innerHTML = html;
        }
      }),
    fetch(footerPath)
      .then((response) => response.text())
      .then((html) => {
        const footerContainer = document.getElementById("site-footer");
        if (footerContainer) {
          footerContainer.innerHTML = html;
        }
      }),
  ]);

  const logoLink = document.getElementById("site-logo-link");
  if (logoLink) {
    logoLink.href = toRelative(base, "/");
  }

  const { section, page } = findCurrentNav(currentPath);
  buildTopNavigation(base, currentPath, section);
  buildSidebar(base, section, currentPath);
  buildBreadcrumbs(base, section, page);
  initFooterYear();
  initMobileToggle();

  if (currentPath === "/community/search-for-student/") {
    initStudentSearch();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initPage().catch((error) => {
    console.error("Failed to initialise page", error);
  });
});
