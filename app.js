let ctx = document.getElementById('grafico');
let chart = new Chart(ctx, {
  type: 'line',
  data: { labels: [], datasets: [{ data: [], borderColor: 'blue' }] }
});

setInterval(()=>{
  let bpm = Math.floor(Math.random()*40)+60;
  document.getElementById("bpm").innerText = bpm + " bpm";

  let risco = "Normal";
  if(bpm > 110){ risco = "🚨 Alto risco"; }

  document.getElementById("ia").innerText = risco;

  chart.data.labels.push("");
  chart.data.datasets[0].data.push(bpm);
  chart.update();

},2000);

function salvar(){
  let li = document.createElement("li");
  li.innerText = nota.value;
  lista.appendChild(li);
}

function odonto(){
  let texto = dente.value;
  let diag = texto.includes("dor") ? "Possível cárie" : "Avaliação necessária";

  let li = document.createElement("li");
  li.innerText = texto + " → " + diag;
  listaOdonto.appendChild(li);
}

function emergencia(){
  alert("🚨 Emergência acionada!");
}

function voz(){
  let rec = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  rec.start();
  rec.onresult = e=>{
    if(e.results[0][0].transcript.includes("emergência")) emergencia();
  }
}

function toggleFont(){
  main.style.fontSize = main.style.fontSize === "20px" ? "16px" : "20px";
}

if('serviceWorker' in navigator){
  navigator.serviceWorker.register('sw.js');
}
