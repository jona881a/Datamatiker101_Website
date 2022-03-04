const pagecontentList = document.getElementById("pagecontent");
const pageTitles = document.querySelectorAll("h3");
//const asideTitles = document.getElementsByClassName("content-link");

pageTitles.forEach(title => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  li.className = "content-section";
  a.className = "content-link";
  a.innerText = title.innerText;
  a.href = "#" + title.innerText;
  
  title.id = title.innerText;

  pagecontentList.appendChild(li);
  li.appendChild(a);
});

/*I don't want to redo this, but this is actually not serverside rendering. This is intepreted by the browser.
Instead this should actually happen in the app.js file when we send the file*/