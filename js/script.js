const ApiKey = "89a46114bba94633ac6bcf24f318f24a";

const encurtar = () => {
  let url = document.getElementById("input-url").value;
  if (!url) {
    alert("É preciso inserir uma URL para encurtar");
    return;
  }

  let headers = {
    "Content-Type": "application/json",
    apiKey: "89a46114bba94633ac6bcf24f318f24a",
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
      console.log(json);
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
