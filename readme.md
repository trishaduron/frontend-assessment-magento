Front-end Assessment
---
This repository contains my hands-on front-end assessments. You can access the 2 exercises by opening the index.html file from the root folder. It contains the link for each exercise, you will be redirected to the page once you click.
---
Exercise 1
---
For this exercise, I used HTML for the document structure. For the styling, I used LESS preprocessor and a little bit of Bootstrap for utility classes used for layout and spacing.

The LESS files are being compiled with the use of Grunt, which is a node task runner that can be configured to detect file changes and in the case for LESS files, it will automatically compile each changes into the CSS file.

##### LESS files used and their purpose
1. _general.less - it contains the general styling of the whole page or website. Mostly used for generic classes and global styling changes.
2. _variables.less - it contains variable names and its values that is used althroughout the site/page. Mostly consist of values for theme colors, fonts, margins, etc. With this file, it will be easier to update the overall look of the site/page.
3. _styles.less - this is where the less files are imported and compiled so that we will only have 1 LESS file in which the CSS file will generate.
4. _homepage.less - it contains the specific styles used in a specific page or template. 

Exercise 2
---

This exercise contains my implementation for Tabs (Desktop) and Accordion (Mobile). I used the data.json file to populate the contents of the tabs/accordion. The script for fetching the values can be found in js/script.js. For the styling, I used plain CSS then a script is also added in js/script.js for the tab and accordion behavior.

###### Bonus points
* Explain why the result of `('b' + 'a' + + 'a' + 'a').toLowerCase()` is `banana`.

Answer:
The result of the expression `('b' + 'a' + + 'a' + 'a').toLowerCase()` being 'banana' is due to the combination of JavaScript's type coercion and the string manipulation functions involved.

`'b' + 'a'` combines two string, which should have an output of`'ba'`. Then for `'a' + + 'a'` the second 'a' is preceded by a unary `+` operator. This means that when you use the `+` operator before a string, JavaScript will try to convert it into a number. So, `'a' + + 'a'` becomes `'a' + NaN`, where `NaN` stands for "Not-a-Number." `'baNaN' + 'a'` results in `'baNaNa'`.
Then `.toLowerCase()` is called on `'baNaNa'`, which converts the entire string to lowercase, resulting in `'banana'`.

