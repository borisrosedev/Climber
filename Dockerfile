# Dockerfile
FROM ubuntu:latest

# Mettre à jour le système et installer les dépendances
RUN apt-get update && apt-get install -y \
    software-properties-common \
    && apt-add-repository --yes --update ppa:ansible/ansible \
    && apt install python3.11-venv sshpass \
    && apt-get install -y ansible \
    && apt-get clean

# Copier les fichiers Ansible nécessaires (optionnel)
# COPY ./ansible /etc/ansible

# Définir le point d'entrée
CMD ["bash"]