function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5hnlAwAQsLo":
        Script1();
        break;
      case "6JwL0sz9rrf":
        Script2();
        break;
      case "5b1D3P7QhIJ":
        Script3();
        break;
      case "6fvCELcoQUz":
        Script4();
        break;
      case "5VDuRO67GwH":
        Script5();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSong');
audio.src="backsound.mp3";
audio.load();
audio.play();
audio.volume = 0.2;
}

function Script2()
{
  var c = ",";


player = GetPlayer();


var nama = player.GetVar("nama");


var bagian1 = player.GetVar("bagian1");


var bagian2 = player.GetVar("bagian2");


var bagian3 = player.GetVar("bagian3");


var total1 = player.GetVar("total1");


var persen = player.GetVar("persen");



var csvContent = "Rekap"+nama+"\n";


csvContent += "Hasil"+ c +"Nilai\n";


csvContent += "Bagian 1"+ c + bagian1 + "\n";


csvContent += "Bagian 2"+ c + bagian2 + "\n";
csvContent += "Bagian 3"+ c + bagian3 + "\n";


csvContent +="Total"+ c + total1 + c + persen+" %\n";



var encodedUri = encodeURI(csvContent);


var link = document.createElement("a");


link.setAttribute("href", "data:text/csv;charset=utf-8," + encodedUri);

link.setAttribute("download", "RekapData.csv");
document.body.appendChild(link);


link.click();
}

function Script3()
{
  var player=GetPlayer();

var total1=player.GetVar("total");

var persen=player.GetVar("persen");

total1=player.GetVar("bagian1")+player.GetVar("bagian3")+player.GetVar("bagian3");

persen=total/30*100;
player.SetVar("total1",total1);

player.SetVar("persen",persen);
}

function Script4()
{
  var c = ",";

player = GetPlayer();

var nama = player.GetVar("nama");

var bagian4 = player.GetVar("bagian4");

var bagian5 = player.GetVar("bagian5");

var total2 = player.GetVar("total2");

var persen = player.GetVar("persen");

var csvContent = "Rekap"+nama+"\n";

csvContent += "Hasil"+ c +"Nilai\n";

csvContent += "Bagian 4"+ c + bagian4 + "\n";

csvContent += "Bagian 5"+ c + bagian5 + "\n";

csvContent +="Total"+ c + total2 + c + persen+" %\n";

var encodedUri = encodeURI(csvContent);

var link = document.createElement("a");

link.setAttribute("href", "data:text/csv;charset=utf-8," + encodedUri);
link.setAttribute("download", "RekapData.csv");
document.body.appendChild(link);

link.click();
}

function Script5()
{
  var player=GetPlayer();

var total2=player.GetVar("total");

var persen=player.GetVar("persen");

total2=player.GetVar("bagian4")+player.GetVar("bagian5");

persen=total2/20*100;
player.SetVar("total2",total2);

player.SetVar("persen",persen);
}

