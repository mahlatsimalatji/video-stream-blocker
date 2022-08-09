#!/bin/bash 

aws ecr get-login-password --region af-south-1 | docker login --username AWS --password-stdin 331851903969.dkr.ecr.af-south-1.amazonaws.com/video-stream-blocker
docker build -t -f ../Dockerfile video-stream-blocker .
docker tag docker tag video-stream-blocker:latest 331851903969.dkr.ecr.af-south-1.amazonaws.com/video-stream-blocker:latest
docker docker push 331851903969.dkr.ecr.af-south-1.amazonaws.com/video-stream-blocker:latest