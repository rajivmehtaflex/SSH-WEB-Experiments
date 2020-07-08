## Demo

**List of Sequences**

  docker build -t rajivmehtajs/sshbox:v1 .

  docker images 

  docker run -d -P --name mmbox rajivmehtajs/sshbox:v1 

  docker port --help 

  docker port mmbox 22 

  ssh root@localhost -p 32768 

  docker ps

  ssh root@172.17.0.3 -p 32768 

  ssh root@localhost -p 32768 

  docker run -d -P --network host --name mmbox rajivmehtajs/sshbox:v1

  docker port mmbox 22

  ssh root@localhost
  

