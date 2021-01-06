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
  let sample = process.env.SAMPLE;
  if (!sample){
    sample = "Added";
  }
  else {
    sample += ";Added";
  }
  
  core.exportVariable("SAMPLE", sample);
  
} catch (error) {
  core.setFailed(error.message);
}
