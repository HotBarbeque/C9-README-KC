
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    const Badge = `![Badge](https://img.shields.io/static/v1?label=License&message=${license}&color=$blue)`
  } else {
    const Badge = '';
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}
if (license !== 'None') {
  const link = `https://img.shields.io/static/v1?label=License&message=${license}&color=$blue`
} 
else {
  const link = '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    const section = `This project is using ${Badge}`
  }
  else {
    const section = `This project is not licensed`
  }
}


module.exports = generateMarkdown;
