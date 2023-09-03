let get = document.querySelector("button.get");
get.addEventListener("click", fetchData);
function fetchData() {
  let html = "";
  return new Promise((resolve, reject) => {
    let xml = new XMLHttpRequest();
    xml.open("get", "https://jsonplaceholder.typicode.com/posts");
    xml.responseType = "json";
    xml.onload = () => {
      xml.response.forEach((element) => {
        html += `
        <div>
        <h1>${element.title}</h1>
        <p>${element.body}</p>
    </div>`;
      });
      setTimeout(() => {
        document.querySelector("div#root").innerHTML = html;
      }, 2000);
    };
    xml.onerror = () => {
      console.log("error");
    };
    xml.send(null);
  });
}
