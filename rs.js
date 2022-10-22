// RESUME APP V2.0
const fs = require('fs');
const { forEach } = require('methods');
const PDFDocument = require('pdfkit');

var opts = {
	'page': {
		'width': 612,
		'height': 792,
		'margin': {
			'top': 36,
			'bottom': 36,
			'left': 36,
			'right': 36
		}
	}
};

// COLORS
const black = '#111'
const white = '#FFF'

// SIZES
const small = 11;
const medium = 14;
const large = 20;

//FONTS
const sai = "fonts/gfonts/Saira-Regular.ttf";
const robotoBoldItalic = "fonts/gfonts/Roboto-BoldItalic.ttf";
const robotoRegular = "fonts/gfonts/Roboto-Regular.ttf";
const robotoBold = "fonts/gfonts/Roboto-Bold.ttf";
const abel = "fonts/Abel-Regular.ttf";



const pageOptions = {
  'size': [opts.page.width, opts.page.height],
  'margins': {'top': 0, 'left': 0, 'right': 0, 'bottom': 0},
  'bufferPages': true
};

const padding = 24;
const sidebarwidth = (opts.page.width / 3) - (padding * 2);
const mainWidth = opts.page.width - sidebarwidth - 130;

const imgpath = 'resources/rs/';
const target_output_dir = './output/';

const data = {
	name: 'JASON CRUZ',
	nickname: 'Jay',
	birthDate: 'Jan 11, 1990',
	age: '31',
	position: 'Software Engineer',
	emailAddress: 'cruzjasoneric@gmail.com',
	mobileNumber: '+639175564101',
	address: 'Marikina City',
	objective: 'to contribute to the company with full competence while harnessing and developing my skills',
	civilStatus: 'Single',
	religion: 'Roman Catholic',
	mbti: 'INFJ',
	interests: 'Music, Technology, Visual Arts, Anime, Video Games',
	experiences: [
		{
			company: 'Metrobank',
			info: [
				{
					position: 'Programmer Analyst (Nov 2019 - present)',
					description: 'Became part of the development team for Metrobank\'s Online Account Onboarding and Online Updating of Personal Info',
				},
			],
		},
		{
			company: 'Vertere Global Solutions, Inc.',
			info: [
				{
					position: 'Consultant (July 2018 - Nov 2019)',
					description: 'Deployed at Metrobank as a project-based employee; became involved with the development of a Bulk Account Opening and Payroll System (web application) for clients whose payroll are under Metrobank',
				},
			],
		},
		{
			company: 'CoreData Research',
			info: [
				{
					position: 'Web Developer (Dec 2016 - July 2018)',
					description: 'Developed a report generation tool using javascript; provided custom programming for online surveys',
				},
				{
					position: 'Junior Web Developer (Nov 2015 - Dec 2016)',
					description: 'Helped in the design of online survey layouts, corporate website maintenance, database administration',
				},
			],
		},
	],
	education: [
		{
			school: 'University of the Philippines Los Baños',
			duration: '2006 - 2015',
			course: 'BS Computer Science',
		},
		{
			school: 'Marikina Science High School',
			duration: '2002 - 2006',
			course: 'Secondary Education',
		},
	],
	skills: [
		{
			name: 'HTML5',
			score: 5,
		},
		{
			name: 'CSS3',
			score: 4,
		},
		{
			name: 'Javascript (General)',
			score: 5,
		},
		{
			name: 'React JS',
			score: 4.5,
		},
		{
			name: 'SQL',
			score: 4.5,
		},
	],
	trainings: [

	],
	awards: [

	],
};

const newPage = () => {
	doc.addPage(pageOptions);
}

const newLine = () => {
	doc.moveDown()
};

const generatePage1 = () => {
	generateHeader();
	generateSideBar();
	generateExperience();
	generateEducation();
};

