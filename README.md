<p align="center"> 
  <a href="zygmut.github.io/web-notepad" rel="noopener">
    <img width=115px height=115px src="assets/favicon.png" alt="Notepad">
  </a>
</p>

<h3 align="center">Web notepad</h3>

<div align="center">
<img src="https://img.shields.io/github/repo-size/zygmut/web-notepad?style=flat-square.svg">
</div>

---

<p align="center">A minimal web-based notepad!</p>

## 🧠 About

### Why

I love minimalism. When I was in my first year of college, I was struggling to keep my phase taking notes on lectures as my handwritting isn't the best. The default notepad on windows worked just fine, but it lacked in ✨desing✨ and some times I tought to myself "I could do a better job". I ended up using vim, but not many people like using the command line to take notes. And so, I started to develop this notepad as a way to warm up to my next semester of college

### How is this better from a default notepad

- The design is really minimalistic, reducing posible distractions
- You can customize almost every aspect on the `config file`
- Dark/light mode  

### 🌐 Language List

At this point in development, we support the following languages:
- English
- Spanish
- Catalan

## 🏁Getting started 

These instructions will get you started on running this web locally to take full advantage of the configuration

## 📩 Installation

- Clone this repository via de `clone` command or download de latest release 
- Open the `index.html` with your favorite web browser

## ⚙️ Configuration

The configuration file can be found in the main folder, besides the `ìndex.html`. In it you'll find the list of all posible modificable aspects (without touching the code) that I've thought. Let's go one by one:

<div align="center">
  
  | Variable        | Description                                                            | Possible values              |
  |-----------------|------------------------------------------------------------------------|------------------------------|
  | language        | Default language                                                       | See List of languages        |
  | dark_mode       | Default theme (Dark/light)                                             | true/false                   |
  | icon_mode       | Toggles text visibility (Only show icons)                              | true/false                   |
  | zen_mode        | Toggles menu button visibility                                         | true/false                   |
  | font_family     | Default font family                                                    | See list of fonts in your OS |
  | font_size       | Default font size                                                      | e.g. 25px                    |
  | animation_speed | Default animation speed. Set to 0 to disable                           | e.g. 0.2s                    |
  | icon_size       | Default icon size                                                      | e.g. 30px                    |
  | navbar_height   | Default navigation bar height. Set to 0 to have the height of the font | e.g. 50px                    |
  
</div>

The rest of variables are color codes for light and dark mode respectivelly, so you can set your own theme colors
  
## ✍️ Who can contribute?

Really anyone. I learned a lot doing this project, so I encourage other people to see how this web works and If you want to exapnd on the language list or add new features, go for it!

## 🙇 Inspiration

- [Rahif's Notepad](https://github.com/Muhammed-Rahif/Notepad)
- [Migeravila's Startpage](https://github.com/migueravila/Bento)
- [Itsapi's Notepad](https://github.com/itsapi/notepad)

## 🛠️ Built it using

- [Lucide's Icons](https://lucide.dev/)
