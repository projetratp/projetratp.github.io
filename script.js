// Menu
function demo(pageName,elmnt,color) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablink");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].style.backgroundColor = "";
	}
	document.getElementById(pageName).style.display = "block";
	elmnt.style.backgroundColor = color;
}
// JS


// Horaire
// fonction 1 seul direction
function oneDir(data, size)
{
	var bool = true;
	for (var i = 0; i < size - 1; i++) {
		if (data.result.schedules[i].destination != data.result.schedules[i+1].destination)
		{
			bool = false;
			break;
		}
	}
	if (bool)
	{
		d2.innerHTML = " ";
		d2m1.innerHTML = " ";
		d2m2.innerHTML =  " ";
		d2m3.innerHTML =  " ";
		d2m4.innerHTML =  " ";
	}
	return bool;
}
//réponse horaire
var callBackGetSuccess = function(data)
{	
	console.log("Api horaire", data);
	// 8 Metro 
	if (data.result.schedules.length == 8)
	{
		d1.innerHTML = "Direction: "+ data.result.schedules[0].destination;
		d1m1.innerHTML =  data.result.schedules[0].message;
		d1m2.innerHTML =  data.result.schedules[1].message;
		d1m3.innerHTML =  data.result.schedules[2].message;
		d1m4.innerHTML =  data.result.schedules[3].message;
		d2.innerHTML = "Direction: "+ data.result.schedules[4].destination;
		d2m1.innerHTML =  data.result.schedules[4].message;
		d2m2.innerHTML =  data.result.schedules[5].message;
		d2m3.innerHTML =  data.result.schedules[6].message;
		d2m4.innerHTML =  data.result.schedules[7].message;
	}
	//7 Metro 
	if (data.result.schedules.length == 7)
	{
		if (data.result.schedules[3].destination == data.result.schedules[4].destination)
		{
			d1.innerHTML = "Direction: "+ data.result.schedules[0].destination;i
			d1m1.innerHTML =  data.result.schedules[0].message;
			d1m2.innerHTML =  data.result.schedules[1].message;
			d1m3.innerHTML =  data.result.schedules[2].message;
			d1m4.innerHTML =  "";
			d2.innerHTML = "Direction: "+ data.result.schedules[4].destination;
			d2m1.innerHTML =  data.result.schedules[3].message;	
			d2m2.innerHTML =  data.result.schedules[4].message;
			d2m3.innerHTML =  data.result.schedules[5].message;
			d2m4.innerHTML =  data.result.schedules[6].message;
		}
		if (data.result.schedules[3].destination != data.result.schedules[4].destination)
		{
			d1.innerHTML = "Direction: "+ data.result.schedules[0].destination;
			d1m1.innerHTML =  data.result.schedules[0].message;
			d1m2.innerHTML =  data.result.schedules[1].message;
			d1m3.innerHTML =  data.result.schedules[2].message;
			d1m4.innerHTML =  data.result.schedules[3].message;
			d2.innerHTML = "Direction: "+ data.result.schedules[4].destination;
			d2m1.innerHTML =  data.result.schedules[4].message;	
			d2m2.innerHTML =  data.result.schedules[5].message;
			d2m3.innerHTML =  data.result.schedules[6].message;
			d2m4.innerHTML =  "";
		}
	}
	//6 Metro
	if (data.result.schedules.length == 6)
	{
		if (data.result.schedules[3].destination == data.result.schedules[4].destination)
		{
			if (data.result.schedules[2].destination == data.result.schedules[3].destination)
			{
				d1.innerHTML = "Direction: "+ data.result.schedules[0].destination;
				d1m1.innerHTML =  data.result.schedules[0].message;
				d1m2.innerHTML =  data.result.schedules[1].message;
				d1m3.innerHTML =  data.result.schedules[2].message;
				d1m4.innerHTML =  "";
				d2.innerHTML = "Direction: "+ data.result.schedules[4].destination;
				d2m1.innerHTML =  data.result.schedules[3].message;	 
				d2m2.innerHTML =  data.result.schedules[4].message;
				d2m3.innerHTML =  data.result.schedules[5].message;
				d2m4.innerHTML =  "";
			}
			if (data.result.schedules[2].destination != data.result.schedules[3].destination)
			{
				d1.innerHTML = "Direction: "+ data.result.schedules[0].destination;
				d1m1.innerHTML =  data.result.schedules[0].message;
				d1m2.innerHTML =  data.result.schedules[1].message;
				d1m3.innerHTML =  "";
				d1m4.innerHTML =  "";
				d2.innerHTML = "Direction: "+ data.result.schedules[4].destination;
				d2m1.innerHTML =  data.result.schedules[2].message;	 
				d2m2.innerHTML =  data.result.schedules[3].message;
				d2m3.innerHTML =  data.result.schedules[4].message;
				d2m4.innerHTML =  data.result.schedules[5].message;
			}
		}
		if (data.result.schedules[3].destination != data.result.schedules[4].destination)
		{
			if (data.result.schedules[4].destination != data.result.schedules[5].destination)
			{
				d1.innerHTML = "Direction: "+ data.result.schedules[0].destination;
				d1m1.innerHTML =  data.result.schedules[0].message;
				d1m2.innerHTML =  data.result.schedules[1].message;
				d1m3.innerHTML =  data.result.schedules[2].message;
				d1m4.innerHTML =  data.result.schedules[3].message;
				d2.innerHTML = "Direction: "+ data.result.schedules[4].destination;
				d2m1.innerHTML =  data.result.schedules[4].message;	
				d2m2.innerHTML =  data.result.schedules[5].message;
				d2m3.innerHTML =  "";
				d2m4.innerHTML =  "";
			}
		}
	}
	//5 Metro
	if (data.result.schedules.length == 5)
	{
		if (data.result.schedules[2].destination == data.result.schedules[3].destination)
		{
			d1.innerHTML = "Direction: "+ data.result.schedules[0].destination;
			d1m1.innerHTML =  data.result.schedules[0].message;
			d1m2.innerHTML =  data.result.schedules[1].message;
			d1m3.innerHTML =  data.result.schedules[2].message;
			d1m4.innerHTML =  "";
			d2.innerHTML = "Direction: "+ data.result.schedules[4].destination;
			d2m1.innerHTML =  data.result.schedules[3].message;	 
			d2m2.innerHTML =  data.result.schedules[4].message;
			d2m3.innerHTML =  "";
			d2m4.innerHTML =  "";
		}
		if (data.result.schedules[2].destination != data.result.schedules[3].destination)
		{
			d1.innerHTML = "Direction: "+ data.result.schedules[0].destination;
			d1m1.innerHTML =  data.result.schedules[0].message;
			d1m2.innerHTML =  data.result.schedules[1].message;
			d1m3.innerHTML =  "";
			d1m4.innerHTML =  "";
			d2.innerHTML = "Direction: "+ data.result.schedules[4].destination;
			d2m1.innerHTML =  data.result.schedules[2].message;	 
			d2m2.innerHTML =  data.result.schedules[3].message;
			d2m3.innerHTML =  data.result.schedules[4].message;
			d2m4.innerHTML =  "";
		}
	}
	
	//4 Metro
	if (data.result.schedules.length == 4)
	{		
		d1.innerHTML = "Direction: "+ data.result.schedules[0].destination;
		d1m1.innerHTML =  data.result.schedules[0].message;
		d1m2.innerHTML =  data.result.schedules[1].message;
		d1m3.innerHTML =  data.result.schedules[2].message;
		d1m4.innerHTML =  data.result.schedules[3].message;
		d2.innerHTML = "Direction: "+ data.result.schedules[3].destination;
		d2m1.innerHTML =  data.result.schedules[2].message;
		d2m2.innerHTML =  data.result.schedules[3].message;
		d2m3.innerHTML =  "";
		d2m4.innerHTML =  "";
		oneDir(data, 4);
	}
	// 3 Metro
	if (data.result.schedules.length == 3)
	{
		if (data.result.schedules[1].destination != data.result.schedules[2].destination)
		{
			d1.innerHTML = "Direction: "+ data.result.schedules[0].destination;
			d1m1.innerHTML =  data.result.schedules[0].message;
			d1m2.innerHTML =  data.result.schedules[1].message;
			d1m3.innerHTML =  "";
			d1m4.innerHTML =  "";
			d2.innerHTML = "Direction: "+ data.result.schedules[3].destination;
			d2m1.innerHTML =  data.result.schedules[2].message;
			d2m2.innerHTML =  "";
			d2m3.innerHTML =  "";
			d2m4.innerHTML =  "";
		}
		if (data.result.schedules[1].destination == data.result.schedules[2].destination)
		{
			d1.innerHTML = "Direction: "+ data.result.schedules[0].destination;
			d1m1.innerHTML =  data.result.schedules[0].message;
			d1m2.innerHTML =  "";
			d1m3.innerHTML =  "";
			d1m4.innerHTML =  "";
			d2.innerHTML = "Direction: "+ data.result.schedules[3].destination;
			d2m1.innerHTML =  data.result.schedules[1].message;
			d2m2.innerHTML =  data.result.schedules[2].message;
			d2m3.innerHTML =  "";
			d2m4.innerHTML =  "";
		}
	}
	
	// 2 Metro
	if (data.result.schedules.length == 2)
	{
		if (data.result.schedules[0].destination != data.result.schedules[1].destination)
		{
			d1.innerHTML = "Direction: "+ data.result.schedules[0].destination;
			d1m1.innerHTML =  data.result.schedules[0].message;
			d1m2.innerHTML =  data.result.schedules[1].message;
		}
	}
	// 3 Destination
	if (data.result.schedules[0].destination != data.result.schedules[1].destination || 
		data.result.schedules[2].destination != data.result.schedules[3].destination || 
		data.result.schedules[1].destination != data.result.schedules[3].destination)
	{
		d1.innerHTML =
		"Direction: "+ data.result.schedules[0].destination + 
		" /\n"+data.result.schedules[1].destination +
		" /\n" +data.result.schedules[2].destination
		if (data.result.schedules[3].destination != data.result.schedules[4].destination)
			d1.innerHTML += " /\n" +data.result.schedules[3].destination 
	}
}
//MD
//Liste des stations de métros
var stationObject = {
	"1":  ["La défense", "Esplanade de La Défense ", "Pont de Neuilly","Les Sablons","Porte Maillot","Argentine","Charles de Gaulle — Étoile","George V","Franklin D. Roosevelt","Champs-Élysées — Clemenceau","Concorde","Tuileries","Palais Royal - Musée du Louvre","Louvre — Rivoli","Châtelet","Hôtel de Ville","Saint-Paul","Bastille","Gare de Lyon","Reuilly — Diderot","Nation","Porte de Vincennes","Saint-Mandé","Bérault","Château de Vincennes"],
	"2":  ["Porte Dauphine","Victor Hugo","Charles de Gaulle — Étoile","Ternes","Courcelles","Monceau","Villiers","Rome","Place de Clichy","Blanche","Pigalle","Anvers","Barbès — Rochechouart","La Chapelle","Stalingrad","Jaurès","Colonel Fabien","Belleville","Couronnes","Ménilmontant","Père Lachaise","Philippe Auguste","	Avron","Nation"],
	"3":  ["Pont de Levallois — Bécon","Anatole France","Louise Michel","Porte de Champerret","Pereire","Wagram","Malesherbes","Villiers","Europe","Saint-Lazare","Havre — Caumartin","Opéra","Quatre-Septembre","Bourse","Sentier","Réaumur — Sébastopol","Arts et Métiers","Temple","République","Parmentier","Rue Saint-Maur","Père Lachaise","Gambetta","Porte de Bagnolet","Gallieni "],
	"3b": ["Porte des Lilas","Saint-Fargeau","Pelleport","Gambetta"],
	"4":  ["Porte de Clignancourt","Simplon","Marcadet — Poissonniers","Château Rouge","Barbès — Rochechouart","Gare du Nord","Gare de l'Est ","Château d'Eau","Strasbourg — Saint-Denis","Réaumur — Sébastopol","Étienne Marcel","Les Halles","Châtelet","Cité","Saint-Michel","Odéon","Saint-Germain-des-Prés","Saint-Sulpice","Saint-Placide","Montparnasse — Bienvenüe","Vavin","Raspail","Denfert-Rochereau ","Mouton-Duvernet","Alésia","Porte d'Orléans ","Mairie de Montrouge "],
	"5":  ["Bobigny - Pablo Picasso","Bobigny — Pantin — Raymond Queneau","Église de Pantin","Hoche","Porte de Pantin ","Ourcq","Laumière","Jaurès","Stalingrad","Gare du Nord","Gare de l'Est","Jacques Bonsergent","République","Oberkampf","Richard-Lenoir","Bréguet — Sabin","Bastille","Quai de la Rapée","Gare d'Austerlitz","Saint-Marcel","Campo-Formio", "Place d'Italie"],
	"6":  ["Charles de Gaulle — Étoile","Kléber","Boissière","Trocadéro","Passy","Bir-Hakeim ","Dupleix","La Motte-Picquet — Grenelle","Cambronne","Sèvres — Lecourbe","Pasteur","Montparnasse — Bienvenüe","Edgar Quinet","Raspail","Denfert-Rochereau","Saint-Jacques","Glacière","Corvisart","Place d'Italie","Nationale","Chevaleret","Quai de la Gare","Bercy","Dugommier","Daumesnil ","Bel-Air","Picpus ","Nation"],
	"7":  ["La Courneuve — 8 Mai 1945","Fort d'Aubervilliers","Aubervilliers — Pantin — Quatre Chemins","Porte de la Villette ","Corentin Cariou","Crimée","Riquet","Stalingrad","Louis Blanc","Château-Landon","Gare de l'Est","Poissonnière","Cadet","Le Peletier","Opéra","Pyramides","Palais Royal — Musée du Louvre","Pont Neuf","Châtelet", "Pont Marie ","Sully — Morland","Jussieu","Place Monge ","Censier — Daubenton","Les Gobelins","Place d'Italie","Tolbiac","Maison Blanche	","Porte d'Italie ","Porte de Choisy","Porte d'Ivry","Pierre et Marie Curie","Mairie d'Ivry","Le Kremlin-Bicêtre","Villejuif — Léo Lagrange","Villejuif — Paul Vaillant-Couturier","Villejuif — Louis Aragon"],
	"7b": ["Louis Blanc","Jaurès","Bolivar","Buttes Chaumont","Botzaris","Place des Fêtes","Danube","Pré Saint-Gervais"],	 
	"8":  ["Balard","Lourmel","Boucicaut","Félix Faure","Commerce","La Motte-Picquet — Grenelle"," École Militaire","La Tour-Maubourg","Invalides","Concorde","Madeleine","Opéra","Richelieu — Drouot"," Grands Boulevards","Bonne Nouvelle","Strasbourg — Saint-Denis","République","Filles du Calvaire","Saint-Sébastien — Froissart","Chemin Vert","Bastille","Ledru-Rollin","Faidherbe — Chaligny","Reuilly — Diderot","Montgallet","Daumesnil ","Michel Bizot","Porte Dorée","Porte de Charenton","Liberté","Charenton — Écoles ","École Vétérinaire de Maisons-Alfort","Maisons-Alfort — Stade","Maisons-Alfort — Les Juilliottes","Créteil — L'Échat","Créteil — Université","Créteil — Préfecture ","Pointe du lac"],
	"9":  ["Pont de Sèvres","Billancourt","Marcel Sembat","Porte de Saint-Cloud","Exelmans","Michel-Ange – Molitor","Michel-Ange – Auteuil","Jasmin","Ranelagh","La Muette","Rue de la Pompe","Trocadéro","Iéna","Alma – Marceau","Franklin D Roosevelt","Saint-Philippe du Roule","Miromesnil","Saint-Augustin","Havre – Caumartin","Chaussee d'Antin (La Fayette)","Richelieu – Drouot","Grands Boulevards","Bonne-Nouvelle","Strasbourg – Saint-Denis","République","Oberkampf","Saint-Ambroise","Voltaire","Charonne","Rue des Boulets","Nation","Buzenval","Maraîchers","Porte de Montreuil","Robespierre","Croix de Chavaux","Mairie de Montreuil"],
	"10": ["Boulogne Pont de Saint-Cloud","Boulogne Jean Jaurès","Michel Ange Molitor","Porte d'Auteuil","Chardon Lagache","Michel Ange Auteuil","Mirabeau","Eglise d'Auteuil","Javel André Citroën","Charles Michels","Avenue Emile Zola","La Motte Picquet Grenelle","Ségur","Duroc","Vaneau","Sèvres Babylone","Mabillon","Odéon","Cluny La Sorbonne","Maubert - Mutualité","Cardinal Lemoine","Jussieu","Gare d'Austerlitz"],
	"11": ["Châtelet","Hôtel de Ville","Rambuteau","Arts et Métiers","République","Goncourt","Belleville","Pyrénées","Jourdain","Place des Fêtes","Télégraphe","Porte des Lilas","Mairie des Lilas"],
	"12": ["Front Populaire","Porte de la Chapelle","Marx Dormoy","Marcadet - Poissonniers","Jules Joffrin","Lamarck - Caulaincourt","Abbesses ","Pigalle","Saint-Georges","Notre-Dame-de-Lorette","Trinité - d'Estienne d'Orves","Saint-Lazare","Madeleine","Concorde","Assemblée nationale","Solférino","Rue du Bac","Sèvres - Babylone","Rennes","Notre-Dame-des-Champs","Montparnasse - Bienvenüe","Falguière","Pasteur","Volontaires","Vaugirard","Convention","Porte de Versailles","Corentin Celton","Mairie d'Issy"],
	"13": ["Asnières - Gennevilliers - Les Courtilles","Les Agnettes","Gabriel Péri","Mairie de Clichy","Porte de Clichy","Brochant"," Saint-Denis - Université","Basilique de Saint-Denis","Saint-Denis - Porte de Paris","Carrefour Pleyel","Mairie de Saint-Ouen","Garibaldi","Porte de Saint-Ouen","Guy Môquet","La Fourche","Place de Clichy","Liège","Saint-Lazare","Miromesnil","Champs-Elysées - Clemenceau","Invalides","Varenne","Saint-François-Xavier","Duroc","Montparnasse - Bienvenüe","Gaîté","Pernety","Plaisance","Porte de Vanves","Malakoff - Plateau de Vanves","Malakoff - Rue Etienne-Dolet","Châtillon - Montrouge"],
	"14": ["Mairie de Saint-Ouen","Saint-Ouen","Porte de Clichy ","Pont Cardinet","Saint-Lazare","Madeleine","Pyramides","Châtelet","Gare de Lyon","Bercy","Cour Saint-Émilion","Bibliothèque François Mitterrand","Olympiades"],
}
//MD
// fonction qui appelle l'API pour horaire, menu déroulant polyvalent
function getAPI(){
	var ligneSel = document.getElementById("ligne");
	var stationSel = document.getElementById("station");
	
	ligneSel.onchange = function() 
	{	
		    station.length = 1;
		if (ligneSel.value != 0)
			stationSel.getElementsByTagName("option")[0].text = "Choisissez une station";
		else
			stationSel.getElementsByTagName("option")[0].text = "Choisissez une ligne";
		var stations = stationObject[ligneSel.value]
		for (var i = 0; i < stations.length; i++) {
			stationSel.add(new Option(stations[i], stations[i]),null);
		}
	}
	stationSel.onchange = setInterval(function()
	{
		if (ligneSel.value == "0" || stationSel.value == "")
		{
			console.log("no call to API");
			return;
		}
		var url = "https://api-ratp.pierre-grimaud.fr/v4/schedules/metros/"+ligne.value.toString()+"/"+stationSel.value +"/A%2BR"
		$.get(url, callBackGetSuccess).done(function() {
			//alert( "second success" );
		})
		.fail(function() {
			console.log("error horaire")
		})
		.always(function() {
			//alert( "finished" );
		});
	}, 100); //Intervalle ici en ms
}
//JS
//Trafic
var GetSuccess = function(data) {
	console.log("Api Trafic", data);
	t1.innerHTML = data.result.metros[0].message;
	t2.innerHTML = data.result.metros[1].message;
	t3.innerHTML = data.result.metros[2].message;
	t3b.innerHTML = data.result.metros[3].message;
	t4.innerHTML = data.result.metros[4].message;
	t5.innerHTML = data.result.metros[5].message;
	t6.innerHTML = data.result.metros[6].message;
	t7.innerHTML = data.result.metros[7].message;
	t7b.innerHTML = data.result.metros[8].message;
	t8.innerHTML = data.result.metros[9].message;
	t9.innerHTML = data.result.metros[10].message;
	t10.innerHTML = data.result.metros[11].message;
	t11.innerHTML = data.result.metros[12].message;
	t12.innerHTML = data.result.metros[13].message;
	t13.innerHTML = data.result.metros[14].message;
	t14.innerHTML = data.result.metros[15].message;

}
// fonction appel api pour trafic
function trafic() {
	setInterval(function()
	{
		var url = "https://api-ratp.pierre-grimaud.fr/v4/traffic/metros"
		$.get(url, GetSuccess).done(function() {
			//alert( "second success" );
		})
		.fail(function() {
			console.log("error traffic")
		})
		.always(function() {
			//alert( "finished" );
		});
	}, 1000); //Intervalle ici en ms
}
//JS











//fonction éxécuté au démarrage de la page
window.onload = function()
{
	document.getElementById("defaultTab").click();
	getAPI();
	//var cur;
	/*tablinks = document.getElementsByClassName("tablink");
	for (var i = 0; i < tablinks.length; i++)
		if (tablinks[i].style.display == "block")
			cur = tab*/
	//if (cur.innerHTML == "Trafic") 
	trafic();
}
//JS
