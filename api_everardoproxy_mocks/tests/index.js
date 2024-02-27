var reporter = require('cucumber-html-reporter');
 
var options = {
        theme: 'bootstrap',
        jsonFile: 'features/resultados/cucumber_report.json',
        output: 'features/resultados/cucumber_report.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        metadata: {
            "Test Environment": "STAGING",
            "API Proxy": "everardoproxy/",
            "App Version":"v1",
            "Platform": "Apigee X"
        }
    };
 
    reporter.generate(options);