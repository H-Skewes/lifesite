# LifeSite

This site will try to bring a sleek older look with interesting solutions to everyday
tasks throughout your house. In my case I plan on putting several of these roots on tablets
across my house to make somethings just a little bit nicer. In the future there will be a sunlight
mapper that integrates with a hardware project I am doing, a fashion designer for a tablet, a recipe and schedule viewer for a tablet, and potentially local ai model integration with certain
features.


# BackLog



# Complete



# Necessary Installs for dnf/Fedora or apt/Ubuntu

## Fedora

```
sudo dnf install python3 python3-devel -y
sudo dnf install git -y
```

### Nginx
```
sudo dnf install nginx -y
sudo systemctl enable nginx
sudo systemctl start nginx
```

### Docker tool

```
sudo apt install ca-certificates curl -y
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin -y
sudo systemctl enable docker
sudo systemctl start docker
sudo usermod -aG docker $USER
```

### uv

```
curl -LsSf https://astral.sh/uv/install.sh | sh
source $HOME/.local/bin/env
```
