import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-mutts-ashrama',
  templateUrl: 'mutts-ashrama.html'
})
export class MuttsAshramaPage {
   data;
	
  constructor(public navCtrl: NavController) {
  	 this.initializeItems();
  	 	  
	}

	initializeItems(){
		this.data = [  
   {
      "Place":"Mugalkhod",
      "Mutt_Address":"Sri Sri Yallalingeshwara Punnyashram, Mukthi Mandir Mutt, At Po. Mugalkhod, Tq:Raibagh, Dist. Belgaum-591235."
   },
   {
      "Place":"Jidga",
      "Mutt_Address":"Sri Sri Siddarameshwara Anubhava Ashram, Nava Kallyana Mutt, Sukshetra Jidga, Tq. Aland, Dt. Gulbarga-585302."
   },
   
   {
      "Place":"Bengaluru",
      "Mutt_Address":"SIDDHASHRI DHAAMA #774/6,Ananthpur Village, Near Nagarjuna College, Yelahanka, Bengaluru - 560064\n\n"
   },
   {
      "Place":"Kotnur(D)",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Kotnur (D), Tal. Dist. Gulbarga."
   },
   {
      "Place":"Solhapur",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Solhapur, Tal. Dist. Solhapur."
   },
   {
      "Place":"Khajakotnur",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Khajakotnur, Tal. Dist. Gulbarga."
   },
   
   {
      "Place":"Somalapur",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Somalapur, Tal. Dist. Gadag."
   },
   {
      "Place":"Banami",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Banami, Tal. Chittapur, Dist. Gulbarga."
   },
   {
      "Place":"Bankur",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Bankur, Tal. Chittapur, Dist. Gulbarga."
   },
   {
      "Place":"Bennur(K)",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Bennur(K), Tal. Chittapur, Dist. Gulbarga."
   },
   {
      "Place":"Chavdapur",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Chavdapur, Tal. Afjhalpur, Dist. Gulbarga."
   },
   {
      "Place":"Chittapur",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Chittapur, Tal. Chittapur, Dist. Gulbarga."
   },
   {
      "Place":"Dandoti",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Dandoti, Tal. Chittapur, Dist. Gulbarga."
   },
   {
      "Place":"Dongaon",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Dongaon, Tal. Chittapur, Dist. Gulbarga."
   },
   {
      "Place":"Halisagar",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Halisagar, Tal. Shahapur, Dist. Gulbarga."
   },
   {
      "Place":"Havnur",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Havnur, Tal. Afjhalpur, Dist. Gulbarga"
   },
   {
      "Place":"Hiroli",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Hiroli, Tal. Aland, Dist. Gulbarga."
   },
   {
      "Place":"Honna kiranagi",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Honna kiranagi, Tal. Dist. Gulbarga."
   },
   {
      "Place":"Hunasagi",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Hunasagi, Tal. Surpur, Dist. Gulbarga."
   },
   {
      "Place":"Jambaga(J)",
      "Mutt_Address":"Shri Siddarameshwar Anubhava Ashram At. Jambaga (J), Tal. Aland, Dist. Gulbarga."
   },
   {
      "Place":"Jattur",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Jattur, Tal. Sedum, Dist. Gulbarga."
   },
   {
      "Place":"Kadacharla",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Kadacharla, Tal. Sedum, Dist. Gulbarga."
   },
   {
      "Place":"Kallahangarga",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Kallahangarga, Tal. Dist. Gulbarga."
   },
   {
      "Place":"Katamdevarhalli",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Katamdevarhalli, Tal. Chittapur, Dist. Gulbarga."
   },
   {
      "Place":"Kattisangavi",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Kattisangavi, Tal. Jevargi, Dist. Gulbarga."
   },
   {
      "Place":"Karajagi",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Karajagi, Tal. Afjhalpur, Dist. Gulbarga."
   },
   {
      "Place":"Kolkunda",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Kolkunda, Tal. Sedum, Dist. Gulbarga."
   },
   
   {
      "Place":"Kottargi",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Kottargi, Tal. Aland, Dist. Gulbarga."
   },
   {
      "Place":"Kudala Hangarga",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Kudala Hangarga, Tal. Aland, Dist. Gulbarga."
   },
   {
      "Place":"Kumsi",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Kumsi, Tal. Dist. Gulbarga."
   },
   {
      "Place":"Kyatanal",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Kyatanal, Tal. Surpur, Dist. Gulbarga."
   },
   {
      "Place":"Lakshmipurvadi",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Lakshmipurvadi, Tal. Chittapur, Dist. Gulbarga."
   },
   {
      "Place":"Malaghan",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Malaghan, Tal. Chittapur, Dist. Gulbarga."
   },
   {
      "Place":"Malhabad",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Malhabad, Tal. Afjhalpur, Dist. Gulbarga."
   },
   {
      "Place":"Malkumpalli",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Malkumpalli, Tal. Sedum, Dist. Gulbarga."
   },
   {
      "Place":"Mugulagaon",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Mugulagaon, Tal. Chittapur, Dist. Gulbarga."
   },
   {
      "Place":"Narayanpur",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Narayanpur, Tal. Surpur, Dist. Gulbarga."
   },
   {
      "Place":"Nippani",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Nippani, Tal. Chittapur, Dist. Gulbarga."
   },
   {
      "Place":"Sattapattanhalli",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Sattapattanhalli, Tal. Sedum, Dist. Gulbarga."
   },
   {
      "Place":"Shrinivas Sardagi",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Shrinivas Sardagi, Tal. Dist. Gulbarga."
   },
   {
      "Place":"Udchanahatti",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Udchanahatti, Tal. Afjhalpur, Dist. Gulbarga."
   },
   {
      "Place":"Udnur",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Udnur, Tal. Dist. Gulbarga."
   },
   {
      "Place":"Mailapur",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Mailapur, Tal. Dist. Koppal."
   },
   {
      "Place":"Mushtur",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Mushtur, Tal. Dist. Koppal."
   },
   {
      "Place":"Darasgoppa",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Darasgoppa, Tal. Shrirangapattan, Dist. Mandya."
   },
   {
      "Place":"Amaravati",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Amaravati, Tal. Manvi, Dist. Raichur."
   },
   {
      "Place":"Appanadoddi",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Appanadoddi, Tal. Dist. Raichur."
   },
   {
      "Place":"Askihal",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Askihal, Tal. Dist. Raichur."
   },
   {
      "Place":"Bendoni",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Bendoni, Tal. Lingasuri, Dist. Raichur."
   },
   {
      "Place":"Ganadal",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Ganadal, Tal. Devadurg, Dist. Raichur."
   },
   {
      "Place":"Gandhi Nagar",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Gandhi Nagar, Tal.Sindanur,  Dist. Raichur."
   },
   {
      "Place":"Gunda",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Gunda, Tal.Sindanur,  Dist. Raichur."
   },
   {
      "Place":"Hunsihalhud",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Hunsihalhud, Tal. Dist. Raichur."
   },
   {
      "Place":"Kannari",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Kannari, Tal.Sindanur, Dist. Raichur."
   },
   {
      "Place":"Kengal",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Kengal, Tal.Sindanur, Dist. Raichur."
   },
   {
      "Place":"Marchatahal",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Marchatahal, Tal. Dist. Raichur."
   },
   {
      "Place":"Raichur",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Raichur, Tal. Dist. Raichur."
   },
   {
      "Place":"Sultanpur",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Sultanpur, Tal.Sindanur, Dist. Raichur."
   },
   {
      "Place":"Vaddepalli",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Vaddepalli, Tal. Dist. Raichur."
   },
   {
      "Place":"Ramavadi",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Ramavadi, Tal. Umarga Dist. Latur."
   },
   {
      "Place":"Andheri  West",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Dhanagarwadi, Juhu, Mumbai."
   },
   {
      "Place":"Balegaon",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Balegaon, Tal. Deglur, Dist. Nanded."
   },
   {
      "Place":"Bimbara",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Bimbara, Tal. Deglur, Dist. Nanded."
   },
   {
      "Place":"Deglur",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Deglur, Tal. Deglur, Dist. Nanded."
   },
   {
      "Place":"Gejjegaon",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Gejjegaon, Tal. Mukked, Dist. Nanded."
   },
   {
      "Place":"Hanuman Hipparagi",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Hanuman Hipparagi, Tal. Deglur, Dist. Nanded."
   },
   {
      "Place":"Karla(B)",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Karla (B), Tal. Billolli, Dist. Nanded."
   },
   {
      "Place":"Teerth",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Teerth, Tal. Deglur, Dist. Nanded."
   },
   {
      "Place":"Gangakhed",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Gangakhed, Tal. Dist. Parabhani."
   },
   {
      "Place":"Andevadi khurd",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Andevadi khurd, Tal. Akkalkot, Dist. Solhapur."
   },
   {
      "Place":"Chappalagaon",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Chappalagaon, Tal. Akkalkot, Dist. Solhapur."
   },
   {
      "Place":"Gorvadi",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Gorvadi, Tal. Akkalkot, Dist. Solhapur."
   },
   {
      "Place":"Hipparagi",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Hipparagi, Tal. Akkalkot, Dist. Solhapur."
   },
   {
      "Place":"Hottagi",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Hottagi, Tal. Akkalkot, Dist. Solhapur."
   },
   {
      "Place":"Nagure",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Nagure, Tal. Akkalkot, Dist. Solhapur."
   },
   {
      "Place":"Navadgi",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Navadgi, Tal. Akkalkot, Dist. Solhapur"
   },
   {
      "Place":"Shaval",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Shaval, Tal. Akkalkot, Dist. Solhapur."
   },
   
   {
      "Place":"Basav Nagar",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Basav Nagar, Tal. Dist. South Solhapur."
   },
   {
      "Place":"Gurudalli",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Gurudalli, Tal. Dist. South Solhapur."
   },
   {
      "Place":"Kunta",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Kunta, Tal. Dist. South Solhapur."
   },
   {
      "Place":"Shirval",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Shirval, Tal. Dist. South Solhapur."
   },
   {
      "Place":"Achaleri",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Achaleri, Tal. Lohar Dist. Usmanabad."
   },
   {
      "Place":"Gudebelur",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Gudebelur Muktal Mandal, Tal. Narayanpeth, Dist. Mehabub Nagar."
   },
   {
      "Place":"Gulla (B)",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Gulla (B) Muktal Mandal, Tal. Narayanpeth, Dist. Mehabub Nagar."
   },
   {
      "Place":"Gurlapalli",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Gurlapalli Muktal Mandal, Tal. Narayanpeth, Dist. Mehabub Nagar."
   },
   {
      "Place":"Mahadvarum",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Mahadvarum Muktal Mandal, Tal. Narayanpeth, Dist. Mehabub Nagar."
   },
   {
      "Place":"Maktal",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Muktal Mandal, Tal. Narayanpeth, Dist. Mehabub Nagar."
   },
   {
      "Place":"Nedgamba",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Nedgamba Muktal Mandal, Tal. Narayanpeth, Dist. Mehabub Nagar."
   },
   {
      "Place":"Avadattapur",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Avadattapur, Tal.Mannur Mandal, Dist. Medak."
   },
   {
      "Place":"Budhera",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Budhera Tal. Sadashiv peth, Dist.  Medak."
   },
   {
      "Place":"Zahirabad",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Zahirabad, Tal. Zahirabad, Dist. Medak."
   },
   {
      "Place":"Bichakunda",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Bichakunda, Tal.Bodan Mandal, Dist. Nijamabad."
   },
   {
      "Place":"Zuvari Nagar Zhari Goa",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Zuvari Nagar Zhari, Tal.Dist. Vasco, Goa."
   },{
      "Place":"Akkimardi",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Akkimardi, Tal. Mudhol Dist. Bagalkot."
   },
   {
      "Place":"Banahatti",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Banahatti, Tal. Jamakhandi Dist. Bagalkot."
   },
   {
      "Place":"Hunasikatti",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Hunasikatti, Tal. Jamakhandi Dist. Bagalkot."
   },
   {
      "Place":"Jamakhandi",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Jamakhandi, Tal. Jamakhandi Dist. Bagalkot."
   },
   {
      "Place":"Nagaral",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Nagaral, Tal. Mudhol Dist. Bagalkot."
   },
   {
      "Place":"Sharadal",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Sharadal, Tal. Dist. Bagalkot."
   },
   {
      "Place":"Tulsigeri",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Tulsigeri, Tal. Dist. Bagalkot."
   },
   {
      "Place":"Ananta Ashayanagudi",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Anantashayanagudi, Tal. Hosapeth Dist. Ballari."
   },
   {
      "Place":"Devlapur",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Devlapur, Tal. Hosapeth Dist. Ballari."
   },
   {
      "Place":"Aralimatti",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Aralimatti, Tal. Gokak,  Dist. Belgaum"
   },
   {
      "Place":"Badakundri",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Badakundri, Tal. Hukkeri,  Dist. Belgaum."
   },
   {
      "Place":"Badigvad",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Badigvad, Tal. Gokak,  Dist. Belgaum"
   },
   {
      "Place":"Belgaum",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Belgaum, Tal. Dist. Belgaum."
   },
   {
      "Place":"Dandapur",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Dandapur, Tal. Gokak,  Dist. Belgaum"
   },
   {
      "Place":"Hulkund",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Hulkund, Tal. Ramdurg,  Dist. Belgaum."
   },
   {
      "Place":"Janghatihal",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Janghatihal, Tal. Hukkeri, Dist. Belgaum."
   },
   {
      "Place":"Kalabhavi",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Kalabhavi, Tal. Bailhongal,  Dist. Belgaum."
   },
   {
      "Place":"Koligudda",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Koligudda, Tal. Raibag, Dist. Belgaum."
   },
   {
      "Place":"Mallapur",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Mallapur Tal. Gokak, Dist. Belgaum."
   },
   {
      "Place":"Sankonatti",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Sankonatti, Tal. Athani, Dist. Belgaum."
   },
   {
      "Place":"Sindikurubett",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Sindikurubett, Tal. Gokak,  Dist. Belgaum"
   },
   {
      "Place":"Tabashi",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Tabashi, Tal. Gokak, Dist. Belgaum."
   },
   {
      "Place":"Vadral",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Vadral Tal. Chikkodi, Dist. Belgaum."
   },
   {
      "Place":"Yaragatti",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Yaragatti, Tal. Hukkeri,  Dist. Belgaum."
   },
   {
      "Place":"Yarjeri",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Yarjeri, Tal. Soudatti, Dist. Belgaum."
   },
   {
      "Place":"Yarnal",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Yarnal, Tal. Hukkeri, Dist. Belgaum."
   },
   
   {
      "Place":"Aishpur",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Aicpur, Tal.  Dist. Bidar."
   },
   {
      "Place":"Bhalki",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Bhalki, Tal. Bhalki, Dist. Bidar."
   },
   {
      "Place":"Bhavani  Bijjargaon",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Bhavani Bijjargaon Tal. Aurad, Dist. Bidar."
   },
   {
      "Place":"Biri(K)",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Biri (K), Tal. Bhalki, Dist. Bidar."
   },
   {
      "Place":"Chanbol",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Chanbol, Tal.  Dist. Bidar."
   },
   {
      "Place":"Chitguppa",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Chitguppa, Tal.Humanabad, Dist. Bidar."
   },
   {
      "Place":"Halalli",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Halalli, Tal. Bhalki, Dist. Bidar."
   },
   {
      "Place":"Janti",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Janti, Tal. Bhalki, Dist. Bidar."
   },
   {
      "Place":"Kurub Kelgi",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Kurub Kelgi, Tal. Bhalki, Dist. Bidar."
   },
   {
      "Place":"Manthal",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Manthal, Tal. Basav kalyan, Dist. Bidar. Ph: 9901867562"
   },
   {
      "Place":"Muchalamba",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Muchalamba, Tal. Basav kalyan, Dist. Bidar."
   },
   {
      "Place":"Mustapur",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Mustapur, Tal.Humanabad, Dist. Bidar."
   },
   {
      "Place":"Nagur(K)",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Nagur (K), Tal. Bhalki, Dist. Bidar."
   },
   {
      "Place":"Naubad",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Naubad, Tal.  Dist. Bidar."
   },
   {
      "Place":"Ramteerth",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Ramteerth, Tal. Basav kalyan, Dist. Bidar."
   },
   {
      "Place":"Santapur",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Santapur, Tal. Aurad, Dist. Bidar."
   },
   {
      "Place":"Sastapur",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Sastapur, Tal. Basav kalyan, Dist. Bidar."
   },
   {
      "Place":"Yakamba",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Akamba, Tal. Aurad, Dist. Bidar."
   },
   {
      "Place":"Yanagunda",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Yanagunda, Tal. Aurad, Dist. Bidar."
   },
   {
      "Place":"Aski",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Aski, Tal. Sindagi, Dist. Bijapur."
   },
   {
      "Place":"Basavanbagevadi",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Basavanbagevadi, Dist. Bijapur."
   },
   {
      "Place":"Bijapur",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Bijapur, Tal. Dist. Bijapur."
   },
   {
      "Place":"Bijjaragi",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Bijjaragi, Tal. Dist. Bijapur."
   },
   {
      "Place":"Bisnal",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Bisnal, Tal. Basavanbagevadi Dist. Bijapur."
   },
   {
      "Place":"Byakud",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Byakud,  Tal. Sindagi, Dist. Bijapur."
   },
   {
      "Place":"Devarnavadagi",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Devarnavadagi, Tal. Sindagi, Dist. Bijapur."
   },
   {
      "Place":"Donur",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Donur, Tal. Basavanbagevadi Dist. Bijapur."
   },
   {
      "Place":"Golasar",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Golasar, Tal. Indi, Dist. Bijapur."
   },
   {
      "Place":"Gonasangi",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Gonasangi, Tal. Dist. Bijapur."
   },
   {
      "Place":"Honnutigi",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Honnutigi, Tal. Dist. Bijapur."
   },
   {
      "Place":"Indi",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Indi, Tal. Indi, Dist. Bijapur."
   },
   {
      "Place":"Jumnal",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Jumnal, Tal. Dist. Bijapur."
   },
   {
      "Place":"Kakkalameli",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Kakkalameli, Tal. Sindagi, Dist. Bijapur."
   },
   {
      "Place":"Kalakeri",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Kalakeri, Tal. Sindagi, Dist. Bijapur."
   },
   {
      "Place":"Mirgi",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Mirgi, Tal. Indi, Dist. Bijapur."
   },
   {
      "Place":"Muddebihal",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Muddebihal, Tal. Muddebihal Dist. Bijapur."
   },
   {
      "Place":"Rodagi",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Rodagi, Tal. Muddebihal Dist. Bijapur."
   },
   {
      "Place":"Shivanagi",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Shivanagi, Tal. Dist. Bijapur."
   },
   {
      "Place":"Shivapur",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Shivapur, Tal. Indi, Dist. Bijapur."
   },
   {
      "Place":"Amargol",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Amargol, Tal. Hubli Dist. Dharvad."
   },
   {
      "Place":"Jagalur",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Jagalur, Tal. Ron, Dist. Gadag."
   },
   {
      "Place":"Nargund",
      "Mutt_Address":"Shri Sadguru Yallalingeshwar Punyashram At. Po. Nargund, Tal. Nargund, Dist. Gadag."
   }];
  

	}
	getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.data = this.data.filter((item) => {

        return ((item['Place'].toLowerCase().indexOf(val.toLowerCase()) > -1) || (item['Mutt_Address'].toLowerCase().indexOf(val.toLowerCase()) > -1));
      })
    }
  }

}