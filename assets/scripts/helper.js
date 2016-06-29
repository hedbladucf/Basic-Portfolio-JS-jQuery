var skills = '<div class="col-md-3"><img src="assets/images/skills/%data%.png" alt="my skills" class="img-responsive img-circle"></div>';

for(var i = 1; i <= 12; i++)
	$('.skills-section-images').append(skills.replace('%data%', i));

var experience = '<li><h4>%data% &nbsp; &nbsp; &nbsp; ( %data1% ) </h4><br><h5>%data2%</h5></li><hr>';
var experience_array = [
	{
		name: 'First Company',
		years: '2012-2015',
		info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
	},
	{
		name: 'Second Company',
		years: '2015-2016',
		info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
	},
	{
		name: 'Third Company',
		years: '2016-2017',
		info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
	}
];

var experience_new = '';
for(var i = 0; i < experience_array.length; i++)
{
	experience_new = experience.replace('%data%', experience_array[i]['name']);
	experience_new = experience_new.replace('%data1%', experience_array[i]['years']);
	experience_new =  experience_new.replace('%data2', experience_array[i]['info']);
	$('.experience-section-info').append(experience_new);
}

var projects = '<li><h3>%data%</h3><div class="row"><div class="col-md-3"><img src="assets/images/%data1%.jpg" alt="project-images" class="img-responsive"></div><div class="col-md-9"><h3>Language(s): %data2%</h3><h5>%data3%</h5></div></div></li><br><hr>';

var projects_array = [
	{
		name: 'Selenium Project',
		img: 'rockpaper',
		language: 'Java',
		info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
	},
	{
		name: 'Adventure Game',
		img: 'rpg',
		language: 'Java',
		info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
	},
	{
		name: 'Online Portfolio',
		img: 'ucfinfo',
		language: 'HTML5, CSS3, JavaScript',
		info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
	}
];

var projects_new = '';

for(var i = 0; i < projects_array.length; i++)
{
	projects_new = projects.replace('%data%', projects_array[i]['name']);
	projects_new = projects_new.replace('%data1%', projects_array[i]['img']);
	projects_new = projects_new.replace('%data2%', projects_array[i]['language']);
	projects_new = projects_new.replace('%data3%', projects_array[i]['info']);
	$('.projects-section-info').append(projects_new);
}
