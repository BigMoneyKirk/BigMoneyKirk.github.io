# MessingAround
An attempt to make my Kirkland Enterprises website, but this is the template. I don't take this one as seriously as my previous ventures.

Monday, October 14, 2019 7:06 PM EST
This site has been coming along so nicely, and at an exponential rate! I love it. I have been developing from my two personal laptops (The
Alienware mostly, and the x360 HP Spectra). I have been praying for insight with the direction of the application as well. The Lord has
been showing me some pretty fascinating stuff!

The Word of God, social media, journaling, connecting, loving, sharing, caring, growing, developing. This application will have it all!

# Deployment Preparation

1) Use and check environment variables
2) Polish and test code
3) `ng build --prod` - uses ahead-of-time compilation 
4) Deploy build artifacts(generated files) to ***static host*** - becasue it's only HTML, JS, and CSS

# How to Build
If deploying this application to a new app server for the first time, then here are the run through steps to ensure Messing Around is working properly. If you have already conducted these steps, process to the next section.

1) Check to see if node.js is installed in my project
    
    a) On my local computer, open a command line and go to the path my project is stored in.
    
    b) Type `node -v` to ensure node is installed. My current version of node is v10.14.1

2) To install the firebase-tools package in order to initialize our project, type `npm i -g firebase-tools@latest` into the command line.

3) Log into Firebase via the command line: `firebase login`

[comment]: <sdoggkirk@gmail.com>

4) Initialize the firebase project: `firebase init`

5) Go down to `Hosting: Configure and deploy Firebase Hosting sites` using the arrow keys and select it using the space key. Then press Enter.

6) Select the project I want to connect to the static app server.

7) Enter credentials:

    a) What do you want to use as your public directory? (public): dist/{name of my project}

    b) Configure as a single-page app (rewrite all urls to /indext.html)? (y/N): y

    c) File dist/{name of my project} already exists. Overwrite? (y/N): n

 until seeing “What language would you like to use to write Cloud Functions?”. Select TypeScript.

#### This is the next section to deploy to the pre-existing Firebase app server.

1) `ng build --prod`
2) `firebase deploy`

# Outline
1) [Home Page](#homepage)
2) [Bible](#bible)
3) [Journal](#journal)
4) [Social Media](#socialmedia)
5) [Blog](#blog)
6) [Bookmarks](#bookmarks)
7) [Passions](#passions)
8) [About](#about)
9) [Websites](#websites)

## <a id="homepage">Home Page</a>

## <a id="bible">Bible</a>

## <a id="journal">Journal</a>

## <a id="socialmedia">Social Media</a>

## <a id="blog">Blog</a>

## <a id="bookmarks">Bookmarks</a>

## <a id="passions">Passions</a>

## <a id="about">About</a>

## <a id="websites">Websites</a>