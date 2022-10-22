import { myData as data } from './../data.js';
import { newLine } from '../helpers.js';
const opts = {
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

const padding = 24;
const sidebarwidth = (opts.page.width / 3) - (padding * 2);
const mainWidth = opts.page.width - sidebarwidth - 130;

const imgpath = 'resources/rs/';





const generatePage1 = (doc) => {
    generateHeader(doc);
    generateSideBar(doc);
    generateExperience(doc);
    generateEducation(doc);
};

const generateSideBar = (doc) => {
    doc.x = 0;
    doc.y = 200;
    doc.x += padding;

    doc.font(robotoBoldItalic);
    doc.fontSize(medium);
    doc.text('Objective', { width: sidebarwidth, align: 'center' });

    newLine(doc)
    doc.font(robotoRegular);
    doc.fontSize(small);

    doc.text(data.objective, { width: sidebarwidth, align: 'justify' });

    newLine(doc);
    doc.font(robotoBoldItalic);
    doc.fontSize(medium);
    doc.text('Tech Stack / Skills', { width: sidebarwidth, align: 'center' });

    newLine(doc)
    doc.font(robotoRegular);
    doc.fontSize(small);



    let ySave = doc.y
    let index = 0;
    let currentX = doc.x;
    let currentY = ySave;
    for (let skill of data.skills) {
        if (index % 2 === 0 && index === Math.ceil(data.skills.length / 2)) {
            currentX = 125;
            currentY = ySave;
        }
        doc.text(skill.name, currentX, currentY);

        currentY += 14;
        index++;
    }

    doc.x = padding;

    newLine(doc);
    doc.font(robotoBoldItalic);
    doc.fontSize(medium);
    doc.text('Trainings Attended', { width: sidebarwidth, align: 'center' });

    newLine(doc)
    doc.font(robotoRegular);
    doc.fontSize(small);

    for (let training of data.trainings) {
        doc.fontSize(small);
        doc.text(training.name);
        doc.fontSize(small - 2);
        doc.text(training.description);
        newLine(doc);
    }

    newLine(doc);
    doc.font(robotoBoldItalic);
    doc.fontSize(medium);
    doc.text('Personal Info', { width: sidebarwidth, align: 'center' });

    newLine(doc);
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

    newLine(doc);
    doc.font(robotoBoldItalic);
    doc.fontSize(medium);

    doc.text('Interests', { width: sidebarwidth, align: 'center' });

    newLine(doc);
    doc.font(robotoRegular);
    doc.fontSize(small);

    doc.text(data.interests, { width: sidebarwidth, align: 'justify' });

    newLine(doc);
    doc.font(robotoBoldItalic);
    doc.fontSize(medium);
    doc.text('Character References', { width: sidebarwidth, align: 'center' });

    newLine(doc);
    doc.font(robotoBold);
    doc.fontSize(small);
    // doc.text('Dr. Jose P. Rizal');
    doc.font(robotoRegular);
    doc.text('- available upon request -');
};

const generateExperience = (doc) => {
    doc.x = (opts.page.width / 3) + padding;
    doc.y = 200;

    doc.font(robotoBoldItalic);
    doc.fontSize(large);
    doc.text('Experience');

    newLine(doc);

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
            newLine(doc);
            doc.x = xSave;
        });
    });
    newLine(doc);
};

const generateEducation = (doc) => {
    doc.x = (opts.page.width / 3) + padding;

    doc.font(robotoBoldItalic);
    doc.fontSize(large);
    doc.text('Education');

    newLine(doc);

    data.education.map((item) => {
        doc.font(robotoBold);
        doc.fontSize(medium);
        doc.text(item.school);
        doc.fontSize(10);
        doc.text(item.course + ' (' + item.duration + ')');
        newLine(doc);
    });
};


const generateHeader = (doc) => {
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
    newLine(doc);
    doc.font(robotoBold);
    doc.text(data.position);
    doc.font(robotoRegular);
    doc.text(data.emailAddress);
    doc.text(data.mobileNumber);

};

export const primaryLayout = (doc) => {
    doc.fontSize(medium);

    doc.strokeColor('#00838f');
    doc.lineWidth(1);
    doc.moveTo(213, 60).lineTo(213, opts.page.height).stroke();

    doc.fillColor('#212121');

    generatePage1(doc);
}