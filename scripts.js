// Search
const searchInput = document.getElementById("search");
const rows = Array.from(
  document.querySelectorAll("tbody tr:not(.group-row):not(.task-row)"),
);
const groupRows = Array.from(document.querySelectorAll("tbody tr.group-row"));
const sections = Array.from(document.querySelectorAll("section.category"));
const codes = Array.from(document.querySelectorAll("code"));
const emptyState = document.getElementById("empty-state");

function updateCounts() {
  sections.forEach((sec) => {
    const countableRows = sec.querySelectorAll(
      "tbody tr:not(.group-row):not(.task-row)",
    );
    const visibleRows = Array.from(countableRows).filter(
      (r) => !r.classList.contains("hidden"),
    ).length;
    const totalRows = countableRows.length;
    const countEl = sec.querySelector(".count");
    countEl.textContent =
      visibleRows === totalRows
        ? `(${totalRows})`
        : `(${visibleRows}/${totalRows})`;
    sec.style.display = visibleRows === 0 ? "none" : "";
  });
}

function updateGroupRows() {
  groupRows.forEach((groupRow) => {
    let sib = groupRow.nextElementSibling;
    let anyVisible = false;
    while (sib && !sib.classList.contains("group-row")) {
      if (!sib.classList.contains("hidden")) anyVisible = true;
      sib = sib.nextElementSibling;
    }
    groupRow.classList.toggle("hidden", !anyVisible);
  });
}

function applyFilter() {
  const q = searchInput.value.trim().toLowerCase();
  let anyVisible = false;
  rows.forEach((row) => {
    const taskRow = row.classList.contains("lang-row")
      ? row.previousElementSibling
      : null;
    const text = (taskRow ? taskRow.textContent : "") + row.textContent;
    const match = q === "" || text.toLowerCase().includes(q);
    row.classList.toggle("hidden", !match);
    if (taskRow) taskRow.classList.toggle("hidden", !match);
    if (match) anyVisible = true;
  });
  updateGroupRows();
  updateCounts();
  emptyState.style.display = anyVisible ? "none" : "block";
}

searchInput.addEventListener("input", applyFilter);
updateCounts();

// Copy to clipboard
async function copyToClipboard(event) {
  const code = event.currentTarget;
  const text = code.innerText;
  await navigator.clipboard
    .writeText(text)
    .then(() => {
      code.classList.add("copied");
      setTimeout(() => {
        code.classList.remove("copied");
      }, 3000);
    })
    .catch((e) => console.error(e));
}

codes.forEach((code) => {
  code.addEventListener("click", copyToClipboard);
});

// Syntax highlighting
hljs.highlightAll();

// Back to top
const btn = document.getElementById("backToTop");

function toggleVisibility() {
  // Change 300 to your preferred scroll threshold (px)
  if (window.scrollY > 300) {
    btn.classList.add("visible");
  } else {
    btn.classList.remove("visible");
  }
}

window.addEventListener("scroll", toggleVisibility, { passive: true });
toggleVisibility();
