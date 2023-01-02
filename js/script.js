// Colocar APIKEY do rebrandly
const ApiKey = "";

const encurtar = () => {
  let url = document.getElementById("input-url").value;
  if (!url) {
    alert("É preciso inserir uma URL para encurtar");
    return;
  }

  let headers = {
    "Content-Type": "application/json",
    apiKey: ApiKey,
  };
  let linkRequest = {
    destination: url,
    domain: { fullname: "rebrand.ly" },
  };

  fetch("https://api.rebrandly.com/v1/links", {
    method: "POST",
    headers: headers,
    body: JSON.stringify(linkRequest),
  })
    .then((res) => res.json())
    .then((json) => {
      let inputURL = document.getElementById("input-url");
      inputURL.value = json.shortUrl;
    });
};
const copy = () => {
  let url = document.getElementById("input-url");
  url.select();

  navigator.clipboard.writeText(url.value);

  alert(`URL Copiada: ${url.value}`);
};
