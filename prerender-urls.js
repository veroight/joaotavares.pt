const { generateFileList } = require('./src/crawler');
const { join } = require('path');

const projects = generateFileList(join(__dirname, 'content')).nodes;


module.exports = function() {

    const pages = [
        {
            url: '/'
        },
        {
            url: '/about'
        },
        {
            url: '/projects',
            projects 
        }
        
    ]

    return pages;
};