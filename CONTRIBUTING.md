# Contributing at Layer5

We are beyond excited to see that you want to contribute! We would love to accept your contributions. Layer5 is built by the community and warmly welcomes collaboration. There are many ways in which one could contribute to Layer5 and every contribution is equally appreciated here. Navigate through the following to understand more about contributing here. 

  - [Before You Get Started](#before-you-get-started)
  - [Contributing to Layer5 Projects](#contributing-to-layer5-projects)
  - [How to Contribute](#how-to-contribute)
      - [Prerequisites](#prerequisites)
      - [Set up your Local Development Environment](#set-up-your-local-development-environment)
      - [Signing-off on Commits](#signing-off-on-commits)


# Before You Get Started

## Code of Conduct

Layer5 follows the [Cloud Native Computing Foundation (CNCF) Code of Conduct](https://github.com/cncf/foundation/blob/master/code-of-conduct.md).

Instances of abusive, harassing, or otherwise unacceptable behavior may be reported by contacting community@layer5.io.
Violation of the code of conduct is taken seriously, kindly <a href="https://docs.google.com/forms/d/e/1FAIpQLSeWzC5HjlHugFjB0TtaAVnSkPPqsRQ3JRYjdwyDXf0oyRxcdQ/viewform"> report any violations</a> of the Code of Conduct by filling in the <a href="https://docs.google.com/forms/d/e/1FAIpQLSeWzC5HjlHugFjB0TtaAVnSkPPqsRQ3JRYjdwyDXf0oyRxcdQ/viewform"> Incident report</a>.
The comfort and safety of Layer5 community members are our priority. Please do well to adhere to the Code of Conduct to participate in the Layer5 community.

## Newcomers Guide

To help you get started on contributing to Layer5 projects, refer to the [Layer5 Newcomers Guide](https://layer5.io/community/newcomers), which aims to make contributions easier for new folks like you! See the resources and tutorials to help you get started.

## Style Guide

The Layer5 website is hosted in this repository and is built using Gatsbyjs. Before opening a pull request, please review the [design doc](https://docs.google.com/document/d/1rvUZy2_S1a2_14BAQIg6b9cMhUuu04kYzkOPDPaPptI/edit#) to learn more about the structure of the website. Once a pull request has been submitted, a preview deployment will be built and made available to you and other contributors on your PR to review.

## Discussion Forum

Join the [discussion forum](https://discuss.layer5.io/c/landscape/7) (the Landscape topic is appropriate for all layer5.io questions) to discuss suggested new features, possible bugs, enhancement in user experience, and any other aspects of the site. The discussion forum is our preferred method of communication, you can, however, also inquire in the [#websites](https://layer5io.slack.com/archives/C015QJKUMPU) channel in the Layer5 Slack workspace.

# Contributing to Layer5 Projects

Please follow these steps and note these guidelines to begin contributing:

1. First step is to set up the local development environment. See [this](#how-to-contribute) on how to do the same. 
1. Bug fixes are always welcome. Start by reviewing the [list of bugs](https://github.com/layer5io/layer5/labels/kind%2Fbug).
1. A good way to easily start contributing is to pick and work on a [good first issue](https://github.com/layer5io/layer5/labels/good%20first%20issue). We try to make these issues as clear as possible and provide basic info on how the code should be changed, and if something is unclear feel free to ask for more information on the issue.
1. We regularly discuss new issues to work on in our [discussion forum](https://discuss.layer5.io/c/landscape/7) and the [#websites](https://layer5io.slack.com/archives/C015QJKUMPU) channel. Feel free to join and discuss any issue or any idea that you may have.

# How to Contribute

## Prerequisites

Make sure you have the following prerequisites.
- Your operating system is either linux distro or Mac. Set up [WSL 2](https://docs.microsoft.com/en-us/windows/wsl/install) if you are on windows (windows 10 and above).
- Preffered linux distro is 18.04 or 20.04.

# How to install install Discourse in development mode (For linux users)
Open a terminal in home directory, then create a new file with the command below
```
sudo vi scripts
```
This will open an editor in your terminal. If you are familiar with the `vi` editor, Copy the scripts below and paste inside, then save the file. If you are don't know how to use the `vi` editor, open the created file in your editor of choice and paste the script below and save it.
```
#!/usr/bin/env bash

# Install Rails

trap 'ret=$?; test $ret -ne 0 && printf "failed\n\n" >&2; exit $ret' EXIT

set -e
log_info() {
  printf "\n\e[0;35m $1\e[0m\n\n"
}

if [ ! -f "$HOME/.bashrc" ]; then
  touch $HOME/.bashrc
fi

log_info "Updating Packages ..."
  sudo apt-get update

log_info "Installing Git ..."
  sudo apt-get -y install git

log_info "Installing build essentials ..."
  sudo apt-get -y install build-essential

log_info "Installing libraries for common gem dependencies ..."
  sudo apt-get -y install libxslt1-dev libcurl4-openssl-dev libksba8 libksba-dev libreadline-dev libssl-dev zlib1g-dev libsnappy-dev

log_info "Installing sqlite3 ..."
 sudo apt-get -y install libsqlite3-dev sqlite3

log_info "Installing Postgres ..."
  sudo apt-get -y install postgresql postgresql-server-dev-all postgresql-contrib libpq-dev

log_info "Uninstalling old redis version ..."
  sudo apt-get purge --auto-remove redis-server

log_info "Installing Redis ..."
  sudo add-apt-repository ppa:redislabs/redis
  sudo apt-get update
  sudo apt-get install redis

log_info "Installing curl ..."
  sudo apt-get -y install curl

log_info "Installing ImageMagick ..."
  sudo apt-get -y install libtool
  wget https://raw.githubusercontent.com/discourse/discourse_docker/master/image/base/install-imagemagick
  chmod +x install-imagemagick
  sudo ./install-imagemagick

log_info "Installing image utilities ..."
  sudo apt-get -y install advancecomp gifsicle jpegoptim libjpeg-progs optipng pngcrush pngquant
  sudo apt-get -y install jhead

if [[ ! -d "$HOME/.rbenv" ]]; then
  log_info "Installing rbenv ..."
    git clone https://github.com/rbenv/rbenv.git ~/.rbenv

    if ! grep -qs "rbenv init" ~/.bashrc; then
      printf 'export PATH="$HOME/.rbenv/bin:$PATH"\n' >> ~/.bashrc
      printf 'eval "$(rbenv init - --no-rehash)"\n' >> ~/.bashrc
    fi

    export PATH="$HOME/.rbenv/bin:$PATH"
    eval "$(rbenv init -)"
fi

if [[ ! -d "$HOME/.rbenv/plugins/ruby-build" ]]; then
  log_info "Installing ruby-build, to install Rubies ..."
    git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
fi

ruby_version="2.7.1"

log_info "Installing Ruby $ruby_version ..."
  rbenv install "$ruby_version"

log_info "Setting $ruby_version as global default Ruby ..."
  rbenv global $ruby_version
  rbenv rehash

log_info "Updating to latest Rubygems version ..."
  gem update --system

log_info "Installing Rails ..."
  gem install rails

log_info "Installing Bundler ..."
  gem install bundler

log_info "Installing MailHog ..."
  sudo wget -qO /usr/bin/mailhog https://github.com/mailhog/MailHog/releases/download/v1.0.1/MailHog_linux_amd64
  sudo chmod +x /usr/bin/mailhog

log_info "Installing Node.js 14 ..."
  curl -sL https://deb.nodesource.com/setup_14.x | sudo bash -
  sudo apt-get -y install nodejs
  sudo npm install -g svgo
  sudo npm install -g yarn

```
Go back to your terminal and run the command below to make that file an executable. Make sure that you are in the same directory of the created file or you can target the file path 
```
chmod +x /path-to-file/filename
```
Replace the `path-to-file and filename` with the correct path and name of the file if your terminal is not opened in the same directory as the file.

Then run the code below and hit enter.
```
sudo ./filename
```

This will install following new packages on your system:
- Git
- rbenv
- ruby-build 
- Ruby (stable)
- Rails
- PostgreSQL
- SQLite
- Redis 
- Bundler
- MailHog
- ImageMagick
 
Now that we have installed Discourse dependencies, let’s move on to install Discourse itself.

## Clone Discourse

Clone the Discourse repository in ~/discourse folder:
```
git clone https://github.com/discourse/discourse.git ~/discourse
```

`~` indicates home folder, so Discourse source code will be available in your home folder.

## Setup Database

Create role with the same name as your ubuntu system username:

```
sudo -u postgres createuser -s "$USER"
```

## Bootstrap Discourse

Switch to your Discourse folder:
```
cd ~/discourse
```

Install the needed gems
```
source ~/.bashrc
bundle install
```
Now that you have successfully installed gems, run these commands:
```
bundle exec rake db:create 
bundle exec rake db:migrate
RAILS_ENV=test bundle exec rake db:create db:migrate
```
Try running the specs:
```
bundle exec rake autospec
```
All the tests should pass.

Start rails server:
```
bundle exec rails server
```
You should now be able to connect with your Discourse app on http://localhost:3000 - try it out!

**Starting with Discourse 2.5+ EmberCLI is required in development and these additional steps will be required:**

In a separate terminal instance, navigate to your discourse folder (cd ~/discourse) and run:
```
bin/ember-cli
```
You should now be able to navigate to http://localhost:4200 26 to see your local Discourse installation.
## Create New Admin

To create a new admin, run the following command:
```
RAILS_ENV=development bundle exec rake admin:create
```
Follow the prompts, and a new admin account will be created.
Configure Mail

## Run MailHog:
```
mailhog
```

Congratulations! You are now the admin of your own Discourse installation!


# <a name="contributing">General Contribution Flow</a>

In order to contribute to Meshery, please follow the fork-and-pull request workflow described [here](./CONTRIBUTING-gitflow.md).

## <a name="commit-signing">Signing-off on Commits (Developer Certificate of Origin)</a>

To contribute to this project, you must agree to the Developer Certificate of
Origin (DCO) for each commit you make. The DCO is a simple statement that you,
as a contributor, have the legal right to make the contribution.

See the [DCO](https://developercertificate.org) file for the full text of what you must agree to
and how it works [here](https://github.com/probot/dco#how-it-works).
To signify that you agree to the DCO for contributions, you simply add a line to each of your
git commit messages:

```
Signed-off-by: Jane Smith <jane.smith@example.com>
```

In most cases, you can add this signoff to your commit automatically with the
`-s` or `--signoff` flag to `git commit`. You must use your real name and a reachable email
address (sorry, no pseudonyms or anonymous contributions). An example of signing off on a commit:
```
$ commit -s -m “my commit message w/signoff”
```

To ensure all your commits are signed, you may choose to add this alias to your global ```.gitconfig```:

*~/.gitconfig*
```
[alias]
  amend = commit -s --amend
  cm = commit -s -m
  commit = commit -s
```
Or you may configure your IDE, for example, Visual Studio Code to automatically sign-off commits for you:

<a href="https://user-images.githubusercontent.com/7570704/64490167-98906400-d25a-11e9-8b8a-5f465b854d49.png" ><img src="https://user-images.githubusercontent.com/7570704/64490167-98906400-d25a-11e9-8b8a-5f465b854d49.png" width="50%"><a>


# <a name="maintaining"> Reviews</a>
All contributors are invited to review pull requests. See this short video on [how to review a pull request](https://www.youtube.com/watch?v=isLfo7jfE6g&feature=youtu.be).

# New to Git?
Resources: https://lab.github.com and https://try.github.com/

### License

This repository and site are available as open source under the terms of the [Apache 2.0 License](https://opensource.org/licenses/Apache-2.0).

### About Layer5

**Community First**
<p>The <a href="https://layer5.io">Layer5</a> community represents the largest collection of service mesh projects and their maintainers in the world.</p>

**Open Source First**
<p>Our projects establish industry standards and enable service developers, owners, and operators with repeatable patterns and best practices for managing all aspects of distributed services. Our shared commitment to the open source spirit push the Layer5 community and its projects forward.</p>
