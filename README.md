# ZemogaUiTest

# Styles and UI
* I didn't use a UI framework like Angular material or bootstrap because I want to show you my skills with scss, but I have had the opportunity to work with the two frameworks mentioned and I consider that I have good experience with both.
* I used BEM in order to design the css classes.
# REDUX
* This is just one screen but I wanted to use redux in order to show you that I now how to use it.
* I Know how to use ngrx-data too but I didn't like to use it because I wanted to show you the way how I usually create all redux structure including unit testing.

# TESTING
* I did unit testing in the majority of the project, I just didn't test in report.service and storage.class because I considere both are part of a fake behavior.
* If you want to see the test coverage please run npm test, Note that the branch coverage is not very good (it is over 72%) because I did not test the files I said above.
* I did one test in deep called home-content.component.deep.spec.ts, the idea of this file is to make a kind of integration test testing, in this case I use spyOn for the methods into the report.service because this behavior is fake, but If but if i had done a complete behavior I had used HttpClientTestingModule and I would have mocked the http responses.

# Nodejs
* I did not do the backend side with the nodejs because the position I am applying to is UI oriented and I did not have enough time to do the backend side.


# Layout
* I did not finish the layout because I couldn't dedicate enough time but I would have created components for each section, for the footer I would have created a component in the core layer 