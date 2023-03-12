import React, { useEffect, useState } from 'react';

export const WebDev = (props) =>{
    return(
        <><div className='' style={{backgroundColor: '#c1dde9'}} >
        <div>
            <h1 className='font-bold mx-6 my-10 text-5xl'>Web Development</h1>
        </div>
        <div>
            <p className='mx-10 my-12 text-xl '>Web development is the coding or programming that enables website functionality, per the owner's requirements. It mainly deals with the non-design aspect of building websites, which includes coding and writing markup.

Web development ranges from creating plain text pages to complex web-based applications, social network applications and electronic business applications.

The web development hierarchy is as follows:

Client-side coding.
Server-side coding.
Database technology.

Most web devs use Hypertext Markup Language (HTML), Cascading Style Sheets (CSS), and JavaScript to develop websites.

HTML defines the basic framework of a website – the foundation upon which everything else is built upon. It forms the blocks that define a page’s layout, format, and critical components. Although it is theoretically possible to code a website on HTML only, it will be just a barebone site with no functions unless it’s enriched with CSS and JavaScript. Also, even simple style modifications such as changing the color of a button require a lot of coding to be executed using HTML only.

CSS is used to style the content of a website using a small set of files that are kept across the entire site. This way, whenever a change must be applied to say, consistently change the color of all the buttons found in every page of the website, a web dev needs to edit only a single file in CSS.

The JavaScript programming language is used to take care of the interactivity of many unique website elements. It can be used to create effects that alter the appearance of icons and drop-down menus, add animations, games, and other interactive elements.

Web developers are usually divided into front-end devs, back-end devs, and full-stack devs. A front-end dev takes care of all the visual aspects of the website (layout, navigation bar, etc.), its interactivity, and binds together all its elements.

Back-end devs take care of less visible tasks that ensure the website runs smoothly, such as managing the website’s hosting services, database, and applications. Back-end devs might need to engineer solution to server issues by using additional server-side languages such as Python, Ruby, Java, and PHP.

Full-stack devs are developers able to do both front-end and back-end tasks at the same time.

</p>
        </div>

        <div className='mx-20 my-10' >
        <button type="button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Learn More About Web Technolody</button>
        </div>

        <br /><br />
        </div>
        </>
    );
}