const { generateFileList } = require('./src/crawler');
const { join } = require('path');
const parseMD = require('parse-md').default;
const fs = require('fs');

const projects = generateFileList(join(__dirname, 'content'));


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

    projects.edges.map(edge=>{
        let content;
        if (edge.format === 'md'){
           content = parseMD(fs.readFileSync(edge.path, 'utf8'));
        
            pages.push({
                url: `/projects/${edge.id}`,
                content
            });

        }

    });



    return pages;
};