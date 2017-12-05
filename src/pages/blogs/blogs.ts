import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutGuruPage } from '../about-guru/about-guru';

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
				      "BlogTitle":"Divya shaktiya bhavya parampare",
				      "BlogContent":"The holy place Jidaga, Mukti Mandir Mugulkhod and holy place Lachchan are the icons of communal harmony in the world. A divine Jewel persist in this holy tradition. It is miracle and worldwide. The traditional heritage of all these Matt’s is beyond caste, creed and religion. The great saint of Lachchan Shri Siddhalingeshwar Maharaj hails from Panchal, Shri Yallalingeshwar Mahaprabhuji from Mugulkhod is from Halumata, and Shri Shadakshari Shivayogi Siddarameshwar Mahaswamiji was a Mahajangama. This practice is internalized. Both are one and the same, i.e. expressions and practices. A glimpse over devotees itself is a testimony for rich heritage and vividness in the religion. Amidst of all these the ShriMatt maintains its own uniqueness and sanctity. The practice of Mahadasoha or Nityaprasada is of world level and highly appreciated. All people are served on the same footings. It represents the harmony free from religious practices and divisions which recalls the age old Basava Kalyana practices. The people feel the unity principle.The glimpse over the way of life led by Shri. Siddhalingeshwar Maharaj, Shri Yallalingeshwar Mahaprabhuji and Shri Shadakshari Shivayogi Siddarameshwar Mahaswamiji reflects that they were self realized souls. They never thought of their self, lived for well being of the human beings. Their presence could be seen and experienced in presence of their soul and energy floating around the world. We have missed only the physical body. The present Peethadipati Shri. Shadakshari Shivayogi Dr. Murugharajendra Mahaswamiji (affectionately known as Appaji) is embodying all three uniqueness. The celebration like Birthday and Guruvandana of Shri. Shadakshari Shivayogi Dr. Murugharajendra Mahaswamiji are mere to pronounce social welfare, communal harmony, spiritual awakening programs. The function of this kind brings together the people of all community and move towards “Live and let live ” principles of the world. The present 101 mass marriages celebration is for the welfare of the poor to eradicate the superfluous expenditures related to marriages. The ever accepted simple marriage practices are upheld by this function.SIDDHASHRI prashasthi is awarded every year to an individual who have served the society and excelled themselves in various walks of life. This award represents a cheque of Rs. 1.00 Lakh, a Gold Medal, and a certificate in appreciation of their services. The broad ideas and model services of Appaji at the younger age are worth mentioning. Pujya Appaji is always calm and quite with ‘Kayaka’ Principle. The creation of healthy society is the motto with social concern. With weapon of peace he solves the social problems with ease.Pujya Appaji consoles with his divine voice the people who have suffered heavily during the natural calamities by meeting their needs with essentials. Unending efforts are made by Mahaswamiji to enhance social harmony and sound society. It is quite essential in the present society that acceptance of all without prejudices by following the Basavanna’s principles “ Eevanarav Eevanarav endenisade, eeva nammava eeva nammava endenisidante”i.e. the ill practices of the society such as discrimination based on race, caste and creed are to be abolished completely.In the recognition of his humanitarian contributions, farsightedness and Nobel practices of human values Shri. Shadakshari Shivayogi Murugharajendra Mahaswamiji was conferred with and Honorary Doctorate Degree by Gulbarga University in its 30th annual convocation 2011-12. This has remained an ever cherishing moment amongst all the devotees of ShriMatt. "
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
    this.navCtrl.push(AboutGuruPage);
  }
}