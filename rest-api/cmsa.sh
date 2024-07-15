#!/bin/bash
export BASE_URL="http://localhost:8888/api"

function post() {
    curl -X POST "$1" \
      -H 'Content-Type: application/json' \
      -d "$2"
}

case $1 in
  "course") source courses.sh;;
esac

case $2 in
  "-c") create;;
  "-l") readAll;;
  "-g") readOne "$3";;
esac

