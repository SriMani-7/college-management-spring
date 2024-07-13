#!/bin/bash

function create() {
  read -r -p "Name: " name
  read -r -p "Description: " description
  body=$(cat <<EOF
  {
    "name": "$name",
    "description": "$description"
  }
EOF
  )
  post "$BASE_URL/courses" "$body"
}

function readAll() {
  curl "$BASE_URL/courses"
}

function readOne() {
  curl "$BASE_URL/courses/$1"
}