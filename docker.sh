#!/bin/bash

get_answer () {
    read answer
    if [ $answer == "oui" ]; then 
        docker-compose up -d
    else 
       display_message "Action avortée"
    fi
}

display_message () {
    declare -r message=$(tput setaf 2)$1$(tput setaf 0)
    echo "$message"
}

display_message "Voulez-vous monter le conteneur docker ? (oui/non)" 
get_answer


