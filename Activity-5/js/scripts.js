(function(){
    var data = [
        {
            name: 'emmet', 
            description: 'Emmet is the number one code snippet tool.',
            author: 'emmetio',
            url: 'https://atom.io/packages.emmet',
            downloads: 1662209,
            stars: 2534,
            price: 10.50,
            selector: 'p1'
        },
        {
            name: 'atom-beautifly', 
            description: 'The atom-beautify package will clean up your code, and make it more readeable.',
            author: 'Glavin001',
            url: 'https://atom.io/atom-beautify',
            downloads: 4228040,
            stars: 4541,
            price: 6.75,
            selector: 'p2'
        }
    ];

    //(Atom) package constructor function
    function Package(data){
        this.name = data.name;
        this.description = data.description; 
        this.author = data.author;
        this.url = data.url;
        this.downloads = data.downloads;
        this.stars = data.stars;
        this.selector = data.selector;

        this.getFormattedDownloads = function(){
            return this.downloads.toLocaleString();
        };

        this.getFormattedStars = function(){
            return this.stars.toLocaleString();
        };
    }

    //utility functions

    //returns today's date, formatted
    var GetTodaysDate = function(){
        var today = new Date();
        return today.toDateString();    
    };

    //return DOM element by id
    var getEl = function(id){
        return document.getElementById(id);
    };

    /**
     * Writes the package object's data to the appropriate
     * DOM elements utilizing the package selector property
     * @param {*} package 
     */
    var writePackageInfo = function(package){
        //get reference to DOM elements
        var selector = package.selector,
            nameEl = getEl(selector + '-name'),
            descEl = getEl(selector+ '-description'),
            authEl = getEl(selector+ '-author'),
            downloadEl = getEl(selector+ '-downloads'),
            starsEl = getEl(selector+ '-stars');

            //write package data to DOM elements
            nameEl.textContent = package.name;
            descEl.textContent = package.description;
            authEl.textContent = package.author;
            downloadEl.textContent = package.getFormattedDownloads();
            starsEl.textContent = package.getFormattedStars();      
    };

    //write date
    dateEl = getEl('date');
    dateEl.textContent = GetTodaysDate();

    //write package data one by one
    var emmet = new Package(data[0]);
    writePackageInfo(emmet);

    var beautify = new Package(data[1]);
    writePackageInfo(beautify);
}());