# Personal website-Yusheng Guo

**Website deployed on Heroku:**
<https://personal-website-yusheng.herokuapp.com/index.html>

Welcome to my website! This site is as part of the Project 1 in CS5610, summer 2021.

### Website structure and contents
* This website has a landing page defined in `index.html`, including a welcome message and a minimal information about what this website is. Using the navbar fixed on the bottom of this page, visitors can navigate themselves to other internal and external links.

![index_screenshot](https://github.ccs.neu.edu/NEU-CS5610-SU21/PersonalWebsite-YushengGuo/blob/master/screenshots/index.png?raw=true)

* From the landing page, visitors can view two internal pages, `About me` and `Publication`, using the link on the navbar.

* The `About me` page includes a short introduction of myself and a profile image of mine, followed by my education background. I took the advantage of `HTML table` to arrange the content on this page.

![aboutme_screenshot](https://github.ccs.neu.edu/NEU-CS5610-SU21/PersonalWebsite-YushengGuo/blob/master/screenshots/aboutme.png?raw=true)

* The `Publication` page lists some of my article published before I joining Khoury College. You can find the `Read more` at the end of each section. Follow that link, people will access to journal website in a new browser tab. In this part, I also used `HTML table` to arrange the text and the journal covers.

![publication_screenshot](https://github.ccs.neu.edu/NEU-CS5610-SU21/PersonalWebsite-YushengGuo/blob/master/screenshots/publication.png?raw=true)

* There are two more external links in the navbar, which can lead people to my `Instagram` and `LinkedIn`. Also, using the link at the end of the navbar, visitors can send an email to me using their default email app.

### The navbar

* I used the `CSS` styled navbar as the navigation tool throughout this whole website, with a little interactive flavor of `JQuery`. The links will be highlighted when the mouse is hovering above them (discussed in later sections).

![navbar_screenshot](https://github.ccs.neu.edu/NEU-CS5610-SU21/PersonalWebsite-YushengGuo/blob/master/screenshots/navbar_highlight.png?raw=true)

* This navbar has six links, including `Home`, `About me`, `Publication`, `Instagram`, `LinkedIn`, and `Email`. For cliking on the first three internal links, it will take the visitors to the corresponding page in the same browser tab. In contrast, the `Instagram` and `LinkedIn` will be opened in a new tab. The `Email` link allows people sending an email to me using their default email app.

* This navbar is responsive to browser size. It will shirink to a more compact form if the browser width is below `1050px`. This accomodation to devices with smaller screen will be discussed later in the `Responsiveness` section.

![mobile_index](https://github.ccs.neu.edu/NEU-CS5610-SU21/PersonalWebsite-YushengGuo/blob/master/screenshots/mobile_index.png?raw=true)

### Interactive components

* As mentioned before, when the mouse is hovering on the navbar, the corresponding link will be highlighted. And it will go back to normal if the mouse moves away from the link. I implemented this functionality using `JQuery`.

![navbar_screenshot](https://github.ccs.neu.edu/NEU-CS5610-SU21/PersonalWebsite-YushengGuo/blob/master/screenshots/navbar_highlight.png?raw=true)

* Similarly to the navbar, if the mouse is hovering on the `Read more` at the end of each section on the `Publication` page, it will be highlighted as well.

![publication_highlight](https://github.ccs.neu.edu/NEU-CS5610-SU21/PersonalWebsite-YushengGuo/blob/master/screenshots/readmore_highlight.png?raw=true)

* The navbar can be to compact form due to the narrow browser size. The full navbar will pop up if people click the menu button (defaulted as three horizontal lines in `CSS`).

![mobile_navbar](https://github.ccs.neu.edu/NEU-CS5610-SU21/PersonalWebsite-YushengGuo/blob/master/screenshots/mobile_navbar.png?raw=true)

### Responsiveness
