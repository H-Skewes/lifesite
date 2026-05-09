# LifeSite

This site will try to bring a sleek older look with interesting solutions to everyday
tasks throughout your house. In my case I plan on putting several of these roots on tablets
across my house to make somethings just a little bit nicer. In the future there will be a sunlight
mapper that integrates with a hardware project I am doing, a fashion designer for a tablet, a recipe and schedule viewer for a tablet, and potentially local ai model integration with certain
features.


## BackLog

- Fully complete login/create api connection plus ui - before May 12th
- Fully complete events api on backend - before May 15
- Fully complete initial calendar view on frontend and setup api - end of May
- Fully complete daily todos modal on calendar page - end of May
- Fully complete budgeting dashboard backend and frontend - this is time consuming end of June most likely
- Make pages protected on frontend specifically, this will be done on backend already - Beginning of June
- Fully setup emailing notifcations for todos and weather in morning - end on June
- Begin working on security headers - beginning of July
- Fully complete fashion feature for styling outfits from closet - end of July
- Fully integrate sun detector for backyard lighting heat map - Likely before spring 2027

## Complete
- Backend login/creation api
- frontend login/creation/token verification api fetch


## Necessary Installs for dnf/Fedora 

Docker files coming soon after calendar and todo are done

### Fedora

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
