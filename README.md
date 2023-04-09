# LinkedIn Job Description Scraper

This script is a LinkedIn job description scraper that fetches job descriptions from LinkedIn using Puppeteer, a headless browser library. The script navigates to a LinkedIn job page, clicks the "Show more" button to reveal the full job description, and then saves the description to a local text file.

## Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)

## Requirements

- Node.js (version 12 or higher)
- NPM (version 6 or higher)

## Installation

1. Clone the repository or download the script file.

```
git clone https://github.com/JovenSoh/linkedin-scraper.git
```

2. Navigate to the project directory:

```
cd linkedin-scraper
```

3. Install the required dependencies:

```
npm install puppeteer
```

## Usage

1. Open the script file in your favorite code editor and replace the `linkedInUrl` variable value with the desired LinkedIn job URL.

```javascript
const linkedInUrl = 'https://www.linkedin.com/jobs/search/?currentJobId=YOUR_JOB_ID_HERE';
```

2. Save the changes and close the editor.

3. Run the script using the following command:

```
node scraper.js
```

4. The script will navigate to the specified LinkedIn job page, fetch the job description, and save it to a local file named `job_description.txt`.

5. The script will output the following message upon successful completion:

```
Job description saved to job_description.txt
```

If there's any error while fetching the LinkedIn page, the script will output an error message to the console.
