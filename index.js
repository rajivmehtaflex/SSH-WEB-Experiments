const Docker = require('dockerode');
const docker=Docker({host:"http://localhost",port:"5555"})
// docker.listContainers((err, containers)=>{
//     containers.forEach((containerInfo)=>{
//     //   docker.getContainer(containerInfo.Id).stop(cb);
//         console.log(containerInfo)
//     });
//   });

docker.run('ubuntu:latest', ['tail -f /dev/null','-d'], process.stdout, function (err, data, container) {
    console.log(data);
  });

console.log("done!!!")