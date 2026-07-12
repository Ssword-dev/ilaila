FROM mcr.microsoft.com/devcontainers/base:3.0-ubuntu22.04

ARG NODE_ENV=development
ENV NODE_ENV=development

USER root

RUN apt-get update -y && \
    apt-get install -y ripgrep curl sudo && \
    rm -rf /var/lib/apt/lists/*

# -m: create a user home directory
# --s /bin/bash: set default shell to bash
RUN useradd -m -s /bin/bash dev

# add user `dev` to sudo group.
RUN groupadd -f sudo && usermod -aG sudo dev

# add user `dev` to sudoers.
RUN echo "dev ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers

USER dev

EXPOSE 3000