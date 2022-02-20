Hello, here is my submission for the task, you can find below how to run the project,
what improvements I would focus on given more time, and what decisions I took to fit in 4h

## Context

The task was to create a form to subscribe to a newsletter using Mailchimp. 
The main requirements were to make the contact page responsive and to plug the 
form with Mailchimp API. Bonus would have been to add animations to make the page more stylish.  


## Quick start

1. **Add the mailchimp url**

    Create a `.env` file at the root of the project and populate it with the following while making sure to replace with
your own url

   ```
   GATSBY_MAILCHIMP_SUBSCRIBE_URL='https://[XXX].list-manage.com/subscribe/post?u=[XXX]&amp;id=[XXX]'
   ```

2. **Install the node_modules**

   Navigate into the directory and run command below

    ```shell
    npm install
    ```

3. **Run the project**

    If not already in the directory, navigate there and run command below

    ```shell
    gatsby develop
    ```

4. **Open the browser**

    The site is now accessible at `http://localhost:8000`

## Timeline

- **30 minutes** to create the HTML and add the svg logos
- **25 minutes** to add mailchimp integration
- **2 hours 30** to style everything with css and add responsiveness (30min for global css, 1h for desktop, 30min for tablet, 20min for mobile, 10min to fix what got broken)
- **25 minutes** to do the SelectCountry component
- **10 minutes** to add the fonts

Not included in the 4h total :
- **30 minutes** to crete git repo, browse figma, create Mailchimp account and browse doc
- **10 minutes** to publish on Netlify
- **20 minutes** to write this README from the notes taken during the task

## Improvements

There are a few significant features that I did not get the time to implement 
by lack of time. Here they are in decreasing order by most important to least

* Make the response from Mailchimp and loading state prettier
* Fix appearance on Safari of checkbox and select
* Handle failure cases (add error status on Inputs)
* Handle all potential states of inputs and buttons (e.g. error, active, focused, pressed...)
* Hover animations (e.g. on links, buttons, etc for better ux and appearance)
* Better hamburger menu (+ cross icon when open)
* Appearance on screens bigger than 1920px
* Fix arrow in select component to make it prettier
* Fix appearance of checkbox to make it like in figma
* Propel in text instead of svg for accessibility reasons
* Logo size to fix (varies in size between mobile and desktop)


* Code improvements and refactoring
  * Split index into several files (a given file for styles, more components, a bit less copy paste)
  * Add all palette into global css (e.g. typography values, spacing)
  * Put colors in variable for reuse (e.g. assign #242424 to a --charcoal variable in :root pseudo-class for better reusability )
  * Margin component (instead of the MB24, MB40, etc)








## Decisions

To create a functioning version in the allocated 4 hours I took a few 
decisions that would have been either fixed with more time given 
or at least discussed with designers.
* Phone number as a text input for now (would probably need 30 more minutes to 
handle the country code and country selection interaction)
* Keep background grey everywhere (background is white for tablets and mobiles in figma)
* Added a star to Email to indicate the field is required (with more time I would 
have made the field highlighted when trying to submit while incorrect) 
