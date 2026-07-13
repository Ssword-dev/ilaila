FROM mcr.microsoft.com/devcontainers/base:3.0-ubuntu22.04

ARG NODE_ENV=development
ARG DEV_USER_ID=1970
ENV NODE_ENV=$NODE_ENV

USER root

RUN apt-get update -y && \
    apt-get install -y ripgrep curl sudo && \
    rm -rf /var/lib/apt/lists/*

# create group 'dev'
RUN groupadd -g ${DEV_USER_ID} dev

RUN useradd -m -u ${DEV_USER_ID} -g dev -s /bin/bash dev

RUN usermod -aG sudo dev && \
    echo "dev ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers

RUN chmod 755 -R /home/dev
USER dev

EXPOSE 3000