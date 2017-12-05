import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BlogsDataPage } from '../blogsdata/blogsdata';
// import { BlogsDataPage } from '../pages/blogsdata/blogsdata';

@Component({
  selector: 'page-blogs',
  templateUrl: 'blogs.html'
})
export class BlogsPage {
	blogsdata;

  constructor(public navCtrl: NavController) {
	  	this.blogsdata = [  
				   {
				      "BlogImage":"assets/img/blogs/divya-shakti-blog.jpg",
				      "BlogIcon":"assets/img/blogs/logo.jpg",
				      "BlogTitle":"Divya Shaktiya Bhavya Parampare",
				      "BlogContent":"The holy place Jidaga, Mukti Mandir Mugulkhod and holy place Lachchan are the icons of communal harmony in the world. A divine Jewel persist in this holy tradition. It is miracle and worldwide. The traditional heritage of all these Matt’s is beyond caste, creed and religion. The great saint of Lachchan Shri Siddhalingeshwar Maharaj hails from Panchal, Shri Yallalingeshwar Mahaprabhuji from Mugulkhod is from Halumata, and Shri Shadakshari Shivayogi Siddarameshwar Mahaswamiji was a Mahajangama. This practice is internalized. Both are one and the same, i.e. expressions and practices. A glimpse over devotees itself is a testimony for rich heritage and vividness in the religion. Amidst of all these the ShriMatt maintains its own uniqueness and sanctity. The practice of Mahadasoha or Nityaprasada is of world level and highly appreciated. All people are served on the same footings. It represents the harmony free from religious practices and divisions which recalls the age old Basava Kalyana practices. The people feel the unity principle.The glimpse over the way of life led by Shri. Siddhalingeshwar Maharaj, Shri Yallalingeshwar Mahaprabhuji and Shri Shadakshari Shivayogi Siddarameshwar Mahaswamiji reflects that they were self realized souls. They never thought of their self, lived for well being of the human beings. Their presence could be seen and experienced in presence of their soul and energy floating around the world. We have missed only the physical body. The present Peethadipati Shri. Shadakshari Shivayogi Dr. Murugharajendra Mahaswamiji (affectionately known as Appaji) is embodying all three uniqueness. The celebration like Birthday and Guruvandana of Shri. Shadakshari Shivayogi Dr. Murugharajendra Mahaswamiji are mere to pronounce social welfare, communal harmony, spiritual awakening programs. The function of this kind brings together the people of all community and move towards “Live and let live ” principles of the world. The present 101 mass marriages celebration is for the welfare of the poor to eradicate the superfluous expenditures related to marriages. The ever accepted simple marriage practices are upheld by this function.SIDDHASHRI prashasthi is awarded every year to an individual who have served the society and excelled themselves in various walks of life. This award represents a cheque of Rs. 1.00 Lakh, a Gold Medal, and a certificate in appreciation of their services. The broad ideas and model services of Appaji at the younger age are worth mentioning. Pujya Appaji is always calm and quite with ‘Kayaka’ Principle. The creation of healthy society is the motto with social concern. With weapon of peace he solves the social problems with ease.Pujya Appaji consoles with his divine voice the people who have suffered heavily during the natural calamities by meeting their needs with essentials. Unending efforts are made by Mahaswamiji to enhance social harmony and sound society. It is quite essential in the present society that acceptance of all without prejudices by following the Basavanna’s principles “ Eevanarav Eevanarav endenisade, eeva nammava eeva nammava endenisidante”i.e. the ill practices of the society such as discrimination based on race, caste and creed are to be abolished completely.In the recognition of his humanitarian contributions, farsightedness and Nobel practices of human values Shri. Shadakshari Shivayogi Murugharajendra Mahaswamiji was conferred with and Honorary Doctorate Degree by Gulbarga University in its 30th annual convocation 2011-12. This has remained an ever cherishing moment amongst all the devotees of ShriMatt. "
				   },{
				      "BlogImage":"https://lh3.googleusercontent.com/-dbOVG19DsC8/Wib6secVKZI/AAAAAAAAAf8/_4ex3zzOYG4Hpy2lRyvs7MPIOcbbNV0QgCL0BGAYYCw/h1245/2017-12-05.jpg",
				      "BlogIcon":"assets/img/about-guru.jpg",
				      "BlogTitle":"ಭವ್ಯ ಪರಂಪರೆಯ ದಿವ್ಯ ಚೇತನರು",
				      "BlogContent":"ಲೌಕಿಕ-ಅಲೌಕಿಕ, ತ್ಯಾಗ-ಬೋಗ, ಐಹಿಕ-ಪಾರಮಾರ್ಥಿಕ ಇವುಗಳ ಅರ್ಥ ಸಂಪೂರ್ಣವಾಗಿ ಅರಿತವನೇ ಸಂತ, ಶರಣ, ಋಷಿ, ಸತ್ಪುರುಷರ. ಮುಗಳಖೋಡ ಮುಕ್ತಿ ಮಂದಿರದ ಶ್ರೀ ಯಲ್ಲಾಲಿಂಗರು ತಮ್ಮ ಕಠಿಣ ಸಾಧನೆ ಹಾಗೂ ಧೀರ್ಘ ತಪಸ್ಸಿಗೆ ಹೆಸರಾದವರು. ಅವರೊಬ್ಬ ದಾರ್ಶನಿಕರು, ಅಪ್ರತಿಮ ಮೇದಾವಿಗಳು. ಈ ಜಗತ್ತೆ-ದೇವನ ಮನೆ, ನಾವು ಬಾಡಿಗೆದಾರರೆಂದು ಬದುಕಿದರೆ ಮಾತ್ರ ನಿಜ ಜ್ಞಾನ ಬರುವುದು,  ಅವನೇ ಮಹಾತ್ಯಾಗಿ, ಬದುಕೆ ನೆಮ್ಮದಿ ಎಂದರಿತವರು."+  
"ಈ ಮನೆ ನನ್ನದಲ್ಲ, ಈಶ್ವರನ ಪ್ರಸಾದದಿಂದ ತಯ್ಯಾರಾಗಿದ್ದು ಎಂದು ಯಾರು ಅರಿತುಕೊಳ್ಳುತ್ತಾರೋ, ಅಂಥವರಿಗೆ ರಕ್ತದೊತ್ತಡ ಹಾಗೂ ಮಧುಮೇಹದಂಥ (ಬಿ.ಪಿ.ಶುಗರ) ರೋಗ ಇರುವುದಿಲ್ಲ. ಎಲ್ಲವೂ ನಾನೇ ಮಾಡಿದ್ದು, ಎಂದರೆ, ಅಹಂಕಾರ ಭಾವಬಾರುವುದು. ಇಂಥವರು ದೇವರ ಸಮೀಪ ಹೋಗಲು ಸಾಧ್ಯವಿಲ್ಲ. ಒಮ್ಮೆ ಗುರುಗಳು ತಮ್ಮ ಶಿಷ್ಯರಿಗೆ ಯಾರಾದರು ದೇವರ ಸಾಮಿಪ್ಯಕ್ಕೆ ಹೋಗುವಿರಾ? ಎಂದರು. ಆಗ ಕನಕದಾಸರು ನಾ ಹೋದರು ಹೋಗಬಹುದು! ಎಂದರು. ಈ ಮಾತನ್ನು ಯಲ್ಲಾಲಿಂಗ ಮಹಾರಾಜರು ಆಗಾಗ ಭಕ್ತವೃಂದಕ್ಕೆ ತಿಳಿಹೇಳುತ್ತಿದ್ದರು."+  
"ನಾ, ನಾನು, ನನ್ನದು, ನನ್ನಿಂದಲೇ, ಎಲ್ಲವೂ ನನಗಾಗಿ ಅಂದ ಮೇಲೆ ಎಲ್ಲಿದೇ ನೆಮ್ಮದಿ!! ಇದು ವಿಶ್ವ ಪ್ರಸಿದ್ಧ ಮಾತು. ಇಂತಹ ಅಮೋಘ ತತ್ವಗಳಿಂದ ಜನರನ್ನು ಎಚ್ಚರಿಸಿದವರೇ ಅದ್ಯಾತ್ಮ ಚಿಂತಕರು, ದೇವಸ್ವರೂಪರು ಅವರೇ ಮುಗಳಖೋಡದ ಯಲ್ಲಾಲಿಂಗರು, ಅದಕ್ಕಾಗಿ ಅವರಿಗೆ ಭಕ್ತ ಸಮುದಾಯ ಗೌರವಿಸುತ್ತದೆ. ಮೊದಮೊದಲಿಗೆ ಮಣ್ಣಿನ ಮಡಿಕೆಗಳನ್ನು ಖರೀದಿಸಿ ಮಹದಾಸೋಹವನ್ನು ಪ್ರಾರಂಭಿದ ಆ ದಿನಗಳು, ಅವರೆಸಗಿದ ನೈಜ ಘಟನೆಗಳು ಇಂದಿನ ದಿನಮಾನಗಳಲ್ಲಿ ಪವಾಡದಂತೆ ತೋರಿದೆಯಲ್ಲ!"+  
"ಮುಗಳಖೋಡ ಮುಕ್ತಿ ಮಂದಿರ ಇದು ಶ್ರೀಗಳವರು ಭಕ್ತ ಸಮುದಾಯಕ್ಕೆ ತೋರಿದ ಕೃಪಾ ಕಟಾಕ್ಷ. ಸಮಾಜದ ಎಲ್ಲ ಸಂಸ್ಯೆಗಳಿಗೂ ಅಜ್ಞಾನವೇ ಮೂಲಕಾರಣ ಇದರ ಪರಿಹಾರಕ್ಕೆ ಶಿಕ್ಷಣವೇ ರಾಮ ಬಾಣವೆಂದು, ಕುಲವನ್ನು ಲೆಕ್ಕಿಸದೆ, ಜಾತಿಮಾತದ ಪರಧಿಯನ್ನು ಮೀರಿ ಎಲ್ಲರನ್ನು ತಮ್ಮ ಬಾಂಧವ್ಯದ ತೆಕ್ಕೆಯಲ್ಲಿ ಸೇರಿಕೊಂಡರು. ಅವರ ಕಣ್ಣಿಗೆ ಗೋಚರವಾದದ್ದು ಕೇವಲ ಹಸಿದ ಹೊಟ್ಟೆಗಳು, ವಿದ್ಯೆಗೆ ತುಡಿದು ಮನಸ್ಸುಗಳು. ಇದರಿಂದಾಗಿ ಅವರು ನಿಂತ ನೆಲ ಪವಿತ್ರ ಕ್ಷೇತ್ರವಾಯಿತು. ಕಂಡ ಕನಸು ದಿವ್ಯಾನುಭವವಾಯಿತು. ಅವರ ದೃಢ ನಿರ್ಧಾರ, ಸಂಕಲ್ಪ ಶಕ್ತಿಯಿಂದಾಗಿ ಅವರು ಮುಟ್ಟಿದ್ದೆಲ್ಲ ಅಕ್ಷಯ ಪಾತ್ರೆಯಾಯಿತು."+  
"ಅವರ ಮಾತೃಹೃದಯದ ಸ್ಪಟಿಕಸದೃಶ ಅಂತ: ಕಾರಣದ ದಿವ್ಯ ಪ್ರಭೆಯ ಹೆಜ್ಜೆಗುರುತಗಳಲ್ಲಿ ತಮ್ಮ ಬಾಲ ಶ್ರೀಮಂತಿಕೆಯನ್ನು ಕಂಡು ಕೊಂಡವರ ಸಂಖ್ಯೆ ಅಪಾರ. ಅವರು ದುರಹಂಕಾರಿಯನ್ನು ನಿರಹಂಕಾರಿಯಾನ್ನಾಗಿಸುವ ಪಾವನ ಸಂಜೀವಿನಿ. ಶಿವಪರ ಚಿಂತನೆಯ ಸರಳ ಪಾವನಮೂರ್ತಿ. ಕರ್ನಾಟಕ ಕಂಡ ಆನುಪಮ ಮಹಿಮಾನ್ವಿತರು. ಪರಹಿತಕ್ಕೆ ಜೀವನವನ್ನೇ ಮುಡುಪಾಗಿಟ್ಟ ಕಾರುಣ್ಯ ಸಿಂಧು, ಮನ ವಚನ ಒಂದಾದ ನಗೆ ಮೊಗದ ಸಂತ. ದುಡುಮೆಯಲ್ಲಿ ದೇವರನ್ನು ಕಂಡ ಕಾಯಕಯೋಗಿ. "+  
"  ಶ್ರಿಗಳವರದು ಸರಳೆಯ ದ್ಯೋತಕವಾದ ಕವಿ ತೊಡುಗೆ  ತಲೆಯಮೇಲೆ ಕಂಬಳಿ ಮುಸುಕಿನೆಳೆತ, ಕೊರಳಲ್ಲಿ ನಿರ್ಮಲ ರುದ್ರಾಕ್ಷಿ ಮಾಲೆ, ಹಣೆಯಲ್ಲಿ ವಿಭೂತಿ, ಕಾಲಿನಲ್ಲಿ ಪಾದರಕ್ಷಿ, ಮೀನುಗವ ತೇಜೋವಯ ನಯನ ಕಾಂತಿ, ಮಗುವಿನಂಥ ಮುಗ್ಧ ಮನಸ್ಸು, ಮೃದುಮಧುರ ಮಾತಿನ ಕಲೆ, ನಡೆನುಡಿಯಲ್ಲಿ ಏಕರೂಪತೆ, ಎಲ್ಲರಲ್ಲಿ ಆತ್ಮೀಯತೆ, ಹದತಪ್ಪದ ಸಮಚಿತ್ತತೆ, ಪ್ರಸನ್ನತೆ, ಬಿಂಕು ಬಿಗುಮಾನವಿರದ ನಿರಹಂಕಾರ. ಮನೋಭಾವ ಇಂತಹ ಸದ್ಗುಣ ಸಮಪನ್ನತೆ ಅವರನ್ನು ಮುಗಳಖೋಡದ ಶ್ರೀಮಠದ ಕೀರ್ತಿ ಪತಾಕೆ ಹಾರಿಸಿರುವುದು ಎಲ್ಲರ ಗೌರವ ಮೆಚ್ಚುಗೆಗೆ ಪಾತ್ರವಾಗಿರುವ ಸಂತಸದ ಸಂಗತಿ. ಸಕಲ ಜೀವಾತ್ಮರಿಗೆ ಲೇಸನ್ನೇ ಬಯಸುವದರ ಜೊತೆಗೆ ಮಾಡಿದೆನೆಂಬುದರ ಕಿಂಚಿತ್ತೂ ನೆನಪಿರದ ನಿರಾಳವಾಗಿರುವ ಅವರ ಸ್ವಭಾವ, ಇದು ನಾಡಿನ ಸೌಭಾಗ್ಯ. . . . . "
				   },{
				      "BlogImage":"https://lh3.googleusercontent.com/-qjyFryCC36A/Wib9CC6zW-I/AAAAAAAAAgA/LG6k2O-g8WoOawdl80CectQINCZy5oCvQCL0BGAYYCw/h1245/2017-12-05.jpg",
				      "BlogIcon":"https://lh3.googleusercontent.com/-8vTqx5pe5i8/Wib-PO5B1YI/AAAAAAAAAgI/j0pttpClY3Q2xMaXntMLeq3FqEndzeJGgCL0BGAYYCw/h1050/2017-12-05.jpg",
				      "BlogTitle":"ಧರೆಗಿಳಿದ ಭಗವಂತ",
				      "BlogContent":"ಮಿರಗಿ ಗ್ರಾಮದಲ್ಲೊಂದು ಹಾಲುಮತ ಮನೆತನ, ಸ್ಥಿತಿವಂತರಲ್ಲದಿದ್ದರು ಹೃದಯ ಸಂಪನ್ನ ಶಿವಪ್ಪ ಸಾದ್ವಿಷಿರೋಮಣಿ ಕಾಶಿಬಾಯಿ ಮನೆಯ ಯಜಮಾನರು. ಜಟಿಂಗರಾಯ ಅವರ ಆರಾಧ್ಯ ದೇವರು. ಈ ದಂಪತಿಯರಿಗೆ ಮಕ್ಕಳಿಲ್ಲವೆಂಬ ಚಿಂತೆ. ಜಟಿಂಗರಾಯನ ಧ್ಯಾನದಲ್ಲಿ ತಲ್ಲಿನಾಳದಳು, ಹೀಗೆ ಕಾಶಿಬಾಯಿ ಕಳೆದಳು ಒಂದು ವರ್ಷ. ಕೂಡಿಬಂತು ತಾಯಿಯ ಜೀವನದ ಅತ್ಯಂತ ಶುಭದಿನ."+  
"1886 ಇಸ್ವಿ ಸೆಪ್ಟೆಂಬರ್ ತಿಂಗಳ 13, ಸೋಮವಾರದಂದು ಜಗವನ್ನೇ ಬೆಳಗಲಿರುವ ದಿವ್ಯಜ್ಯೋತಿಯನ್ನು ಧರಗೆ ನೀಡಿದಳು. ಮಗುವಿನ ಮೈಕಟ್ಟನ್ನು ನೋಡಿ ಮನೆ ಮಂದಿಯೆಲ್ಲ ವಿಸ್ಮಯ ಭರಿತರಾದರೂ. ಯಲ್ಲಪ್ಪ ಎಂಬ ಪ್ರಖ್ಯಾತ ನಾಮದಿಂದ ಎಲ್ಲರೂ ಹಾಡಿ ಹೊಗಳಲು ಪ್ರಾರಂಭಿಸಿದರು. ಮುಂದೆ ಈತ ಎಲ್ಲರ ತಂದೆ ಯಲ್ಲಾಲಿಂಗ ಎನಿಸಿಕೊಂಡ."+  
"ಈತ ಸಾಮಾನ್ಯ ಮಗುವಲ್ಲ, ಅಸಾಧಾರಣ ಗುಣ, ಲಕ್ಷಣ ತುಂಬಿ ತುಳುಕುತ್ತಿತ್ತು. ಸಾಧು ಸಂತರನ್ನು ಕಂಡರೆ ಯಲ್ಲಾಲಿಂಗರಿಗೆ ಅದೇನೋ ವಿಶೇಷ ಆಸಕ್ತಿ, ಕೈಗೆ ಸಿಕ್ಕಿದ್ದು ದಾನಮಾಡುವ ಪ್ರವರ್ತಿ. ವಜ್ರಕಾಯದ ಯಲ್ಲಾಲಿಂಗರಿಗೆ ಕುಸ್ತಿ ಆಟ ಬಲು ಇಷ್ಟ ಬೆಳಗಿನಿಂದ ಸಾಯಂಕಾಲದ ವರೆಗೆ ಕುರಿಗಳನ್ನು ಕಾಯ್ದು-ರಾತ್ರಿ ಯಾಗುವದಕ್ಕಿಂತ ಮುಂಚೆ ಹಟ್ಟಿಗೆ ಅಟ್ಟಿ, ಊರ ಗರಡಿ-ಮನೆಯಲ್ಲಿ ಕುಸ್ತಿ ಆಡುತ್ತಿದ್ದರು. ಬಡತನದ ಬವಣೆಯನ್ನು ದೂರಗೊಳಿಸಲು ಯಲ್ಲಾಲಿಂಗರು ಗ್ರಾಮದ ಕುಲಕರ್ಣಿಯವರ ಮನೆಯಲ್ಲಿ ಜೀತಕ್ಕಾಗಿ ನಿಂತರು. ಮುಗ್ದಸ್ವಭಾವದ ಅವರು ಸದಾ ಮೌನವಾಗಿ ಕಾಯಕದಲ್ಲಿ ಕೈಲಾಸ ಕಂಡ ಶರಣರಂತೆ ಬದುಕ ತೊಡಗಿದರು."+  
"ಯಲ್ಲಾಲಿಂಗರ ದೃಷ್ಟಿಯಲ್ಲಿ ಮದುವೆಯೆಂಬುವುದು ದೇಹ ಸಂಬಂಧ ಹೆಂಡತಿಯನ್ನು ಕಟ್ಟಿಕೊಂಡು ಒದ್ದಾಡುದಕ್ಕಿಂತ ಪರಶಿವನ ನಾಮಸ್ಮರಣೆ ಮಾಡುತ್ತ ನಿಜಾನಂದದಲ್ಲಿ ಆನಂದವಾಗಿ ಇರಲು ಸದಾ ಮೌನಿಯಾಗಿ ನಡೆದರು. ಭಾವಸಮಾಧಿಯ ಜೊತೆಗೆ ಆನಂದ ಸಮಾಧಿಯಲ್ಲಿ ತೇಲುತ್ತ ಲಗ್ನ ಮಾಡಿಕೊಳ್ಳುವ ಗೋಜಿಗೆ ಹೋಗಲಿಲ್ಲ. ಆದರೆ ವಿಧಿಲಿಖಿತ! ದೇವರನ್ನು ಕಾಣುವ ಹಂಬಲ. ಒಳ್ಳೆಯ ಗುರುವನ್ನು ಪಡೆಯುವ ಕಾತುರಕ್ಕೆ ಅಡ್ಡಿಯುಂಟಾಗಿ ಮಾಯಾಪರದೆಯ ಮುಸುಕಿಗೆ ಶರಣಾದರು. ತಾಯಿ-ತಂದೆಯರ ಒತ್ತಡಕ್ಕೋ ಪುರ ಪ್ರಮುಖರ ಮನವೊಲಿಕೆಗೋ ಲಗ್ನಕ್ಕಾಗಿ ಒಪ್ಪಿಗೆ ನೀಡಿದರು."+  
"ಅದೇ ಊರಿನ ಕನ್ಯಾರತ್ನ ಹೊನ್ನಮ್ಮನನ್ನು ತನ್ನ ಮಗನಿಗೆ ತೆಗೆದುಕೊಳ್ಳುವ ಆಪೇಕ್ಷ ಈಡೇರಿಸಿಕೊಳ್ಳಲು ಶ್ರೀ ಯಲ್ಲಾಲಿಂಗರ ತಾಯಿ-ತಂದೆಯವರಿಗೆ ಒಂದು ಮಹಾಯುದ್ಧವನ್ನೇ ಮಾಡಿದ ಹಾಗಾಯಿತು. ಅಂತೂ ಮಿರಗಿ ಗ್ರಾಮದ ತಮ್ಮ ಸ್ವಗ್ರಹದಲ್ಲಿ ಭವ್ಯವಾದ ಹಂದರವನ್ನು ನಿರ್ಮಿಸಿ ಅಕ್ಷತಾರೋಹಣ ನೆರೆವೆರಿಸಿದರು. ಯಲ್ಲಾಲಿಂಗರು ಬರುಬರುತ್ತಾ ತೀರ ಮೌನಿಯಾದರು, ಯಾವಾಗಲೂ ಅಂತರ್ಮುಖಿಯಾಗಿ ಪರಶಿವನ ಧ್ಯಾನದಲ್ಲಿ ಇರುವುದನ್ನು ಕಂಡ ತಾಯಿ-ತಂದೆಯವರು ನಿರಾಶೆಗೊಂಡರು."+  
"  ತಮಗಿದ್ದ ಅಂಗೈ ಅಗಲ ಹೊಲದಲ್ಲಿ ಯಲ್ಲಾಲಿಂಗರ ತಮ್ಮ ಮಹಾದೇವಪ್ಪ ಒಕ್ಕಲುತನ ಮಾಡುತ್ತಿದ. ಇಬ್ಬರು ಕೂಡಿ ಆವರ್ಷ ತೊಗರಿ ರಾಶಿ ಮಾಡಿದರು. ತೊಗರೆ ಕಾಳು ಒಂದು ಚೀಲದಲ್ಲಿ ತುಂಬಿ ಚಕ್ಕಡಿಯ (ಗಾಡಿ) ತರಲು ಮಹಾದೇವಪ್ಪ ಊರ ಕಡೆಗೆ ಹೊರಟನು, ತೊಗರಿ ಚೀಲದ ಪಕ್ಕದಲ್ಲಿ ಯಲ್ಲಾಲಿಂಗರು ಇದ್ದರು, ಇದನು ಕಂಡ ದಾರಿ ಹೊಕರು ಅಲ್ಲಿಗೆ ಬಂದು ತೊಗರಿ ಚೀಲ ಎತ್ತಿಕೊಂಡು ಹೋದರು. ಮನೆಯಿಂದ ಹಿಂದುರಿಗಿ ಬಂದ ಮಹಾದೇವಪ್ಪ ಚೀಲ ಎಲ್ಲಿ? ಎಂದು ಕೇಳಲಾಗಿ ಆಗ ಯಲ್ಲಾಲಿಂಗರು ಯಾರೋ! ಬಂದ್ರು, ಹೆಗಲಕೊಟ್ಟು ಓದ್ರು ನಾನೇನು ಮಾಡ್ಲಿ! . ಸಿಟ್ಟಿಗೆದ್ದ ತಮ್ಮ ಮಹಾದೇವಪ್ಪ, ನೀನೊಬ್ಬ ಶುದ್ಧ-ಪೆದ್ದ! ನಿನ್ನ ಉದರಾಗುಣಕ್ಕೇನು ಕಡಿಮೆಯಿಲ್ಲ, ನೀನು ಜೀತದಾಳಾಗಿ ದುಡುಯುವುದೇ ವಾಸಿ  ಗದರಿಸಿದನು. ಆಗ ಯಲ್ಲಾಲಿಂಗರು ಊರ ಕುಲ್ಕರ್ಣಿಯವರ ಹತ್ತಿರ ಹೋಗಿ ನನ್ನ ತಮ್ಮ ಮಹಾದೇವಪ್ಪ ಪೆದ್ದ ಅಂದಾನ! ಅವನಿಗೆ ಕರ್ದು ಬುದ್ದಿ ಹೇಳ್ರಿ. ಈ ಮಾತುಗಳು ಶ್ರೀ ಯಲ್ಲಾಲಿಂಗರದ್ದು ಮಗುವಿನಂತಸ್ವಭಾವದ (ಮನಸ್ಸು) ಎನ್ನುವದಕ್ಕೆ ಸಾಕ್ಷಿ...."
				   }/*,
				   {
				      "BlogImage":"assets/img/SiddalingaAppaji.jpg",
				      "BlogIcon":"assets/img/SiddalingaAppaji.jpg",
				      "BlogTitle":"BlogTitle 2",
				      "BlogContent":"Sri Sri Yallalingeshwara Punnyashram, Mukthi Mandir Mutt, At Po. Mugalkhod, Tq:Raibagh, Dist. Belgaum-591235."
				   }*/
		   ];
	}

	goToBlogDetail(bdata){
    if (!bdata) bdata = {};
    this.navCtrl.push(BlogsDataPage,{
      data:bdata
    });
  }
}