const generateSideBar = () => {
	doc.x = 0;
	doc.y = 200;
	doc.x += padding;

	doc.font(robotoBoldItalic);
	doc.fontSize(medium);
	doc.text('Objective', { width: sidebarwidth, align: 'center' });

	newLine()
	doc.font(robotoRegular);
	doc.fontSize(small);

	doc.text(data.objective, { width: sidebarwidth, align: 'justify' });

	newLine();
	doc.font(robotoBoldItalic);
	doc.fontSize(medium);
	doc.text('Personal Info', { width: sidebarwidth, align: 'center' });

	newLine();
	const saveY = doc.y;
	doc.font(robotoRegular);
	doc.fontSize(small);

	doc.text('Birthdate:');
	doc.text('Age:');
	doc.text('Address:');
	doc.text('Civil status:');
	doc.text('Religion:');
	doc.text('MBTI Personality:');

	doc.x += 100;
	doc.y = saveY;

	doc.text(data.birthDate);
	doc.text(data.age);
	doc.text(data.address);
	doc.text(data.civilStatus);
	doc.text(data.religion);
	doc.text(data.mbti);

	doc.x = padding;

	newLine();
	doc.font(robotoBoldItalic);
	doc.fontSize(medium);
	
	doc.text('Interests', { width: sidebarwidth, align: 'center' });
	
	newLine();
	doc.font(robotoRegular);
	doc.fontSize(small);

	doc.text(data.interests, { width: sidebarwidth, align: 'justify' });

	newLine();
	doc.font(robotoBoldItalic);
	doc.fontSize(medium);
	doc.text('Character References', { width: sidebarwidth, align: 'center' });

	newLine();
	doc.font(robotoBold);
	doc.fontSize(small);
	// doc.text('Dr. Jose P. Rizal');
	doc.font(robotoRegular);
	doc.text('- available upon request -');
};

const generateExperience = () => {
	doc.x = (opts.page.width/3) + padding;
	doc.y = 200;

	doc.font(robotoBoldItalic);
	doc.fontSize(large);
	doc.text('Experience');
	
	newLine();

	const xSave = doc.x;
	const xIndent = doc.x + 12;

	data.experiences.map((item) => {
		doc.font(robotoBold);
		doc.fontSize(medium);
		doc.text(item.company);
		doc.fontSize(small);
		item.info.map((entry) => {
			doc.x = xIndent
			doc.font(robotoBold);
			doc.text(entry.position);
			doc.font(robotoRegular);
			doc.text(entry.description, { width: mainWidth - 20, align: 'justify' });
			newLine();
			doc.x = xSave;
		});
	});
	newLine();
};

const generateEducation = () => {
	doc.x = (opts.page.width/3) + padding;

	doc.font(robotoBoldItalic);
	doc.fontSize(large);
	doc.text('Education');
	
	newLine();

	data.education.map((item) => {
		doc.font(robotoBold);
		doc.fontSize(medium);
		doc.text(item.school);
		doc.fontSize(10);
		doc.text(item.course + ' (' + item.duration + ')');
		newLine();
	});
};


const generateHeader = () => {
	doc.fontSize(36);
	doc.font(abel);

	doc.image(imgpath + '1photo.png', 136, 22, { scale: 0.5 });
	doc.x = 306;
	doc.y = 42;
	doc.text(data.name, { characterSpacing: 2 });

	doc.strokeColor('#00838f');
	doc.lineWidth(1);

	doc.moveTo(doc.x, doc.y).lineTo(opts.page.width, doc.y).stroke();

	doc.fontSize(10);
	newLine();
	doc.font(robotoBold);
	doc.text(data.position);
	doc.font(robotoRegular);
	doc.text(data.emailAddress);
	doc.text(data.mobileNumber);

};

const doc = new PDFDocument(pageOptions);

// create header and footer everytime a new page is added
/*
doc.on('pageAdded', function(){
	doc.font(cg)
	doc.fontSize(normal)
	doc.fillColor(black)

	pageNum = (doc.bufferedPageRange().start + doc.bufferedPageRange().count)
	doc.text(pageNum, doc.page.width - opts.page.margin.right, doc.page.height - opts.page.margin.top + (opts.page.margin.top/2))

	doc.lineWidth(3)

	doc.moveTo(opts.page.margin.left, doc.page.height - opts.page.margin.top).lineTo(opts.page.margin.left + writablewidth, doc.page.height - opts.page.margin.top).stroke('#dedede')
})
*/

// PAGE 1

doc.fontSize(medium);

doc.strokeColor('#00838f');
doc.lineWidth(1);
doc.moveTo(213, 60).lineTo(213, opts.page.height).stroke();

doc.fillColor('#212121');

generatePage1();


// PAGE 2
// newPage();

// doc.font(sai)
// doc.fontSize(medium)
// doc.fillColor(black)

// doc.text("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")

doc.pipe(fs.createWriteStream(target_output_dir + data.name + ' - RESUME.pdf'))

// Finalize PDF file
doc.end('All rights reserved.')















