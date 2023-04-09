const puppeteer = require('puppeteer');
const fs = require('fs');

const linkedInUrl = 'https://www.linkedin.com/jobs/search/?currentJobId=YOUR_JOB_ID_HERE';

(async () => {
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.setUserAgent(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36'
    );
    await page.goto(linkedInUrl, { waitUntil: 'networkidle2' });

    // Click the "Show more" button
    const showMoreSelector = '[data-tracking-control-name="public_jobs_show-more-html-btn"]';
    await page.waitForSelector(showMoreSelector);

    await page.evaluate((selector) => {
      const button = document.querySelector(selector);
      if (button) {
        button.click();
      }
    }, showMoreSelector);

    // Wait for the content to load after clicking the button
    await page.waitForTimeout(3000);

    // Extract the job description
    const jobDescriptionSelector = '.description__text--rich .show-more-less-html__markup';
    const jobDescription = await page.$eval(jobDescriptionSelector, (element) => element.innerHTML);

    // Save the job description to a text file
    fs.writeFileSync('job_description.txt', jobDescription);
    console.log('Job description saved to job_description.txt');

    await browser.close();
  } catch (error) {
    console.error('Error fetching LinkedIn page:', error.message);
  }
})();
