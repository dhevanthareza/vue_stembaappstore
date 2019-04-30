#!/bin/bash
#isntaller untuk aplikasi Spotify

# Tambah KeyServer
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 931FF8E79F0876134EDDBDCCA87FF9DF48BF1C90

# Tambah repository
echo deb http://repository.spotify.com stable non-free | sudo tee /etc/apt/sources.list.d/spotify.list

# Update untuk mendapatkan spotify
sudo apt-get update

# Install Spotify
sudo apt-get install spotify-client