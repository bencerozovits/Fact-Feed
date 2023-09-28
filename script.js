const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

// Selecting DOM Elements
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

// Renders facts in list
factsList.innerHTML = "";

// Loads data from Supabase
loadFacts();

async function loadFacts() {
  const res = await fetch(
    "https://uffavgfgatnjryonwcvj.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVmZmF2Z2ZnYXRuanJ5b253Y3ZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU4MTY2MDEsImV4cCI6MjAxMTM5MjYwMX0.HX4Wd7ydkfWtWeyV43AYl6fBWPT6zgsFiHhrhXRuFyE",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVmZmF2Z2ZnYXRuanJ5b253Y3ZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU4MTY2MDEsImV4cCI6MjAxMTM5MjYwMX0.HX4Wd7ydkfWtWeyV43AYl6fBWPT6zgsFiHhrhXRuFyE",
      },
    }
  );
  const data = await res.json();
  // const filteredData = data.filter((fact) => fact.category == "society");

  createFactsList(data);
}

function createFactsList(dataArray) {
  const htmlArr = dataArray.map(
    (fact) => `<li class="fact">
    
    <p>
    ${fact.text}
    <a
      class="source"
      href="${fact.source}"
      target="_blank"
      >(Source)</a>
    </p>
  <span class="tag" style="background-color: ${
    CATEGORIES.find((cat) => cat.name === fact.category).color
  }">${fact.category}</span>
  </li>`
  );
  console.log(htmlArr);
  const html = htmlArr.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}

// Toggles form visability
btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share A Fact";
  }
});
