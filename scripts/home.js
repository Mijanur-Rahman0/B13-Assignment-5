let currentTab = "all";
const tabActive = ["btn-primary"];
const tabInactive = ["btn-soft"];

const allContainer = document.getElementById("all-container");
const openContainer = document.getElementById("open-container");
const closedContainer = document.getElementById("closed-container");

const statusCount = document.getElementById("status");

const spinner = document.getElementById("loading-spinner");

const showSpinner = () => {
  spinner.classList.remove("hidden");
};
const hideSpinner = () => {
  spinner.classList.add("hidden");
};

function switchTab(tab) {
  currentTab = tab;
  showSpinner();

  setTimeout(() => {
    console.log(tab);
    const tabs = ["all", "open", "closed"];

    for (const t of tabs) {
      const tabName = document.getElementById("tab-" + t);
      if (t === tab) {
        tabName.classList.remove(...tabInactive);
        tabName.classList.add(...tabActive);
      } else {
        tabName.classList.remove(...tabActive);
        tabName.classList.add(...tabInactive);
      }
    }

    if (tab === "all") {
      allContainer.classList.remove("hidden");
      openContainer.classList.add("hidden");
      closedContainer.classList.add("hidden");
    } else if (tab === "open") {
      openContainer.classList.remove("hidden");
      allContainer.classList.add("hidden");
      closedContainer.classList.add("hidden");
    } else {
      closedContainer.classList.remove("hidden");
      allContainer.classList.add("hidden");
      openContainer.classList.add("hidden");
    }
    hideSpinner();
    issueCount(tab);
  }, 100);
}
switchTab(currentTab);

// status count section
const issueCount = (tab) => {
  let count = 0;
  if (tab === "all") {
    count = document.getElementById("all-container").children.length;
  } else if (tab === "open") {
    count = document.getElementById("open-container").children.length;
  } else if (tab === "closed") {
    count = document.getElementById("closed-container").children.length;
  }
  statusCount.textContent = `${count} Issues`;
};

const loadAllIssues = () => {
  showSpinner();
  fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then((res) => res.json())
    .then((data) => {
      displayIssue(data.data);
      issueCount(currentTab);
      hideSpinner();
    });
};

const displayIssue = (issues) => {
  const allContainer = document.getElementById("all-container");
  const openContainer = document.getElementById("open-container");
  const closedContainer = document.getElementById("closed-container");

  allContainer.innerHTML = "";
  openContainer.innerHTML = "";
  closedContainer.innerHTML = "";

  for (const issue of issues) {
    const card = document.createElement("div");
    card.innerHTML = `
        <div class="card bg-base-100 shadow-md border border-base-200 rounded-xl h-full">
                    <div class="h-1 w-full ${getStatusColor(issue.status)} rounded-t-xl"></div>
                    <div class="card-body gap-3">
                        <div class="flex items-center justify-between">
                            <div class="">
                                ${getStatusIcon(issue.status)}
                            </div>

                            <div class="btn btn-soft ${getPriorityColor(issue.priority)} rounded-full px-6">
                                ${issue.priority}
                            </div>
                        </div>

                        <h2 class="card-title text-base font-semibold">
                            ${issue.title}
                        </h2>

                        <p class="text-sm text-gray-500">
                            ${issue.description}
                        </p>

                        <div class="flex gap-2 pt-1">
                            <span class="flex items-center gap-1 border px-3 rounded-full bg-red-100 text-red-500">
                                <img src="./assets/bug.png" alt=""> BUG
                            </span>
                            <span class="flex sm:w-full items-center gap-1 border px-3 rounded-full bg-yellow-100 text-yellow-500">
                                <img src="./assets/Vector.png" class="" alt=""> HELP WANTED
                            </span>
                        </div>
                    </div>
                    <div class="border-t border-base-200 px-6 py-4 text-sm text-gray-500 space-y-1">
                        <p>${issue.id} by ${issue.author}</p>
                        <p>${formatDate(issue.createdAt)}</p>
                    </div>
                </div>
        `;

    if (issue.status === "open") {
      openContainer.appendChild(card);
      allContainer.appendChild(card.cloneNode(true));
    } else {
      closedContainer.appendChild(card);
      allContainer.appendChild(card.cloneNode(true));
    }
  }
};
loadAllIssues();

const getStatusColor = (status) => {
  if (status === "open") {
    return "bg-green-500";
  } else {
    return "bg-[#A855F7]";
  }
};
const getStatusIcon = (status) => {
  if (status === "open") {
    return `<img class="w-9" src="./assets/Open-Status.png" alt="">`;
  } else {
    return `<img class="w-9" src="./assets/Closed-Status.png" alt="">`;
  }
};

const getPriorityColor = (priority) => {
  if (priority === "high") {
    return "bg-red-100 text-red-500";
  } else if (priority === "medium") {
    return "bg-amber-100 text-amber-500";
  } else {
    return "bg-gray-100 text-gray-500";
  }
};
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString();
};

// const loadIndividualIssue = () => {
//     fetch('https://phi-lab-server.vercel.app/api/v1/lab/issue/%7Bid%7D')
//     // fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
//     .then(res => res.json)
//     .then(data => console.log(data));

// }
// loadIndividualIssue();
