#!/bin/bash

if [ "`uname`" = "Darwin" ]; then
  brew install figlet
elif [ "`uname`" = "Linux" ]; then
  if [ "`command -v yum`" != "" ]; then
    sudo yum install figlet
  elif [ "`command -v apt`" != "" ]; then
    sudo apt install figlet
  fi
fi
