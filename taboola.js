const api_url ="https://api.taboola.com/1.2/json/apitestaccount/recommendations.get?app.type=web&app.apikey=7be65fc78e52c11727793f68b06d782cff9ede3c&source.id=%2Fdigiday-publishing-summit%2F&source.url=https%3A%2F%2Fblog.taboola.com%2Fdigiday-publishing-summit%2F&source.type=text&placement.organic-type=mix&placement.visible=true&placement.available=true&placement.rec-count=6&placement.name=Below%20Article%20Thumbnails&placement.thumbnail.width=640&placement.thumbnail.height=480&user.session=init"
async function getapi(url) {
    const response = await fetch(url);
    const data = await response.json();
    show(data);
}
getapi(api_url);
function show(data){  
  const list =data.list;
  let ul  =document.createElement("ui");
  let widget  =document.createElement("div");
  const header =document.createElement("header");
  document.body.appendChild(header);
  ul.className="cards";
  header.appendChild(widget);
  widget.className="widget";
  widget.appendChild(ul);
  document.body.appendChild(widget);
  for(let index of list){
    let li  =document.createElement("li");
    let div =document.createElement("div");
    let a =document.createElement("a");
    let img =document.createElement("img");
    let h2 =document.createElement("h2");
    let p =document.createElement("p");
    li.className="cards_item";
    div.className="card"; 
    a.href =index.url;
    img.src=index.thumbnail[0].url
    h2.className="item_title";
    h2.innerHTML =index.name;
    p.className="item_brand";
    p.innerHTML=index.branding;
     ul.appendChild(li);
     li.appendChild(div);
     div.appendChild(a);
     a.appendChild(img);
     a.appendChild(h2);
     a.appendChild(p);
     
  }

}