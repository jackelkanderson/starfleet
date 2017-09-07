var express = require('express');
var AWS = require('aws-sdk');
AWS.config.loadFromPath('./config.json');
var sqs = new AWS.SQS();
var router = express.Router();

var GitHubApi = require("github");
var base64 = require('base-64');

var messageNo = 1;


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/sendToSQS', function(req, res) {
  console.log(req.text);
  sendSQSMessage(req.text);
})

router.get('/reset', function(req, res) {
  console.log('resetting...');
  resetPipeline();
})

function sendSQSMessage(result) {
  var params = {
      MessageBody: result,
      QueueUrl: 'https://sqs.us-west-2.amazonaws.com/386908507125/Showcase1.fifo', //TODO: dynamic URL
      DelaySeconds: 0,
      MessageAttributes: {
          'Result': {
              DataType: 'String',
              StringValue: result
          }
      },
      MessageDeduplicationId: `showcase${messageNo}`,
      MessageGroupId: `showcase${messageNo}`
  };
  sqs.sendMessage(params, function(err, data) {
    if (err) console.log('borked'); // an error occurred
    else     console.log('it didn\'t bork');           // successful response
  });
  messageNo++;
}

function resetPipeline() {
  var oauthToken = "c974ef9809f909e8ea8b451d5587782edd892513";
  var gitHubUser = "derickwalburger";
  var gitHubRepo = "tech-showcase-1";
  var fileToUpdate = "Showcase1/file.txt";  // Path to file in repo without leading slash
  
  var commitMessage = "yolo reset";
  var fileContent = base64.encode((Math.random()*1000000).toString());   // Base 64 encoded content
  
  var branchName = "master";
  
  var github = new GitHubApi({
      timeout: 5000,
      host: "api.github.com"
  });
  
  github.authenticate({
      type: "oauth",
      token: oauthToken
  }, function(err, res) {
    if (err) console.log(err)
    });
  
  github.repos.getContent({
      owner: gitHubUser,
      repo: gitHubRepo,
      path: fileToUpdate
  }, function(err, res) {
      if (!err) {
          var blobSha = res.data.sha;
  
          github.repos.updateFile({
              owner: gitHubUser,
              repo: gitHubRepo,
              path: fileToUpdate,
              message: commitMessage,
              content: fileContent,
              sha: blobSha,
              branch: branchName
          }, function(err, res) {
            if (err) console.log(err)
          })
      } else {
        console.log(err)
      }
  });
}

module.exports = router;
