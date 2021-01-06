const core = require('@actions/core');
const github = require('@actions/github');

try {
  console.log(`Running action`);
  var obj = {
      a: {
        b: {
            c: {
                d: "e",
                e: "f"
            },
            f: {
                g: "g",
                h: "g"
            }
        }
      }
  };

  const payload = JSON.stringify(obj)
  console.log(`The event payload: ${payload}`);
  core.setOutput("metadata", payload)
  console.log(process.env.SAMPLE);
  
  if (!process.env.SAMPLE){
    process.env.SAMPLE = "Added";
  }
  else {
    process.env.SAMPLE += ";Added";
  }
  
} catch (error) {
  core.setFailed(error.message);
}
