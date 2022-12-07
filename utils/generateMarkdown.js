// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // calling the functions above to get what we need to format properly
  // renderLicenseBadge(license);
  // renderLicenseLink(license);
  // renderLicenseSection(license);

  // var userData = [{
  //   header: [data.title, data.license],
  //   description: data.description,
  //   tableOfContents: [data.installation, data.usage, data.credits, data.license],
  //   installation: data.installation,
  //   usage: data.usage,
  //   credits: data.credits,
  //   license: [data.license] // will need to add the badge and link  to this section
  //   badge
  // }]

  //formate userData
  function formatData(data) {
    return `# ${data.title}/n
    ## Description /n${data.description}/n
    ## Table of Contents (Optional) /n${data.installation}${data.usage}${data.credits}${data.license}/n
    ## Installation /n${data.installation}/n
    ## Usage /n${data.usage}/n
    ## Credits /n${data.credits}/n
    ## License /n${data.license}/n
    ## Badges /n${data.badge}/n
    ## Features /n${data.features}/n
    ## Contact Me & How to Contribute /n${data.email}/n
    ## Tests /n${data.tests}`
  }

  //calling function
  formatData();

  // return userData;
  // questions.push(userData);
  // console.log(questions);
  ;
}

  module.exports = { 
    generateMarkdown, 
    renderLicenseBadge, 
    renderLicenseLink, 
    renderLicenseSection
  };