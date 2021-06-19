# Personal website-Yusheng Guo

**Website deployed on Heroku:**
<https://personal-website-yusheng.herokuapp.com/index.html>

Welcome to my website! This site is as part of the Project 1 in CS5610, summer 2021.

## Website structure, contents and `HTML table`
* This website has a landing page defined in `index.html`, including a welcome message and a minimal information about what this website is. Using the navbar fixed on the bottom of this page, visitors can navigate themselves to other internal and external links.

![index_screenshot](https://github.ccs.neu.edu/NEU-CS5610-SU21/PersonalWebsite-YushengGuo/blob/master/screenshots/index.png?raw=true)

* From the landing page, visitors can view two internal pages, `About me` and `Publication`, using the link on the navbar.

* The `About me` page includes a short introduction of myself and a profile image of mine, followed by my education background. I took the advantage of `HTML table` to arrange the content on this page.

![aboutme_screenshot](https://github.ccs.neu.edu/NEU-CS5610-SU21/PersonalWebsite-YushengGuo/blob/master/screenshots/aboutme.png?raw=true)

* The `Publication` page lists some of my article published before I joining Khoury College. You can find the `Read more` at the end of each section. Follow that link, people will access to journal website in a new browser tab. In this part, I also used `HTML table` to arrange the text and the journal covers.

![publication_screenshot](https://github.ccs.neu.edu/NEU-CS5610-SU21/PersonalWebsite-YushengGuo/blob/master/screenshots/publication.png?raw=true)

* There are two more external links in the navbar, which can lead people to my `Instagram` and `LinkedIn`. Also, using the link at the end of the navbar, visitors can send an email to me using their default email app.

## The navigation tool

* I used the `CSS` styled navbar as the navigation tool throughout this whole website, with a little interactive flavor of `JQuery`. The links will be highlighted when the mouse is hovering above them (discussed in later sections).

![navbar_screenshot](https://github.ccs.neu.edu/NEU-CS5610-SU21/PersonalWebsite-YushengGuo/blob/master/screenshots/navbar_highlight.png?raw=true)

* This navbar has six links, including `Home`, `About me`, `Publication`, `Instagram`, `LinkedIn`, and `Email`. For cliking on the first three internal links, it will take the visitors to the corresponding page in the same browser tab. In contrast, the `Instagram` and `LinkedIn` will be opened in a new tab. The `Email` link allows people sending an email to me using their default email app.

* This navbar is responsive to browser size. It will shirink to a more compact form if the browser width is below `1050px`. This accomodation to devices with smaller screen will be discussed later in the `Responsiveness` section.

![mobile_index](https://github.ccs.neu.edu/NEU-CS5610-SU21/PersonalWebsite-YushengGuo/blob/master/screenshots/mobile_index.png?raw=true)

## Interactive components and `JQuery`

* As mentioned before, when the mouse is hovering on the navbar, the corresponding link will be highlighted. And it will go back to normal if the mouse moves away from the link. I implemented this functionality by using `hover` in `JQuery`.

![navbar_screenshot](https://github.ccs.neu.edu/NEU-CS5610-SU21/PersonalWebsite-YushengGuo/blob/master/screenshots/navbar_highlight.png?raw=true)

* Similarly to the navbar, if the mouse is hovering on the `Read more` at the end of each section on the `Publication` page, it will be highlighted as well.

![publication_highlight](https://github.ccs.neu.edu/NEU-CS5610-SU21/PersonalWebsite-YushengGuo/blob/master/screenshots/readmore_highlight.png?raw=true)

* The navbar can be to compact form due to the narrow browser size. The full navbar will pop up if people click the menu button (defaulted as three horizontal lines in `CSS`). The links on the compact navbar can also be highlighted if the visitor clicks them. I implemented these by using `click` in `Jquery`.

![mobile_highlight](https://github.ccs.neu.edu/NEU-CS5610-SU21/PersonalWebsite-YushengGuo/blob/master/screenshots/mobile_highlight.png?raw=true)

## Responsiveness and `CSS media query`

* As discussed before, the website is responsive to the browser size, in order to enhance the readability on devices with smaller screen (less than 1050 px in width). This is achieved by taking advantage of `CSS media query`.

* The banner image on `index.html` will be replaces with a cropped one for better appearance, if the browser is resized into a smaller width (less than 1050px). At the same time, the padding of the text on this page will also be adjusted.

* The navbar will shrink to a compact form as introduced before. The full navigation menu can pop up if the visitor clicks on the menu button. (three horizontal lines on the bottom of the screen).

![mobile_navbar](https://github.ccs.neu.edu/NEU-CS5610-SU21/PersonalWebsite-YushengGuo/blob/master/screenshots/mobile_navbar.png?raw=true)

* The arrangement of `About me` and `Publication` will also be adjusted if the browser is resized into smaller size.

![mobile_aboutme](https://github.ccs.neu.edu/NEU-CS5610-SU21/PersonalWebsite-YushengGuo/blob/master/screenshots/mobile_aboutme.png?raw=true)

![mobile_publication](https://github.ccs.neu.edu/NEU-CS5610-SU21/PersonalWebsite-YushengGuo/blob/master/screenshots/mobile_publication.png?raw=true)

## One more thing

* I included a favicon!

![favicon](https://github.ccs.neu.edu/NEU-CS5610-SU21/PersonalWebsite-YushengGuo/blob/master/screenshots/favicon.png?raw=true)
