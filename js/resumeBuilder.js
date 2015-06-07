var bio = {	"name" : "Jenelle Birchmeier",	"role" : "Front-end Developer",	"contacts" : {		"mobile" : "602-769-5226", 		"email" : "jenbirch10@gmail.com",		"github" : "jenbirch10",		"twitter" : "@jenbirch10",		"location" : "Chicago"	},	"biopic" : "images/me.jpg",	"welcomeMessage" : "Hello, here is why you should hire me.",	"skills" :["HTML", "CSS", "JavaScript", "Responsive Design", "Photography"]}var displayBio = function() {	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);	$("#header").prepend(formattedRole);	var formattedName = HTMLheaderName.replace("%data%", bio.name);	$("#header").prepend(formattedName); 	if(bio.skills.length > 0) {		var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);		$("#header").append(formattedPic);		var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);		$("#header").append(formattedMessage);		$("#header").append(HTMLskillsStart);	for(skill in bio.skills) {		var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);		$("#skills").append(formattedSkill);		};	};}displayBio();var displayContacts = function() {	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);	$("#topContacts").append(formattedMobile);	$("#footerContacts").append(formattedMobile);	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);	$("#topContacts").append(formattedEmail);	$("#footerContacts").append(formattedEmail);	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);	$("#topContacts").append(formattedGithub);	$("#footerContacts").append(formattedGithub);	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);	$("#topContacts").append(formattedTwitter);	$("#footerContacts").append(formattedTwitter);}displayContacts();var work = {	"jobs" : [	{		"employer": "Cook County",		"title" : "Grant Analyst",		"location": "Chicago, IL",		"startDate": "Feb 2015",		"endDate": "Current",		"description": "Manage Accounts Payable for all Emergency Management Grant invoices; act as single point of contact for vendor and sub-grantee questions and concerns regarding payments; assist sub-grantees with grant application process."	},	{		"employer": "Arizona Department of Child Safety",		"title": "Business Operations Project Manager",		"location": "Phoenix, AZ",		"startDate": "June 2014",		"endDate": "Feb 2015",		"description": "Assist Business Administrator with organization and management of over 2,500 employees; acted as financial lead on various projects of a programmatic and/or business nature; supported implementation of new programs to improve the child welfare system; analyzed business functions and made recommendations for process improvements."		},		{		"employer": "Arizona Department of Child Safety",		"title": "Principal Managing Analyst",		"location": "Phoenix, AZ",		"startDate": "Apr 2013",		"endDate": "June 2014",		"description": "Led team of five highly skilled financial and data analysts who controlled a budget of over $700 million; represented the team and program during meetings with senior Department leadership and the Governor’s office to advocate for additional funding and support"	},	{		"employer": "Arizona Department of Child Safety",		"title": "Senior Financial Analyst",		"location": "Phoenix, AZ",		"startDate": "Aug 2012",		"endDate": "Apr 2013",		"description": "Assisted Principal Analyst with management of daily operations for a team of 3 Financial Analysts; Provided oversight of daily financial processes, including weekly payroll, annual grant and fund reconciliation and closeout, and financial reporting; promoted to Principal Managing Analyst."	},	{		"employer": "Arizona Department of Child Safety",		"title": "Financial Analyst",		"location": "Phoenix, AZ",		"startDate": "Jan 2012",		"endDate": "Aug 2012",		"description": "Conducted detailed data and financial analysis of historical, current and future expenditure and revenue trends; reviewed and analyzed pending Federal and State legislative and policy changes with an emphasis on possible fiscal impacts; created and presented monthly reports on surpluses or shortfalls within respective programs; assisted in the development and submission of the Fiscal Year 2014 Child Welfare Budget Request, resulted in over $50 million of additional ongoing funding; promoted to Senior Financial Analyst"	}]};var displayWork = function() {	for(job in work.jobs) {		$("#workExperience").append(HTMLworkStart);		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);		var formattedEmployerTitle = formattedEmployer + formattedTitle;		$(".work-entry:last").append(formattedEmployerTitle);		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);		$(".work-entry:last").append(formattedLocation);		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].startDate+"-"+work.jobs[job].endDate);		$(".work-entry:last").append(formattedDates);		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);		$(".work-entry:last").append(formattedDescription);	}}displayWork();var projects = {	"projectList" : [	{		"title" : "Portfolio Site",		"dates" : "April 2015",		"description": "Basic portfolio site with links to various projects and personal photography. Site created using Bootstrap framework with HTML/CSS.",		"images" : "images/portfolio.png"	},	//{	//	"title" : "Classic Arcade Game",	//	"dates" : "June 2015 - July 2015",	//	"description" : "Recreated the classic arcade game Frogger using JavaScript."		//"images" : ""	//}	]};projects.display = function() {	for(project in projects.projectList) {	$("#projects").append(HTMLprojectStart);	var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projectList[project].title);	$(".project-entry:last").append(formattedTitle);	var formattedDates = HTMLprojectDates.replace("%data%", projects.projectList[project].dates);	$(".project-entry:last").append(formattedDates);	var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projectList[project].description);	$(".project-entry:last").append(formattedDescription);	var formattedImage = HTMLprojectImage.replace("%data%", projects.projectList[project].images);	$(".project-entry:last").append(formattedImage);	}}projects.display();var education = {	"schools" : [	{		"name": "Michigan State University",		"location": "East Lansing, MI, US",		"degree": "BA",		"dates":"August 2005 - May 2009 ",		"major": "Business Management",		"url": "https://www.msu.edu"	}	],	"onlineCourses" : [	{		"title" : "Programming for Everybody (Python)",		"school" : "University of Michigan (Coursera)",		"dates" : "January 2015 - April 2015",		"url" : "https://www.coursera.org/account/accomplishments/records/Na4k6G6gxfGcR757"	},	{		"title" : "Intro to HTML and CSS",		"school" : "Udacity",		"dates" : "April 2015",		"url" : "https://www.udacity.com/course/intro-to-html-and-css--ud304-nd"	},	{		"title" : "JavaScript Basics",		"school" : "Udacity",		"dates" : "May 2015 - June 2015",		"url" : "https://www.udacity.com/course/javascript-basics--ud804-nd"	}]};var displaySchool = function() {	for(school in education.schools) {		$("#education").append(HTMLschoolStart);		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);		$(".education-entry:last").append(formattedName + formattedDegree);				var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);		$(".education-entry:last").append(formattedDates);		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);		$(".education-entry:last").append(formattedLocation);		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);		$(".education-entry:last").append(formattedMajor);		}}displaySchool();var displayClasses = function() {	$("#education").append(HTMLonlineClasses);	for(course in education.onlineCourses) {		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);		$(".education-entry:last").append(formattedTitle + formattedSchool);				var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);		$(".education-entry:last").append(formattedDates);		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);		$(".education-entry:last").append(formattedURL);	};}displayClasses();  $("#mapDiv").append(googleMap);