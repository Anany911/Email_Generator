document.addEventListener("DOMContentLoaded", () => {
  
  const searchBar = document.querySelector(".search-bar");
  const searchButton = document.querySelector(".search-button");
  const policySections = document.querySelectorAll(".policy-section");
  const noResultsMessage = document.querySelector(".no-results-message");

  function performSearch() {
    const searchQuery = searchBar.value.toLowerCase();
    let hasResults = false;

    policySections.forEach(section => {
      const sectionText = section.innerText.toLowerCase();
      const isMatch = sectionText.includes(searchQuery);
      section.style.display = isMatch ? "block" : "none";
      if (isMatch) hasResults = true;
    });

    noResultsMessage.style.display = hasResults ? "none" : "block";
  }

  searchButton.addEventListener("click", performSearch);

  const tabs = document.querySelectorAll(".tab-button");
  const tabContent = document.querySelectorAll(".policy-content .policy-section");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tabContent.forEach(content => content.classList.remove("active"));
      
      tab.classList.add("active");
      tabContent[index].classList.add("active");
    });
  });

  const accordionTitles = document.querySelectorAll(".accordion-title");
  
  accordionTitles.forEach(title => {
    title.addEventListener("click", () => {
      const content = title.nextElementSibling;
      
      title.classList.toggle("active");
      content.style.display = content.style.display === "block" ? "none" : "block";
    });
  });

  policySections.forEach(section => {
    const accordionItems = section.querySelectorAll(".accordion-item");

    accordionItems.forEach(item => {
      const title = item.querySelector(".accordion-title");
      const content = item.querySelector(".accordion-content");
      
      title.addEventListener("click", () => {
        content.style.display = content.style.display === "block" ? "none" : "block";
      });
    });
  });
});
